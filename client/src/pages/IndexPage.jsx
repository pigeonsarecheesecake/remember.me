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
          randomWords.push(data[randomIndex])
        }
        setWorbite(randomWords)
       
      } catch (error) {
        console.log(error)
      }
    }
    getRandomWords()
  },[])
  console.log(worbites)
  return (
    <div className="border w-full h-[86vh] grid grid-cols-5 gap-3 overflow-y-scroll">
      {
        worbites.map(worbiteObject=>(
          <Worbite worbiteObject={worbiteObject}/>
        ))
      }
    </div>
  )
}

export default IndexPage


/* Frame 22 */

{/* <div className=" w-full grid grid-cols-5 overflow-y-scroll gap-x-3 rounded-[10px] h-[86vh]">
      <div className=" max-w-[237px]">
        <div className=" bg-adjective rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-noun rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-adjective rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-adjective rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-noun rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
      
      </div>
      <div className=" max-w-[237px]">
      <div className=" bg-adverb rounded-[14px] h-60 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-verb rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-conjunction rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-adjective rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-noun rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
      </div>
      <div className=" max-w-[237px]">
      <div className=" bg-adjective rounded-[14px] h-70 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-preposition rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-adjective rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-adjective rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-noun rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
      </div>
      <div className=" max-w-[237px]">
      <div className=" bg-adjective rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-pronoun rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-adjective rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-adjective rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-noun rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
      </div>
      <div className=" max-w-[237px]">
      <div className=" bg-preposition rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-verb rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-interjection rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-adjective rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
        <div className=" bg-noun rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2">chichi</div>
      </div>
    </div> */}