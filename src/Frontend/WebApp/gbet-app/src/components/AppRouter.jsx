import React, { useContext } from 'react'
import { Routes, Route } from "react-router-dom"
import { AuthContext } from '../context/authContext'
import { UserContext } from '../context/userContext'
import { privateRoutes, protectedRoutes, publicRoutes } from '../router/routes'

function createRoutes (routes) {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          element={<route.component />}
          path={route.path}
        />
      ))}
    </Routes>
  )
}

const AppRouter = () => {

  const { isAuth } = useContext(AuthContext)
  const { user } = useContext(UserContext)

  if (isAuth && user.is_verified) {
    return createRoutes(privateRoutes)
  }

  else if (isAuth && !user.is_verified) {
    return createRoutes(protectedRoutes)
  }

  else {
    return createRoutes(publicRoutes)
  }
}

export default AppRouter