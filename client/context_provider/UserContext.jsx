import React from 'react'
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

// Context
export const UserContext = createContext({})

// Provider
export const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const[ready,setReady]=useState(false)

  useEffect(()=>{
    const getUser = async()=>{
      if(!user){
        const {data} = await axios.get('/account/profile')
        setUser(data)
        setReady(true)
      }
    }
    getUser()
  },[])

  return (
    <UserContext.Provider value={{user,setUser,ready}}>
      {children}
    </UserContext.Provider>
  )
}

