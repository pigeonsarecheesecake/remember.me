import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'


const RegisterPage = () => {
  const [name,setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const handleSubmit= async (ev)=>{
    ev.preventDefault()
    const userData = {
      name, username, password
    }
    try {
      const {data} = await axios.post('/account/register', {
        ...userData
      })
      alert(data)
      setRedirect(true)
    } 
    catch (error) {
      alert(error)
    }
  }

  if(redirect){
    return <Navigate to={'/login'} />
  }

  return (
    <div className="border w-full">
      <h2 className='border w-full text-center'>Create an account</h2>
      <form className='border flex flex-col items-center' onSubmit={handleSubmit}>
        <input required placeholder='name' className='w-2/4 border' value={name} onChange={(ev)=>{setName(ev.target.value)}} type="text" />
        <input required placeholder='username' className='w-2/4 border' value={username} onChange={(ev)=>{setUsername(ev.target.value)}} type="text" />
        <input required placeholder='password'className='w-2/4 border' value={password} onChange={(ev)=>{setPassword(ev.target.value)}} type="password" name="" id="" />
        <button>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage