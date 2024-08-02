import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../context_provider/UserContext'
import { Navigate } from 'react-router-dom'
import Worbite from '../components/Worbite'

const ProfilePage = () => {
  const [redirect, setRedirect] = useState(null)
  const[worbites, setWorbites] = useState([])
  const {setUser} = useContext(UserContext)

  const logOut = async ()=>{
    await axios.post('/account/logout')
    setRedirect('/')
    setUser(null)
  }

  useEffect(()=>{
    const getWorbites = async()=>{
      const {data}=await axios.get('/worbites')
      setWorbites(data)
    }
    getWorbites()
  },[])

  console.log(worbites);
  
  if(redirect){
    return <Navigate to ={'/login'}/>
  }

  return (
    <>
    {
      worbites.map(worbite=>(
        <p>{worbite.worbite}</p>
      ))
    }
      <button className='border' onClick={logOut}>
        Log Out
      </button>
      
    </>
    
  )
}

export default ProfilePage