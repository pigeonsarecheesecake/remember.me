import {Route, Routes} from 'react-router-dom'
import Layout from './layout/Layout'
import IndexPage from './pages/IndexPage'
import AccountPage from './pages/AccountPage'
import axios from 'axios'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path='/account' element={<AccountPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
