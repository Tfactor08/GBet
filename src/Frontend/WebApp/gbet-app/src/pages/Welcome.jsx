import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/userContext'

const Welcome = () => {

  const { user } = useContext(UserContext)

  return (
    <div style={{ margin: 10, fontSize: 18, textAlign: "center" }}>
      <span style={{ fontSize: 20, fontWeight: "bold" }}>
        Добро пожаловать, {user.student.name}!
      </span>
      <br />
      <span>
        GBet - первая в мире букмекерская контора ставок на оценки. Всё, что вам
        нужно - это дождаться подтверждения вашего аккаунта, ознакомиться с{" "}
        <Link to="/about">правилами пользования</Link>, получить фрибэт и начать
        игру.
      </span>
    </div>
  )
}

export default Welcome