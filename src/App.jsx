import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDaashboard from './components/Dashboard/EmployeeDaashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './util/LocalStorage'

const App = () => {

  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()

  },)
  

  return (
    <>
      <Login/>
      {/* <EmployeeDaashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App