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
  const[allAdjectives, setAllAdjectives] = useState({})
  const[allAdverbs, setAllAdverbs] = useState({})
  const[allConjunctions, setAllConjunctions] = useState({})
  const[allInterjections, setAllInterjections] = useState({})
  const[allNouns, setAllNouns] = useState({})
  const[allPrepositions, setAllPrepositions] = useState({})
  const[allPronouns, setAllPronouns] = useState({})
  const[allVerbs, setAllVerbs] = useState({})

  // Retrieve counts
  useEffect(()=>{
    const getCounts = async()=>{
      // Array of Promises
      const [ allWorbitesResponse, allAdjectivesResponse, allAdverbsResponse, 
              allConjunctionsResponse, allInterjectionsResponse, allNounsResponse,
              allPrepositionsResponse, allPronounsResponse, allVerbsResponse] = await Promise.all([
        axios.get('/worbites'),
        axios.get('/worbites/adjective'),
        axios.get('/worbites/adverb'),
        axios.get('/worbites/conjunction'),
        axios.get('/worbites/interjection'),
        axios.get('/worbites/noun'),
        axios.get('/worbites/preposition'),
        axios.get('/worbites/pronoun'),
        axios.get('/worbites/verb'),
      ])
      const {data: allWorbitesData} = allWorbitesResponse
      const {data: allAdjectivesData} = allAdjectivesResponse
      const {data: allAdverbsData} = allAdverbsResponse
      const {data: allConjunctionsData} = allConjunctionsResponse
      const {data: allInterjectionsData} = allInterjectionsResponse
      const {data: allNounsData} = allNounsResponse
      const {data: allPrepositionsData} = allPrepositionsResponse
      const {data: allPronounsData} = allPronounsResponse
      const {data: allVerbsData} = allVerbsResponse
      setAllWorbites(allWorbitesData)
      setAllAdjectives(allAdjectivesData)
      setAllAdverbs(allAdverbsData)
      setAllConjunctions(allConjunctionsData)
      setAllInterjections(allInterjectionsData)
      setAllNouns(allNounsData)
      setAllPrepositions(allPrepositionsData)
      setAllPronouns(allPronounsData)
      setAllVerbs(allVerbsData)
    }
    getCounts()
  },[])
 
  // Log out
  const logOut = async ()=>{
    await axios.post('/account/logout')
    setRedirect('/')
    setUser(null)
  }
  
 

  if(redirect){
    return <Navigate to ={'/login'}/>
  }

  const handleAllWorbites = async ()=>{
  
  }

  const handleAllAdjectives = async ()=>{
   
  }
  
  return (
    <>
    <div className="w-full flex flex-col">
      <h2 className='text-xl mb-6'>{user ? `${user.name}'s Worbites` : 'loading'}</h2>
      {/* Tags */}
      {/* All Worbites */}
      <div className="w-full flex flex-wrap" >
        {/* All Worbites */}
        <button className="py-4 px-4 rounded-[10px] shadow-custom mr-5 mb-5 text-xs">
          <p className='text-center'>{allWorbites.count}</p>
          <p className='text-center'>Worbites</p>
        </button>
        {/* All Adjectives */}
        <button className="py-4 px-4 bg-adjective rounded-[10px] shadow-custom mr-5 mb-5 text-xs" >
          <p className='text-center'>{allAdjectives.count}</p>
          <p className='text-center'>Adjectives</p>
        </button>
        {/* All Adverbs */}
        <button className="py-4 px-4 bg-adverb rounded-[10px] shadow-custom mr-5 mb-5 text-xs">
          <p className='text-center'>{allAdverbs.count}</p>
          <p className='text-center'>Adverb</p>
        </button>
        {/* All Conjunctions */}
        <button className="py-4 px-4 bg-conjunction rounded-[10px] shadow-custom mr-5 mb-5 text-xs" >
          <p className='text-center'>{allConjunctions.count}</p>
          <p className='text-center'>Conjunction</p>
        </button>
        {/* All Interjections */}
        <button className="py-4 px-4 bg-interjection rounded-[10px] shadow-custom mr-5 mb-5 text-xs" >
          <p className='text-center'>{allInterjections.count}</p>
          <p className='text-center'>Interjections</p>
        </button>
        {/* All Nouns */}
        <button className="py-4 px-4 bg-noun rounded-[10px] shadow-custom mr-5 mb-5 text-xs ">
          <p className='text-center'>{allNouns.count}</p>
          <p className='text-center'>Nouns</p>
        </button>
        {/* All Prepositions */}
        <button className="py-4 px-4 bg-preposition rounded-[10px] shadow-custom mr-5 mb-5 text-xs" >
          <p className='text-center'>{allPrepositions.count}</p>
          <p className='text-center'>Prepositions</p>
        </button>
        {/* All Pronouns */}
        <button className="py-4 px-4 bg-pronoun rounded-[10px] shadow-custom mr-5 mb-5 text-xs">
          <p className='text-center'>{allPronouns.count}</p>
          <p className='text-center'>Pronouns</p>
        </button>
        {/* All Verbs */}
        <button className="py-4 px-4 bg-verb rounded-[10px] shadow-custom mr-5 mb-5 text-xs" >
          <p className='text-center'>{allVerbs.count}</p>
          <p className='text-center'>Verbs</p>
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

