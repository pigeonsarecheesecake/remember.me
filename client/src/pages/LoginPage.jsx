import axios from 'axios'
import React, { useState, useContext } from 'react'
import { UserContext } from '../context_provider/UserContext'
import { Link, Navigate } from 'react-router-dom'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const[redirect, setRedirect]= useState(false)

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
      console.log(user);
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  if(redirect){
    return <Navigate to={'/'} />
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-4/5 flex flex-col items-center">
        <h2 className='w-full text-center my-6 text-xl'>Log In</h2>
        <form className='w-2/4 flex flex-col items-center justify-center' onSubmit={handleSubmit}>
          <input required placeholder='username' className='w-full focus:outline-none shadow-custom p-2 my-4 rounded-[5px] text-sm' value={username} onChange={(ev)=>{setUsername(ev.target.value)}} type="text" />
          <input required placeholder='password'className='w-full focus:outline-none shadow-custom p-2 my-4 rounded-[5px] text-sm' value={password} onChange={(ev)=>{setPassword(ev.target.value)}} type="password" name="" id="" />
          <button className='w-full bg-primary text-white shadow-custom p-2 my-4 rounded-[5px] text-sm'>Log In</button>
          <p className='text-secondary text-sm my-4'>Don't Have An Account ? <span className='text-primary'><Link to={'/register'}>Sign Up</Link></span></p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage