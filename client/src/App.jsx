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
import formatsWorbite from './modules/formatsWorbite'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import ResultsPage from './pages/ResultsPage'

// Default axios URL config
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials=true
const dictionaryAxios = axios.create({
  baseURL : '/dictionary.json'
})

function App() {
  // States
  const [parent,setParent] = useState(null)
  const [worbites, setWorbites] = useState([])  
  const [activeId, setActiveId] = useState(null)
  const [searchResults, setSearchResults] = useState([])

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
          <Route path='/' element={<Layout parent={parent} setParent={setParent} activeWorbite={activeWorbite} setSearchResults={setSearchResults}/>}>
            <Route index element={<IndexPage handleDragStart={handleDragStart} activeId={activeId} worbites={worbites} activeWorbite={activeWorbite}/>}/>
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/account' element={<ProfilePage />} /> 
            <Route path='/search-results' element={<ResultsPage searchResults={searchResults} />} /> 
          </Route>
        </Routes>
    </DndContext>
    </UserContextProvider>
  )
}

export default App
