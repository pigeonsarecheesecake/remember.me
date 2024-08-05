import React, { useEffect, useState } from 'react'
import Worbite from '../components/Worbite'

const ResultsPage = ({searchResults}) => {
  const [worbiteObjects, setWorbiteObjects ] = useState([])

  useEffect(()=>{
    const formatsObject = (searchResults)=>{
      let formattedWorbites = []
      for(let i=0; i<searchResults.length; i++){
        const {meta:{id},fl,shortdef} = searchResults[i]
        formattedWorbites.push({
          word:id,
          pos:fl,
          definitions:shortdef[0],
          id:i,
          backgroundColor:`bg-${fl}`
        })
      }
      setWorbiteObjects(formattedWorbites)
    }
    formatsObject(searchResults)
  },[])


  
  // const{meta}= searchResults[0]
  // console.log(meta.id)
  return (
    // <Worbite />
    <>
    {worbiteObjects.map(worbiteObject => (<Worbite worbiteObject={worbiteObject} />)
    )}
    </>
  )
}

export default ResultsPage