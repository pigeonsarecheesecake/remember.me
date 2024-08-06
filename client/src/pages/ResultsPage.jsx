import React, { useEffect, useState } from 'react'
import Worbite from '../components/Worbite'
import { DragOverlay } from '@dnd-kit/core'
import WorbiteOverlay from '../components/WorbiteOverlay'
import { useNavigate } from 'react-router-dom'

const ResultsPage = ({activeId,searchResults}) => {
  const [worbiteObjects, setWorbiteObjects ] = useState([])
  const activeWorbite = worbiteObjects.find(worbiteObject => worbiteObject.id === activeId)
  console.log(activeWorbite)
  const navigate = useNavigate()
  
  useEffect(()=>{
    const formatsObject = (searchResults)=>{
      if(!searchResults.length){
        navigate('/')
      }
      let formattedWorbites = []
      for(let i=0; i<searchResults.length; i++){
        const {meta:{id},fl,shortdef} = searchResults[i]
        if (fl==='adjective' || fl==='adverb' || fl==='conjunction' || fl==='interjection' || fl==='noun' || fl==='preposition' || fl==='pronoun' || fl==='verb' )
        formattedWorbites.push({
          word:id.split(':')[0],
          pos:fl,
          definitions:shortdef[0],
          id:i+1,
          backgroundColor:`bg-${fl}`
        })
      }
      setWorbiteObjects(formattedWorbites)
    }
    formatsObject(searchResults)
  },[searchResults]) //Function runs everytime searchResults is updated
  return (
    // <Worbite />
    <>
    {worbiteObjects.map(worbiteObject => (<Worbite worbiteObject={worbiteObject} key={worbiteObject.id} id={worbiteObject.id}  />)
    )}
      <DragOverlay>
        {activeId ? (<WorbiteOverlay activeWorbite={activeWorbite} />) : null}
      </DragOverlay>
    </>
  )
}

export default ResultsPage