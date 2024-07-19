import {Route, Routes} from 'react-router-dom'
import Layout from './layout/Layout'
import IndexPage from './pages/IndexPage'
import AccountPage from './pages/AccountPage'
import {DndContext, DragOverlay, PointerSensor, useSensor, useSensors} from '@dnd-kit/core'
import axios from 'axios'
import { useState } from 'react'

// axios.defaults.baseURL='http://localhost:3000'

function App() {
  const [parent,setParent] = useState(null)
  // Sensor
  const pointerSensor = useSensor(PointerSensor,{
    activationConstraint:{
      delay:100,
      tolerance:10
    }
  })
  const sensors = useSensors(
    pointerSensor
  )

  const [activeId, setActiveId] = useState(null)
 
  // Overlay
  function handleDragStart(event){
    setActiveId(event.active.id)
  }

  function handleDragEnd(event){
    const {over} = event
    // Over meaning, which dragable is dropped on the droppable
    setParent(over ? over.id : null)
    setActiveId(null)
  }

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <Routes>
        <Route path='/' element={<Layout parent={parent} setParent={setParent}/>}>
          <Route index element={<IndexPage handleDragStart={handleDragStart} activeId={activeId}/>}/>
          <Route path='/account' element={<AccountPage/>}/>
        </Route>
      </Routes>
    </DndContext>
  )
}

export default App
