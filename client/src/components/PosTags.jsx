import React from 'react'
import { useNavigate } from 'react-router-dom'

const PosTags = ({count,pos, backgroundColor}) => {
  const navigate = useNavigate()
  return (
    <button className={`${backgroundColor} py-4 px-4 rounded-[10px] shadow-custom mr-5 mb-5 text-xs`} onClick={()=>navigate(`/account/${pos}`)}>
      <p className='text-center'>{count}</p>
      <p className='text-center'>{pos}</p>
    </button>
  )
}

export default PosTags