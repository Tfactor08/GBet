import React, { useState, useEffect, useContext } from 'react'
import Loader from '../components/Loader'
import UserBetList from '../components/UserBetList'
import { UserContext } from '../context/userContext'
import { useFetching } from '../hooks/useFetching'
import APIService from '../services/APIService'

const BetHistory = () => {

  const [bets, setBets] = useState([])
  const { user } = useContext(UserContext)
  const [fetchBets, isBetsLoading] = useFetching(async () => {
    const bets = await APIService.getUserBets(user.student.id)
    setBets(bets)
  })

  useEffect(() => {
    fetchBets()
  }, [])

  return (
    <div>
      {isBetsLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
      : <UserBetList bets={bets} />}
    </div>
  )
}

export default BetHistory