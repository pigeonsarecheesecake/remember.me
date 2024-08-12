import React, { useEffect, useState } from 'react'
import Worbite from '../components/Worbite'
import { DragOverlay } from '@dnd-kit/core'
import WorbiteOverlay from '../components/WorbiteOverlay'
import { useNavigate } from 'react-router-dom'

const ResultsPage = ({activeId,searchResults,setActiveWorbite}) => {
  const [worbites, setWorbites ] = useState([])
  const activeWorbite = worbites.find(worbiteObject => worbiteObject.id === activeId)
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
      setWorbites(formattedWorbites)
    }
    formatsObject(searchResults)
  },[searchResults]) //Function runs everytime searchResults is updated

  useEffect(()=>{
    setActiveWorbite(activeWorbite)
  },[activeId])

  // Worbite groups to achieve masonry layout
  let j = 1
  const groups = {
    group1:[],
    group2:[],
    group3:[],
    group4:[],
    group5:[]
  }
  for(let i=0;i<worbites.length;i++){
    if(j>5){
        j=1
    }
    groups[`group${j}`].push(worbites[i])
    j++
  }
  return (
    <div className=" h-[86vh] grid grid-cols-5 gap-1.5 overflow-y-scroll scrollbar-none">
      <div className="">
        {
          groups.group1.map(worbiteObject=>(
            <Worbite worbiteObject={worbiteObject} id={worbiteObject.id} key={worbiteObject.id}/>
          ))
        }
      </div>
      <div className="">
        {
          groups.group2.map(worbiteObject=>(
            <Worbite worbiteObject={worbiteObject} id={worbiteObject.id} key={worbiteObject.id}/>
          ))
        }
      </div>
      <div className="">
        {
          groups.group3.map(worbiteObject=>(
            <Worbite worbiteObject={worbiteObject}  id={worbiteObject.id} key={worbiteObject.id}/>
          ))
        }
      </div>
      <div className="">
        {
          groups.group4.map(worbiteObject=>(
            <Worbite worbiteObject={worbiteObject} id={worbiteObject.id}key={worbiteObject.id}/>
          ))
        }
      </div>
      <div className="">
        {
          groups.group5.map(worbiteObject=>(
            <Worbite worbiteObject={worbiteObject} id={worbiteObject.id} key={worbiteObject.id}/>
          ))
        }
      </div>
      <DragOverlay>
        {activeId ? (<WorbiteOverlay activeWorbite={activeWorbite} />) : null}
      </DragOverlay>
    </div>
  )
}

export default ResultsPage