import React, { useState } from 'react'

const RegisterPage = () => {
  const [name,setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit=(ev)=>{
    ev.preventDefault()
  }

  return (
    <div className="border w-full">
      <h2 className='border w-full text-center'>Create an account</h2>
      <form className='border flex flex-col items-center' onSubmit={handleSubmit}>
        <input placeholder='name' className='w-2/4 border' value={name} onChange={(ev)=>{setName(ev.target.value)}} type="text" />
        <input placeholder='username' className='w-2/4 border' value={username} onChange={(ev)=>{setUsername(ev.target.value)}} type="text" />
        <input placeholder='password'className='w-2/4 border' value={password} onChange={(ev)=>{setPassword(ev.target.value)}} type="password" name="" id="" />
        <button>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage