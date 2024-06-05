import React from 'react'
import UserBet from './UserBet'

const UserBetList = ({ bets }) => {
  return (
    <div style={{ margin: 5 }}>
      {bets.length
      ? <ul className="collection">
          {bets.map((bet) => (
              <UserBet bet={bet} key={bet.id} />
          ))}
        </ul>
      : <h6 style={{ textAlign: "center", fontStyle: "italic" }}>
            У вас пока нет ставок :(
        </h6>
      }
    </div>
  )
}

export default UserBetList