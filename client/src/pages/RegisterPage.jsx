import axios from 'axios'
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'


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
    <div className=" w-full flex items-center justify-center">
      <div className=" w-4/5 flex flex-col items-center">
        <h2 className=' w-full text-center my-6 text-xl'>Sign up</h2>
        <form className='w-2/4 flex flex-col items-center justify-center' onSubmit={handleSubmit}>
          <input required placeholder='Name' className='w-full focus:outline-none shadow-custom p-2 my-4 rounded-[5px] text-sm' value={name} onChange={(ev)=>{setName(ev.target.value)}} type="text" />
          <input required placeholder='Username' className='w-full focus:outline-none shadow-custom p-2 my-4 rounded-[5px] text-sm' value={username} onChange={(ev)=>{setUsername(ev.target.value)}} type="text" />
          <input required placeholder='Password'className='w-full focus:outline-none shadow-custom p-2 my-4 rounded-[5px] text-sm' value={password} onChange={(ev)=>{setPassword(ev.target.value)}} type="password" name="" id="" />
          <button className='w-full bg-primary text-white shadow-custom p-2 my-4 rounded-[5px] text-sm'>Sign Up</button>
          <p className='text-secondary text-sm my-4'>Have An Account ? <span className='text-primary'><Link to={'/login'}>Log In</Link></span></p>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage