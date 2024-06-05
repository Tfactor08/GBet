import React from 'react'

const About = () => {

  const titleTextStyle = {
    fontSize: 18,
    fontWeight: "bold"
  }
  const infoTextStyle = {
    fontSize: 17,
    color: "gray",
  }

  return (
    <div style={{ margin: 10, lineHeight: 1.2 }}>
      <span style={titleTextStyle}>Букмекерская компания GBet</span>
      <br />
      <div style={{ marginTop: 5 }}>
        <span style={infoTextStyle}>
          Букмекерская компания GBet является дочерней компанией всемирно
          известной фирмы TFactory. GBet предлагает большой выбор ставок на
          оценки учеников в пределах класса. Но слово &quot;предел&quot; для нас
          имеет временный характер.
        </span>
      </div>

      <br />
      <br />

      <span style={titleTextStyle}>Аккаунт</span>
      <br />
      <div style={{ marginTop: 5 }}>
        <span style={infoTextStyle}>
          Для получения доступа к приложению вам необходимо дождаться
          подтверждения аккаунта. После подтверждения аккаунта вы автоматически
          получите бесплатную ставку в размере 10 рублей. Если аккаунт не будет
          подтверждён – он будет удалён.
        </span>
      </div>

      <br />
      <br />

      <span style={titleTextStyle}>Пополнение средств</span>
      <br />
      <div style={{ marginTop: 5 }}>
        <span style={infoTextStyle}>
          Информацию о пополнении средств можно найти на странице пополнения
          средств. Для перехода – нажмите на плюсик во всплывающем окне.
        </span>
      </div>

      <br />
      <br />

      <span style={titleTextStyle}>Совершение ставок</span>
      <br />
      <div style={{ marginTop: 5 }}>
        <span style={infoTextStyle}>
          Чтобы просмотреть список доступных ставок, перейдите во вкладку
          &quot;Главная&quot; и выберите событие. Минимальная сумма ставки – 10
          рублей. На одного ученика в одном событии можно поставить лишь один
          раз.
        </span>
      </div>

      <br />
      <br />

      <span style={titleTextStyle}>Просмотр истории ставок</span>
      <br />
      <div style={{ marginTop: 5 }}>
        <span style={infoTextStyle}>
          Для просмотра истории ваших ставок и дополнительной информации –
          перейдите в соответствующую вкладку во всплывающем окне.
        </span>
      </div>

      <br />
      <br />

      <span style={titleTextStyle}>Получение выигрыша</span>
      <br />
      <div style={{ marginTop: 5 }}>
        <span style={infoTextStyle}>
          Если ваша ставка является выиграшной, вы получите свой выигрыш
          автоматически не позднее следующего дня после проведения события. В
          случае отмены события, вы получите сумму вашей ставки обратно.
        </span>
      </div>

      <br />
      <br />

      <span style={titleTextStyle}>Вывод средств</span>
      <br />
      <div style={{ marginTop: 5 }}>
        <span style={infoTextStyle}>
          Информацию о выводе средств можно найти на странице вывода средств.
          Для перехода – перейдите в соответствующую вкладку во всплывающем
          окне.
        </span>
      </div>

      <br />
      <br />

      <span style={titleTextStyle}>Условные обозначения</span>
      <br />
      <div style={{ marginTop: 5 }}>
        <span style={infoTextStyle}>
          E_5: &#9;5;
          <br />
          E_4: 4;
          <br />
          E_3: 3;
          <br />
          E_2: 2;
          <br />
          M_2: больше, чем 2 (3, 4, 5);
          <br />
          M_3: больше, чем 3 (4, 5);
          <br />
          L_5: меньше, чем 5 (4, 3, 2);
          <br />
          L_4: меньше, чем 4 (3, 2).
        </span>
      </div>

      <br />
      <br />

      <span style={titleTextStyle}>Сотрудничество и поддержка</span>
      <br />
      <div style={{ marginTop: 5 }}>
        <span style={infoTextStyle}>По всем вопросам обращайтесь </span>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tfactory.gbet@gmail.com"
          target="_blank"
          style={{ fontSize: 17, textDecoration: "underline" }}>
          по ссылке
        </a>
      </div>
    </div>
  )
}

export default About