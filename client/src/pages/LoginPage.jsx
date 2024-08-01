import axios from 'axios'
import React, { useState } from 'react'


const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit= async (ev)=>{
    ev.preventDefault()
    const loginData = {
      username, password
    }
    try {
      const {data} = await axios.post('/account/login', {
        ...loginData
      })
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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