import {Route, Routes} from 'react-router-dom'
import Layout from './layout/Layout'
import IndexPage from './pages/IndexPage'
import AccountPage from './pages/AccountPage'
import {DndContext, DragOverlay, PointerSensor, useSensor, useSensors} from '@dnd-kit/core'
import axios from 'axios'
import { useState, useEffect } from 'react'

// axios.defaults.baseURL='http://localhost:3000'

function App() {
  // States
  const [parent,setParent] = useState(null)
  const [worbites, setWorbites] = useState([])  
  const [activeId, setActiveId] = useState(null)
  const [worbiteObject, setWorbiteObject] = useState(null)

  // Get random words to display in indexPage
  useEffect(()=>{
    const getRandomWords = async ()=>{
      let randomWords=[]
      try {
        const {data}=await axios.get('/dictionary.json')
        for(let i=0; i<25;i++){
          const randomIndex = Math.floor(Math.random()*data.length)
          const randomWordObject = data[randomIndex]
          randomWordObject.id=i+1
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
 
  // Handlers
  function handleDragStart(event){
    setActiveId(event.active.id)
  }

  function handleDragEnd(event){
    const {over} = event
    // Over meaning, which dragable is dropped on the droppable
    setParent(over ? over.id : null)
    // setActiveId(null)
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
