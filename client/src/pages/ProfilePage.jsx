import React, { useContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../../context_provider/UserContext'
import { Navigate } from 'react-router-dom'

const ProfilePage = () => {
  const [redirect, setRedirect] = useState(null)
  const {setUser} = useContext(UserContext)
  const logOut = async ()=>{
    await axios.post('/account/logout')
    setRedirect('/')
    setUser(null)
  }

  if(redirect){
    return <Navigate to ={'/login'}/>
  }

  return (
    <button onClick={logOut}>
      Log Out
    </button>
  )
}

export default ProfilePage