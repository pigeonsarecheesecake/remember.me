import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../context_provider/UserContext'
import { useNavigate } from 'react-router-dom'
import PosTags from '../components/PosTags'
import CollectedWorbite from '../components/CollectedWorbite'
import CollectedWorbiteModal from '../components/CollectedWorbiteModal'


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
  const [filteredMonth, setFilteredMonth] = useState([])

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modal, setModal] = useState(null)
  
  // User Context
  const {user, setUser} = useContext(UserContext)

  // Redirect
  const navigate = useNavigate()

  // Retrieves counts
  useEffect(()=>{
    const getCounts = async()=>{
      try {
        const {data } = await axios.get('/worbites/count')
        setWorbitesCounts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCounts()
  },[])

  // Retrieves new filteredMonth when month changes. Month changes when the onChange event on the month input element changes.
  useEffect(()=>{
    const getMonthData = async()=>{
      try {
        const {data} = await axios.get(`/worbites/filter/${month}`)
        setFilteredMonth(data)
      } catch (error) {
        console.log(error)
      }
    }
    getMonthData()
  },[month])

  // Log out
  const logOut = async ()=>{
    await axios.post('/account/logout')
    navigate('/')
    setUser(null)
  }

  //  Worbite groups to achieve masonry layout
  let j = 1
  const groups = {
    group1:[],
    group2:[],
    group3:[],
    group4:[],
    group5:[]
  }
  for(let i=0;i<filteredMonth.length;i++){
    if(j>5){
      j=1
    }
    groups[`group${j}`].push(filteredMonth[i])
    j++
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
        <input type="month" className='w-[20%] mb-4' value={month} onChange={(e)=>setMonth(e.target.value)}/>
        <div className="h-[86vh] grid grid-cols-5 gap-1.5 overflow-y-scroll scrollbar-none">
          <div className="">
            {
              groups.group1.map(worbiteObject=>(
                <CollectedWorbite worbiteObject={worbiteObject} id={worbiteObject.id} key={worbiteObject._id}  isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setModal={setModal}/>
              ))
            }
          </div>
          <div className="">
            {
              groups.group2.map(worbiteObject=>(
                <CollectedWorbite worbiteObject={worbiteObject} id={worbiteObject.id} key={worbiteObject._id }  isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setModal={setModal}/>
              ))
            }
          </div>
          <div className="">
            {
              groups.group3.map(worbiteObject=>(
                <CollectedWorbite worbiteObject={worbiteObject}  id={worbiteObject.id} key={worbiteObject._id}  isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setModal={setModal}/>
              ))
            }
          </div>
          <div className="">
            {
              groups.group4.map(worbiteObject=>(
                <CollectedWorbite worbiteObject={worbiteObject} id={worbiteObject.id} key={worbiteObject._id}  isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setModal={setModal}/>
              ))
            }
          </div>
          <div className="">
            {
              groups.group5.map(worbiteObject=>(
                <CollectedWorbite worbiteObject={worbiteObject} id={worbiteObject.id} key={worbiteObject._id}  isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setModal={setModal}/>
              ))
            }
          </div>
        </div>
        {/* Modal */}
        {isModalOpen && (<CollectedWorbiteModal modal={modal} setIsModalOpen={setIsModalOpen}/>)}
        {/* Log out button */}
        <button className='' onClick={logOut}>Log Out</button>
      </div>
    }
    </>
  )
}

export default ProfilePage


