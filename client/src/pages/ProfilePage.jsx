import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../context_provider/UserContext'
import { useNavigate } from 'react-router-dom'
import Worbite from '../components/Worbite'
import PosTags from '../components/PosTags'

const ProfilePage = () => {
  // This will hold info for counts
  const [worbitesCounts, setWorbitesCounts] = useState([])
  
  // User Context
  const {user, setUser} = useContext(UserContext)

  // Redirect
  const navigate = useNavigate()
  
  // States
  const[allWorbites, setAllWorbites] = useState({})

  // Retrieve counts
  useEffect(()=>{
    const getCounts = async()=>{
      // Array of Promises
      try {
        const {data } = await axios.get('/worbites/count')
        setWorbitesCounts(data)
        console.log(data);
        
      } catch (error) {
        console.log(error)
      }
    }
    getCounts()
  },[])
  
  // Handle redirects
  const handleClick = async ()=>{
    navigate('/worbite')
  }
  
  // Log out
  const logOut = async ()=>{
    await axios.post('/account/logout')
    navigate('/')
    setUser(null)
  }
  
  return (
    <>
    {
      <div className="w-full flex flex-col">
        <h2 className='text-xl mb-6'>{user ? `${user.name}'s Worbites` : 'loading'}</h2>
        {/* Tags */}
        {/* All Worbites */}
        <div className="w-full flex flex-wrap" >
          {/* All Worbites */}
          {
            worbitesCounts.map((worbite)=>{
              return <PosTags key={worbite.id} count={worbite.count} pos={worbite.pos} backgroundColor={worbite.backgroundColor} />
            })
          }
        </div>
      </div>
    }
    </>
  )
}

export default ProfilePage


{/* <button className='border' onClick={logOut}>
        Log Out
      </button> */}


      /* Total */

