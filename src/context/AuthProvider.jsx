import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../util/LocalStorage'
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [userData, setuserData] = useState("Hansraj")
   
    useEffect(()=>{
        const {employees,admin} = getLocalStorage()
        setuserData({employees,admin})
    },[])
    
  return (
    <div>
      <AuthContext.Provider value={userData} >
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
