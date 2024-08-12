import { DragOverlay } from "@dnd-kit/core"
import Worbite from "../components/Worbite"
import WorbiteOverlay from "../components/WorbiteOverlay"
import { useEffect, useState } from "react"
import axios from "axios"
import formatsWorbite from "../modules/formatsWorbite"


const IndexPage =  ({activeId, setActiveWorbite}) => {
  // Axios instance for dictionary.json
  const dictionaryAxios = axios.create({
    baseURL : '/dictionary.json'
  })
  // Worbites index
  const [worbites, setWorbites] = useState([])
  const activeWorbite = worbites.find(worbiteObject => worbiteObject.id === activeId)  

  // Get random words to display in indexPage
  useEffect(()=>{
    const getRandomWords = async ()=>{
      let randomWords=[]
      try {
        const {data}=await dictionaryAxios.get()
        for(let i=0; i<25;i++){
          const randomIndex = Math.floor(Math.random()*data.length)
          const randomWordObject = data[randomIndex]
          randomWordObject.id=i+1
          formatsWorbite(randomWordObject)
          randomWords.push(randomWordObject)
        }
        setWorbites(randomWords)
      } catch (error) {
        console.log(error)
      }
    }
    getRandomWords()
  },[])

  // Sets active worbite object for drag and drop
  useEffect(()=>{
    setActiveWorbite(activeWorbite)
  },[activeWorbite])
  
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


export default IndexPage