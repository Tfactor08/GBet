import React, { useContext, useState, useEffect, useRef } from 'react'
import { Button } from 'react-bootstrap'
import { AuthContext } from '../context/authContext'
import { UserContext } from '../context/userContext'
import APIService from '../services/APIService'

const Login = () => {

    const {setIsAuth} = useContext(AuthContext)
    const {setUser} = useContext(UserContext)
    const [students, setStudents] = useState([])
    const selectRef = useRef()

    useEffect(() => {
      APIService.getUnauthorizedStudents()
        .then(students => setStudents(students))

      return () => {
        setStudents([])
      }
    }, [])

    const login = async (e) => {
        e.preventDefault()

        const index = selectRef.current.selectedIndex
        const selected = selectRef.current.options[index]
        const studentId = selected.getAttribute('id')

        await APIService.createUser(studentId)

        localStorage.setItem('auth', 'true')
        localStorage.setItem('userId', studentId.toString())

        setIsAuth(true)
        APIService.getUser(studentId).then(user => setUser(user))
    }

    return (
      <form onSubmit={login}>
        <select ref={selectRef} className="browser-default" defaultValue={""}>
          <option value="" disabled>
            Кто вы
          </option>
          {students.map((s) => (
            <option key={s.id} id={s.id}>
              {s.last_name} {s.name}
            </option>
          ))}
        </select>
        <br />
        <Button onClick={login}>Ok</Button>
      </form>
    )
}

export default Login