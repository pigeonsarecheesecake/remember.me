import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../context_provider/UserContext'
import { Navigate } from 'react-router-dom'
import Worbite from '../components/Worbite'


const ProfilePage = () => {
  // User Context
  const {user, setUser} = useContext(UserContext)
  
  // States
  const [redirect, setRedirect] = useState(null)
  const[worbites, setWorbites] = useState([])
 
  // Log out
  const logOut = async ()=>{
    await axios.post('/account/logout')
    setRedirect('/')
    setUser(null)
  }

  // Get Worbites
  useEffect(()=>{
    const getWorbites = async()=>{
      const {data}=await axios.get('/worbites')
      setWorbites(data)
    }
    getWorbites()
  },[])
  
  if(redirect){
    return <Navigate to ={'/login'}/>
  }
  
  return (
    <>
    <div className="w-full flex flex-col">
      <h2 className='text-xl mb-12'>{user ? `${user.name}'s Worbites` : 'loading'}</h2>
      {/* Tags */}
      <div className="w-full flex">
        <div className="py-4 px-4 rounded-[10px] shadow-custom mr-10">
          <p className='text-center'>300</p>
          <p className='text-center'>Worbites</p>
        </div>
        <div className=" py-4 px-6 bg-adjective rounded-[10px] shadow-custom">
          <p className='text-center'>300</p>
          <p className='text-center'>Adjectives</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfilePage


{/* <button className='border' onClick={logOut}>
        Log Out
      </button> */}


      /* Total */

