import React from 'react'

const UserBet = ({ bet }) => {

  const status = {
      message: '',
      color: 'black'
  }
  
  if (bet.is_verified === false || bet.is_won === false) {
      status.color = 'red'
  } else {
      status.color = 'green'
  }

  if (bet.is_won === false) {
      status.message = 'Проиграна'
  } else {
      status.message = 'Выиграна'
  }
  if (bet.is_verified === false) {
      status.message = 'Не проверена'
  }

  return (
    <li className="collection-item" key={bet.id}>
      <div style={{ textAlign: "center", fontSize: 16 }}>
        <div style={{ marginBottom: 12, fontWeight: "bold" }}>
          <span>
            {bet.bet.bet_object.last_name} {bet.bet.bet_object.name} получит{" "}
            {bet.bet.bet_type.description}. {bet.bet.event.name}
          </span>
        </div>
        <div style={{ textAlign: "start" }}>
          <span>Возможный выигрыш: </span>
          <span style={{fontWeight: "bold", float: "right"}}>
            {parseInt(bet.bet_amount) * parseInt(bet.bet.rate)} ₽
          </span>
        </div>
        <div style={{ textAlign: "start" }}>
          <span>Ставка: </span>
          <span style={{float: "right"}}>
            {bet.bet_amount} ₽
          </span>
        </div>
        <div style={{ textAlign: "end", marginTop: 10 }}>
          <span
            style={{
              fontStyle: "italic",
              fontSize: "smaller",
              marginRight: "20%",
            }}
          >
            {bet.bet.event.date}
          </span>
          <span
            style={{
              color: status.color,
              fontSize: 14
            }}
          >
            {status.message}
          </span>
        </div>
      </div>
    </li>
  )
}

export default UserBet