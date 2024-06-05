import React from 'react'

const Bet = ({ bet, onBetClick }) => {
  return (
    <li
      className="collection-item"
      style={{ fontSize: 16, border: "1px solid", borderColor: "black" }}
      onClick={() => onBetClick(bet)}
    >
      <span>
        {bet.bet_object.last_name} {bet.bet_object.name}:{" "}
      </span>
      <span>{bet.bet_type.name}</span>
      <span style={{ fontWeight: "bold", float: "right" }}>
        {bet.rate}
      </span>
    </li>
  )
}

export default Bet