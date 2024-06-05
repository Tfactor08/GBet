import React from 'react'
import Bet from './Bet'

const BetList = ({ bets, onBetClick }) => {
  return (
    <div style={{ margin: 5 }}>
      {bets.length
      ? <ul className="collection">
        {bets.map((bet) => (
          <Bet bet={bet} onBetClick={onBetClick} key={bet.id} />
        ))}
      </ul>
      : <h6 style={{ textAlign: "center", fontStyle: "italic" }}>
          Пока нет ставок :(
        </h6>
      }
    </div>
  )
}

export default BetList