import React, { useState, useEffect, Fragment } from 'react'
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context/authContext'
import { UserContext } from './context/userContext'
import APIService from './services/APIService'

const App = () => {

  /*
  Todo:
    behavior in the absence of data
  */

  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({student: {}})

  useEffect(() => {

    if (localStorage.getItem('auth')) {
      const userId = localStorage.getItem('userId')
      APIService.getUser(userId)
        .then(user => setUser(user))
        .catch(() => {
          setIsAuth(false)
          localStorage.clear()
        })
      setIsAuth(true)
    }
    
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </UserContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
