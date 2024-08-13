// Packages
import {Route, Routes} from 'react-router-dom'
import {DndContext, PointerSensor, useSensor, useSensors} from '@dnd-kit/core'
import {useState, useEffect } from 'react'
import axios from 'axios'

// Context Provider
import { UserContextProvider } from './context_provider/UserContext'

// Pages
import Layout from './layout/Layout'
import IndexPage from './pages/IndexPage'
import RegisterPage from './pages/RegisterPage'

// Modules
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import ResultsPage from './pages/ResultsPage'

// Default axios URL config
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials=true

function App() {
  // States
  const [parent,setParent] = useState(null)
  const [activeId, setActiveId] = useState(null)

  // Worbites searchResults
  const [searchResults, setSearchResults] = useState([])

  // Active Worbite
  const[activeWorbite, setActiveWorbite] = useState({})

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
    setParent(over ? over.id : null)
  }
  
  return (
    <UserContextProvider>
      <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Routes>
          <Route path='/' element={
              <Layout 
                parent={parent} 
                setParent={setParent} 
                activeWorbite={activeWorbite} 
                setSearchResults={setSearchResults} 
              />}>
            <Route index element={
              <IndexPage 
                activeId={activeId} 
                activeWorbite={activeWorbite}
                setActiveWorbite={setActiveWorbite} />}
              />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/account' element={<ProfilePage />} /> 
            <Route path='/search-results' element={
              <ResultsPage
                activeId={activeId} 
                searchResults={searchResults}
                setActiveWorbite={setActiveWorbite}
                />}
              /> 
          </Route>
        </Routes>
    </DndContext>
    </UserContextProvider>
  )
}

export default App
