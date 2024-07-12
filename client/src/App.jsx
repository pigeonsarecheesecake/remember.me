import {Route, Routes} from 'react-router-dom'
import Layout from './layout/Layout'
import IndexPage from './pages/IndexPage'
import AccountPage from './pages/AccountPage'
import {DndContext, PointerSensor, useSensor, useSensors} from '@dnd-kit/core'
import axios from 'axios'

// axios.defaults.baseURL='http://localhost:3000'

function App() {
  const pointerSensor = useSensor(PointerSensor,{
    activationConstraint:{
      delay:100,
      tolerance:10
    }
  })
  const sensors = useSensors(
    pointerSensor
  )
  return (
    <DndContext sensors={sensors}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path='/account' element={<AccountPage/>}/>
        </Route>
      </Routes>
    </DndContext>
  )
}

export default App
