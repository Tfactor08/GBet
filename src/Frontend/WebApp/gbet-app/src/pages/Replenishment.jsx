import React from 'react'

const Replenishment = () => {

  const primeTextStyle = {
    fontSize: 18
  }
  const boldTextStyle = {
    fontSize: 18,
    fontWeight: "bold"
  }
  const infoTextStyle = {
    fontSize: 17,
    color: "gray"
  }
  const warningTextStyle = {
    fontSize: 17,
    color: "#e01919",
  }

  return (
    <div style={{ margin: 10, lineHeight: 1.2 }}>
      <span style={primeTextStyle}>
        Номер карты (Сбер):
      </span>
      <br/>
      <span style={boldTextStyle}>
        5228 6005 1897 1090
      </span>
      <br/>
      <span style={primeTextStyle}>
        Привязанный номер телефона:
      </span>
      <br/>
      <span style={boldTextStyle}>
        +7(987) 287-37-38
      </span>
      <br/><br/>
      <span style={infoTextStyle}>
        Для пополнения средств - отправьте нужную сумму на указанную выше карту. Баланс пополнится в течение часа.
      </span>
      <br/>
      <span style={warningTextStyle}>
        Минимальная сумма пополнения - 10 рублей!
      </span>
    </div>
  )
}

export default Replenishment