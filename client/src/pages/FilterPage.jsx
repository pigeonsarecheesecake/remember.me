import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CollectedWorbite from '../components/CollectedWorbite'

const FilterPage = () => {
  const {pos} = useParams()
  const [retrievedWorbites, setRetrievedWorbites] = useState([])
  
  useEffect(() => {
    const getFilteredWorbites = async () => {
      try {
        const {data} = await axios.get(`/worbites/${pos}`)
        setRetrievedWorbites(data.filteredWorbites)
        console.log(data.filteredWorbites)
      } catch (error) {
        console.log(error.message)
      }
    }
    getFilteredWorbites()
  },[])

//  Worbite groups to achieve masonry layout
  let j = 1
  const groups = {
    group1:[],
    group2:[],
    group3:[],
    group4:[],
    group5:[]
  }
  for(let i=0;i<retrievedWorbites.length;i++){
    if(j>5){
      j=1
    }
    groups[`group${j}`].push(retrievedWorbites[i])
    j++
  }
  
  return (
  <div className="flex flex-col">
    <p>{pos[0].toUpperCase() + pos.slice(1)}</p>
    <div className=" h-[86vh] grid grid-cols-5 gap-1.5 overflow-y-scroll scrollbar-none">
      <div className="">
        {
          groups.group1.map(worbiteObject=>(
            <CollectedWorbite worbiteObject={worbiteObject} id={worbiteObject.id} key={worbiteObject.id}/>
          ))
        }
      </div>
      <div className="">
        {
          groups.group2.map(worbiteObject=>(
            <CollectedWorbite worbiteObject={worbiteObject} id={worbiteObject.id} key={worbiteObject.id}/>
          ))
        }
      </div>
      <div className="">
        {
          groups.group3.map(worbiteObject=>(
            <CollectedWorbite worbiteObject={worbiteObject}  id={worbiteObject.id} key={worbiteObject.id}/>
          ))
        }
      </div>
      <div className="">
        {
          groups.group4.map(worbiteObject=>(
            <CollectedWorbite worbiteObject={worbiteObject} id={worbiteObject.id}key={worbiteObject.id}/>
          ))
        }
      </div>
      <div className="">
        {
          groups.group5.map(worbiteObject=>(
            <CollectedWorbite worbiteObject={worbiteObject} id={worbiteObject.id} key={worbiteObject.id}/>
          ))
        }
      </div>
    </div> 
  </div>
  )
}

export default FilterPage
