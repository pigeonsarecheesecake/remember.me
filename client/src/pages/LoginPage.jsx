import axios from 'axios'
import React, { useState, useContext } from 'react'
import { UserContext } from '../../context_provider/UserContext'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const[redirect, setRedirect]=useState(false)

  // Use the user context and the value is an object passed in the provider
  const{setUser,user} = useContext(UserContext)

  const handleSubmit= async (ev)=>{
    ev.preventDefault()
    const loginData = {
      username, password
    }
    try {
      const {data} = await axios.post('/account/login', {
        ...loginData
      })
      setUser(data)
      setRedirect(true)
      alert('Login Successful')
      console.log(user);
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  if(redirect){
    return <Navigate to={'/'} />
  }

  return (
    <div className="border w-full">
      <h2 className='border w-full text-center'>Login to your account</h2>
      <form className='border flex flex-col items-center' onSubmit={handleSubmit}>
        <input required placeholder='username' className='w-2/4 border' value={username} onChange={(ev)=>{setUsername(ev.target.value)}} type="text" />
        <input required placeholder='password'className='w-2/4 border' value={password} onChange={(ev)=>{setPassword(ev.target.value)}} type="password" name="" id="" />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage