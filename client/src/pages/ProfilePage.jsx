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
  const[allWorbites, setAllWorbites] = useState({})
  const[allAdjectives, setAllAdjectives] = useState([])

  // Retrieve counts
  useEffect(()=>{
    // const getCounts = async()=>{
    //   const {data} = await axios.get('/worbites')
    //   const {adjectiveData} = await axios.get('/worbites/adjective')
    // }
    const getCounts = async()=>{
      // Array of Promises
      const [allWorbitesResponse, allAdjectivesResponse] = await Promise.all([
        axios.get('/worbites'),
        axios.get('/worbites/adjective')
      ])
      const {data: allWorbitesData} = allWorbitesResponse
      const {data: allAdjectivesData} = allAdjectivesResponse

      setAllWorbites(allWorbitesData)
      setAllAdjectives(allAdjectivesData)
    }
    getCounts()
  },[])

  console.log(allAdjectives);

  
 
  // Log out
  const logOut = async ()=>{
    await axios.post('/account/logout')
    setRedirect('/')
    setUser(null)
  }
  
  const handleAllWorbites = async ()=>{
  
  }

  const handleAllAdjectives = async ()=>{
   
  }

  if(redirect){
    return <Navigate to ={'/login'}/>
  }
  
  return (
    <>
    <div className="w-full flex flex-col">
      <h2 className='text-xl mb-12'>{user ? `${user.name}'s Worbites` : 'loading'}</h2>
      {/* Tags */}
      {/* All Worbites */}
      <div className="w-full flex" onClick={handleAllWorbites}>
        <button className="py-4 px-4 rounded-[10px] shadow-custom mr-10 text-sm">
          <p className='text-center'>{allWorbites.count}</p>
          <p className='text-center'>Worbites</p>
        </button>
        <button className="py-4 px-6 bg-adjective rounded-[10px] shadow-custom text-sm" onClick={handleAllAdjectives}>
          <p className='text-center'>{allAdjectives.count}</p>
          <p className='text-center'>Adjectives</p>
        </button>
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

