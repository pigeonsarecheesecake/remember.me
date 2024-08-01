import {Route, Routes} from 'react-router-dom'
import Layout from './layout/Layout'
import IndexPage from './pages/IndexPage'
import AccountPage from './pages/AccountPage'
import {DndContext, PointerSensor, useSensor, useSensors} from '@dnd-kit/core'
import { useState, useEffect } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000';
const dictionaryAxios = axios.create({
  baseURL : '/dictionary.json'
})

function App() {
  // States
  const [parent,setParent] = useState(null)
  const [worbites, setWorbites] = useState([])  
  const [activeId, setActiveId] = useState(null)
  // const [worbiteObject] = useState(null)

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
          convertsPartOfSpeech(randomWordObject)
          randomWords.push(randomWordObject)
        }
        setWorbites(randomWords)
      } catch (error) {
        console.log(error)
      }
    }
    getRandomWords()
  },[])

  // Active Worbite
  const activeWorbite = worbites.find(worbiteObject => worbiteObject.id === activeId)
  
  // Convert part of speech

  const convertsPartOfSpeech = (worbiteObject)=>{
    const {pos} = worbiteObject
    switch(pos){
      case 'a.':
        worbiteObject.pos= 'adjective'
        worbiteObject.backgroundColor='bg-adjective'
      break
      case 'adv.':
        worbiteObject.pos= 'adverb'
        worbiteObject.backgroundColor='bg-adverb'
      break
      case 'conj.':
        worbiteObject.pos= 'conjunction'
        worbiteObject.backgroundColor='bg-conjunction'
      break
      case 'interj.':
        worbiteObject.pos= 'interjection'
        worbiteObject.backgroundColor='bg-interjection'
      break  
      case 'n.':
        worbiteObject.pos= 'noun'
        worbiteObject.backgroundColor='bg-noun'
      break
      case 'prep.':
        worbiteObject.pos= 'preposition'
        worbiteObject.backgroundColor='bg-preposition'
      break
      case 'pron.':
        worbiteObject.pos= 'pronoun'
        worbiteObject.backgroundColor='bg-pronoun'
      break
      case 'v.':
        worbiteObject.pos= 'verb'
        worbiteObject.backgroundColor='bg-verb'
      break
    }
  }

  // Sensor to allow click event on draggable elements
  const pointerSensor = useSensor(PointerSensor,{
    activationConstraint:{
      delay:100,
      tolerance:10
    }
  })

  const sensors = useSensors(
    pointerSensor
  )
 
  // Drag handlers
  function handleDragStart(event){
    setActiveId(event.active.id)
  }

  function handleDragEnd(event){
  const {over} = event
  // Over meaning = which dragable is dropped on the droppable
  setParent(over ? over.id : null)
  }

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <Routes>
        <Route path='/' element={<Layout parent={parent} setParent={setParent} activeWorbite={activeWorbite}/>}>
          <Route index element={<IndexPage handleDragStart={handleDragStart} activeId={activeId} worbites={worbites} activeWorbite={activeWorbite}/>}/>
          <Route path='/account' element={<AccountPage/>}/>
        </Route>
      </Routes>
    </DndContext>
  )
}

export default App
