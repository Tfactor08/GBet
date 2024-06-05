import React from 'react'

const WithDrawing = () => {

  const infoTextStyle = {
    fontSize: 17,
    color: "gray",
  }
  const warningTextStyle = {
    fontSize: 17,
    color: "#e01919",
  }

  return (
    <div style={{ margin: 10, lineHeight: 1.2 }}>
      <span style={infoTextStyle}>
        Для вывода средств обратитесь к главному бухгалтеру (Исмаилов Тарлан).
      </span>
      <br/><br/>
      <span style={warningTextStyle}>
        Минимальная сумма вывода - 30 рублей!
      </span>
    </div>
  )
}

export default WithDrawing