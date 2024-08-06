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

  useEffect(()=>{
    setActiveWorbite(activeWorbite)
  },[activeId])
  
  // Worbite groups to achieve masonry layout
  const groupOne = worbites.slice(0,5)
  const groupTwo = worbites.slice(5,10)
  const groupThree = worbites.slice(10,15)
  const groupFour = worbites.slice(15,20)
  const groupFive = worbites.slice(20,25)

  return (
    <div className=" h-[86vh] grid grid-cols-5 gap-1.5 overflow-y-scroll scrollbar-none">
      <div className="">
        {
          groupOne.map(worbiteObject=>(
            <Worbite worbiteObject={worbiteObject} id={worbiteObject.id} key={worbiteObject.id}/>
          ))
        }
      </div>
      <div className="">
        {
          groupTwo.map(worbiteObject=>(
            <Worbite worbiteObject={worbiteObject} id={worbiteObject.id} key={worbiteObject.id}/>
          ))
        }
      </div>
      <div className="">
        {
          groupThree.map(worbiteObject=>(
            <Worbite worbiteObject={worbiteObject}  id={worbiteObject.id} key={worbiteObject.id}/>
          ))
        }
      </div>
      <div className="">
        {
          groupFour.map(worbiteObject=>(
            <Worbite worbiteObject={worbiteObject} id={worbiteObject.id}key={worbiteObject.id}/>
          ))
        }
      </div>
      <div className="">
        {
          groupFive.map(worbiteObject=>(
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