import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Modal, Button } from "react-bootstrap"
import { UserContext } from '../context/userContext'
import BetForm from '../components/BetForm'
import Loader from '../components/Loader'
import APIService from '../services/APIService'
import BetList from '../components/BetList'
import { useFetching } from '../hooks/useFetching'
import { useMessage } from '../hooks/useMessage'


const Bets = () => {

    const params = useParams()
    const { user, setUser } = useContext(UserContext)
    const [bets, setBets] = useState([])
    const [bet, setBet] = useState({bet_object: {}, bet_type: {}})
    const [modal, setModal] = useState(false)
    const [fetchBets, isBetsLoading] = useFetching(async () => {
      const bets = (await APIService.getBets(params.id)).
        filter(bet => bet.bet_object.id !== user.student.id)
      setBets(bets)
    })
    const [createBet, , error, clearError] = useFetching(async (_betId, betAmount) => {
      const userId = user.student.id
      if (!betAmount) {
        message('Введите сумму ставки')
        return
      }
      const msg = await APIService.createBet(userId, _betId, betAmount)
      message(msg)
      setModal(false)
      APIService.getUser(userId).then((user) => setUser(user))
    })
    const message = useMessage()

    useEffect(() => {
      fetchBets()
    }, [])

    useEffect(() => {
      message(error)
      clearError()
    }, [error])

    return (
      <div>
        <Modal show={modal}>
          <Modal.Header>
            <Modal.Title>
              {bet.bet_object.last_name} {bet.bet_object.name}: {bet.bet_type.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BetForm create={createBet} bet={bet} />
            <br />
            <Button onClick={() => setModal(false)}>Закрыть</Button>
          </Modal.Body>
        </Modal>

        {isBetsLoading ? (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
          >
            <Loader />
          </div>
        ) : (
          <BetList
            bets={bets}
            onBetClick={(bet) => {
              setBet(bet);
              setModal(true);
            }}
          />
        )}
      </div>
    );
}

export default Bets