import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../context_provider/UserContext'
import { Navigate, useNavigate } from 'react-router-dom'
import Worbite from '../components/Worbite'


const ProfilePage = () => {
  // User Context
  const {user, setUser} = useContext(UserContext)

  // Redirect
  const navigate = useNavigate()
  
  // States
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
        axios.get('/worbites'), axios.get('/worbites/adjective'), axios.get('/worbites/adverb'),
        axios.get('/worbites/conjunction'), axios.get('/worbites/interjection'), axios.get('/worbites/noun'),
        axios.get('/worbites/preposition'), axios.get('/worbites/pronoun'), axios.get('/worbites/verb'),
      ])
      const {data: allWorbitesData} = allWorbitesResponse 
      setAllWorbites(allWorbitesData)
      const {data: allAdjectivesData} = allAdjectivesResponse
      setAllAdjectives(allAdjectivesData)
      const {data: allAdverbsData} = allAdverbsResponse
      setAllAdverbs(allAdverbsData)
      const {data: allConjunctionsData} = allConjunctionsResponse
      setAllConjunctions(allConjunctionsData)
      const {data: allInterjectionsData} = allInterjectionsResponse
      setAllInterjections(allInterjectionsData)
      const {data: allNounsData} = allNounsResponse
      setAllNouns(allNounsData)
      const {data: allPrepositionsData} = allPrepositionsResponse
      setAllPrepositions(allPrepositionsData)
      const {data: allPronounsData} = allPronounsResponse
      setAllPronouns(allPronounsData)
      const {data: allVerbsData} = allVerbsResponse
      setAllVerbs(allVerbsData)
    }
    getCounts()
  },[])


  // Handle redirects
  const handleAllWorbites = async ()=>{
    navigate('/account/worbites')
  }

  const handleAllAdjectives = async ()=>{
    navigate('/account/adjectives')
  }
  
  // Log out
  const logOut = async ()=>{
    await axios.post('/account/logout')
    navigate('/')
    setUser(null)
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
          <p className='text-center'>{allWorbites.count ? allWorbites.count : '0'}</p>
          <p className='text-center'>Worbites</p>
        </button>
        {/* All Adjectives */}
        <button className="py-4 px-4 bg-adjective rounded-[10px] shadow-custom mr-5 mb-5 text-xs" onClick={handleAllAdjectives} >
          <p className='text-center'>{allAdjectives.count ? allAdjectives.count : '0'}</p>
          <p className='text-center'>Adjectives</p>
        </button>
        {/* All Adverbs */}
        <button className="py-4 px-4 bg-adverb rounded-[10px] shadow-custom mr-5 mb-5 text-xs">
          <p className='text-center'>{ allAdverbs.count ? allAdverbs.count : '0'}</p>
          <p className='text-center'>Adverb</p>
        </button>
        {/* All Conjunctions */}
        <button className="py-4 px-4 bg-conjunction rounded-[10px] shadow-custom mr-5 mb-5 text-xs" >
          <p className='text-center'>{allConjunctions.count ? allConjunctions.count : '0'}</p>
          <p className='text-center'>Conjunction</p>
        </button>
        {/* All Interjections */}
        <button className="py-4 px-4 bg-interjection rounded-[10px] shadow-custom mr-5 mb-5 text-xs" >
          <p className='text-center'>{allInterjections.count ? allInterjections.count : '0'}</p>
          <p className='text-center'>Interjections</p>
        </button>
        {/* All Nouns */}
        <button className="py-4 px-4 bg-noun rounded-[10px] shadow-custom mr-5 mb-5 text-xs ">
          <p className='text-center'>{allNouns.count ? allNouns.count : '0'}</p>
          <p className='text-center'>Nouns</p>
        </button>
        {/* All Prepositions */}
        <button className="py-4 px-4 bg-preposition rounded-[10px] shadow-custom mr-5 mb-5 text-xs" >
          <p className='text-center'>{allPrepositions.count ? allPrepositions.count : '0'}</p>
          <p className='text-center'>Prepositions</p>
        </button>
        {/* All Pronouns */}
        <button className="py-4 px-4 bg-pronoun rounded-[10px] shadow-custom mr-5 mb-5 text-xs">
          <p className='text-center'>{allPronouns.count ? allPronouns.count : '0'}</p>
          <p className='text-center'>Pronouns</p>
        </button>
        {/* All Verbs */}
        <button className="py-4 px-4 bg-verb rounded-[10px] shadow-custom mr-5 mb-5 text-xs" >
          <p className='text-center'>{allVerbs.count ? allVerbs.count : '0'}</p>
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

