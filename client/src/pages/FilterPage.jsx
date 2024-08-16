import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CollectedWorbite from '../components/CollectedWorbite'

const FilterPage = () => {
  const {pos} = useParams()
  
  useEffect(() => {
    const getFilteredWorbites = async () => {
      try {
        const {data} = await axios.get(`/worbites/${pos}`)
        console.log(data);
        
      } catch (error) {
        console.log(error.message)
      }
    }
    getFilteredWorbites()
  })
  // Worbite groups to achieve masonry layout
  // let j = 1
  // const groups = {
  //   group1:[],
  //   group2:[],
  //   group3:[],
  //   group4:[],
  //   group5:[]
  // }
  // for(let i=0;i<worbiteAdded.length;i++){
  //   if(j>5){
  //     j=1
  //   }
  //   groups[`group${j}`].push(worbiteAdded[i])
  //   j++
  // }

  return (
  <div className="flex flex-col">
    <p>{pos[0].toUpperCase() + pos.slice(1)}</p>
    {/* <h2 className='text-xl mb-4'>{`${pos[0].toUpperCase() + pos.slice(1)} (${count})`}</h2>
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
    </div> */}
  </div>
  )
}

export default FilterPage
