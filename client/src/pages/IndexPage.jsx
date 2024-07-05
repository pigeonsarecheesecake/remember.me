import Worbite from "../components/Worbite"
import axios from 'axios'
import { useEffect, useState } from "react"

const IndexPage =  () => {
  const [worbite, setWorbite] = useState('')
  const [partOfSpeech, setPartOfSpeech] = useState('')

  useEffect(()=>{
      axios.get('/wordsapi').then(({data})=>{
        setWorbite(data.word)
        setPartOfSpeech(data.results[0].partOfSpeech)
      }).catch(error => {
        console.log(error)
      })
  },[])
  
  return (
    <div>
      <Worbite worbite={worbite} partOfSpeech={partOfSpeech} />
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