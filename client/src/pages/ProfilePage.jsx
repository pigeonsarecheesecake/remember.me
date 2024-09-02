import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../context_provider/UserContext'
import { useNavigate } from 'react-router-dom'
import PosTags from '../components/PosTags'

const ProfilePage = () => {
  // Date
  const date = new Date()
  const currentYear = date.getFullYear()
  const currentMonth = date.getMonth()
  
  let formattedDate
  if (currentMonth < 10) {
    formattedDate = `${currentYear}-0${currentMonth}`
  } else {
    formattedDate = `${currentYear}-${currentMonth}`
  }

  // States
  const [worbitesCounts, setWorbitesCounts] = useState([])
  const [month, setMonth] = useState(formattedDate)
  
  // User Context
  const {user, setUser} = useContext(UserContext)

  // Redirect
  const navigate = useNavigate()

  // Retrieve counts
  useEffect(()=>{
    const getCounts = async()=>{
      // Array of Promises
      try {
        const {data } = await axios.get('/worbites/count')
        setWorbitesCounts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCounts()
  },[])
  
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
        {/* Title */}
        <h2 className='text-xl mb-6'>{user ? `${user.name}'s Worbites` : 'loading'}</h2>
        {/* Tags */}
        <div className="w-full flex flex-wrap" >
          {
            worbitesCounts.map((worbite)=>{
              return <PosTags key={worbite.id} count={worbite.count} pos={worbite.pos} backgroundColor={worbite.backgroundColor} />
            })
          }
        </div>
        {/* Dates */}
        <input type="month" className='w-[20%]' value={month} onChange={(e)=>setMonth(e.target.value)}/>
        {/* Log out button */}
        <button className='' onClick={logOut}>Log Out</button>
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

