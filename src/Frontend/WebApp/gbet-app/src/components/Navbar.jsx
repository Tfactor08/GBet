import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { UserContext } from '../context/userContext'

const Navbar = () => {

  const navigate = useNavigate()
  const { setIsAuth } = useContext(AuthContext)
  const { user } = useContext(UserContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.clear()
  }

  return (
    <div>
      <nav>
        <a href="#" data-target="slide-out" className="sidenav-trigger" style={{ visibility: user.is_verified ? "visible" : "hidden" }}>
          <i className="material-icons">menu</i>
        </a>
        <div className="nav-wrapper" style={{ backgroundColor: "#9c27b0" }}>
          <a href="#!" className="brand-logo" style={{ fontWeight: "bold" }}>
            GBet
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <strong>{user.balance}</strong>
            </li>
            <li>
              <Link to="/events">Главная</Link>
            </li>
            <li>
              <Link to="/history">История ставок</Link>
            </li>
            <li>
              <Link to="/withdraw">Вывод средств</Link>
            </li>
            <li>
              <Link to="/about">Информация</Link>
            </li>
            <li>
              <Button onClick={logout}>Exit</Button>
            </li>
          </ul>
        </div>
      </nav>

      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view" style={{ padding: 0, height: 110 }}>
            <div
              className="background"
              style={{ backgroundColor: "black" }}
            ></div>
            <a>
              <div
                className="wrapper"
                style={{
                  display: "grid",
                  gridTemplateColumns: "20% 65% 15%",
                  gridTemplateRows: "40px 30px 40px",
                  width: 300,
                }}
              >
                <div style={{ gridRow: "1 / 3" }}>
                  <i
                    className="material-icons"
                    style={{
                      color: "white",
                      fontSize: 55,
                      paddingTop: 12,
                      paddingLeft: 10,
                    }}
                  >
                    account_circle
                  </i>
                </div>
                <div style={{ marginLeft: 5 }}>
                  <h6
                    style={{
                      margin: 0,
                      paddingTop: 20,
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    {user.student.name}
                  </h6>
                </div>
                <div style={{ gridColumn: 2, marginLeft: 8 }}>
                  <h6
                    style={{
                      margin: 0,
                      color: "white",
                      fontSize: 12,
                      marginTop: 5,
                    }}
                  >
                    Id {user.student.id}
                  </h6>
                </div>
                <div style={{ gridColumn: 1, backgroundColor: "#9c27b0" }}>
                  <i
                    className="material-icons"
                    style={{ color: "white", fontSize: 38, paddingLeft: 18 }}
                  >
                    account_balance_wallet
                  </i>
                </div>
                <div style={{ backgroundColor: "#9c27b0" }}>
                  <h6
                    style={{
                      color: "white",
                      fontSize: 22,
                      fontWeight: "bold",
                      margin: 0,
                      marginTop: 8,
                      marginLeft: 5,
                    }}
                  >
                    {user.balance} ₽
                  </h6>
                </div>
                <div style={{ backgroundColor: "#9c27b0", gridColumn: 3 }}>
                  <i
                    className="material-icons"
                    style={{
                      color: "white",
                      fontSize: 30,
                      marginTop: 6,
                      marginLeft: 5,
                    }}
                    onClick={() => navigate("/replineshment/")}
                  >
                    add_circle_outline
                  </i>
                </div>
              </div>
            </a>
          </div>
        </li>

        <li>
          <Link to="/events" style={{ paddingLeft: 15, fontSize: 18 }}>
            <i className="material-icons" style={{ color: "black" }}>
              home
            </i>
            Главная
          </Link>
        </li>
        <li>
          <Link to="/history" style={{ paddingLeft: 15, fontSize: 18 }}>
            <i className="material-icons" style={{ color: "black" }}>
              history
            </i>
            История ставок
          </Link>
        </li>
        <li>
          <Link to="/withdraw" style={{ paddingLeft: 15, fontSize: 18 }}>
            <i className="material-icons" style={{ color: "black" }}>
              exit_to_app
            </i>
            Вывод средств
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ paddingLeft: 15, fontSize: 18 }}>
            <i className="material-icons" style={{ color: "black" }}>
              info
            </i>
            Информация
          </Link>
        </li>
      </ul>
    </div>
  )
  

  // if (isAuth && user.is_verified) {
  //   return (
  //     <div>
  //       {/* <nav>
          
  //       </nav> */}

  //       <ul className="sidenav" id="slide-out">
  //         <li>
  //           <div className="user-view">
  //             <div className="background">
  //               <img src="office.jpg" />
  //             </div>
  //           </div>
  //         </li>
  //         {/* <div className="blue darken-1">
  //           <li style={{ marginLeft: 120 }}>
  //             <h5 style={{color: 'white'}}>{user.student.name}</h5>
  //           </li>
  //         </div>
  //         <div className="blue">
  //           <li style={{ marginLeft: 20 }}>
  //             <h5 style={{color: 'white'}}>{user.balance}</h5>
  //           </li>
  //         </div> */}
          
  //       </ul>
  //     </div>
  //   )}

  // else {
  //   return (
  //     <div>
  //       <nav>
  //         <div className="nav-wrapper blue darken-1">
  //           <a href="#!" className="brand-logo">
  //             GBet
  //           </a>
  //           <a href="#" data-target="mobile-demo" className="sidenav-trigger">
  //             <i className="material-icons">menu</i>
  //           </a>
  //           <ul className="right hide-on-med-and-down">
  //             <li>
  //               <Link to="/">Главная</Link>
  //             </li>
  //             <li>
  //               <Link to="/about">Информация</Link>
  //             </li>
  //             <li>
  //               <Button onClick={logout}>Exit</Button>
  //             </li>
  //           </ul>
  //         </div>
  //       </nav>

  //       <ul className="sidenav" id="mobile-demo">
  //         <li>
  //           <Link to="/">Главная</Link>
  //         </li>
  //         <li>
  //           <Link to="/about">Информация</Link>
  //         </li>
  //       </ul>
  //     </div>
  //   )
  //}
  
}

export default Navbar