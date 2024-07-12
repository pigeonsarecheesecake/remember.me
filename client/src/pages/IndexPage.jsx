import Worbite from "../components/Worbite"
import axios from 'axios'
import { useEffect, useState } from "react"

const IndexPage =  () => {
  const [worbites, setWorbite] = useState([])

  useEffect(()=>{
    const getRandomWords = async ()=>{
      let randomWords=[]
      try {
        const {data}=await axios.get('/dictionary.json')
        for(let i=0; i<25;i++){
          const randomIndex = Math.floor(Math.random()*data.length)
          const randomWordObject = data[randomIndex]
          randomWordObject.id=i
          randomWords.push(randomWordObject)
        }
        setWorbite(randomWords)
      } catch (error) {
        console.log(error)
      }
    }
    getRandomWords()
  },[])


  // Worbite groups to achieve masonry layout
  const groupOne = worbites.slice(0,5)
  const groupTwo = worbites.slice(5,10)
  const groupThree = worbites.slice(10,15)
  const groupFour = worbites.slice(15,20)
  const groupFive = worbites.slice(20,25)


  return (
    <div className=" h-[86vh] grid grid-cols-5 gap-1.5 overflow-y-scroll">
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
    </div>
  )
}

export default IndexPage