import React, { useContext, useState } from 'react'
import { UserContext } from '../context_provider/UserContext';

const CollectedWorbite = ({worbiteObject,id}) => {
  worbiteObject.backgroundColor = `bg-${worbiteObject.partOfSpeech}`
  
  // Worbite Object content
  const {worbite , partOfSpeech, definition, backgroundColor} = worbiteObject
  
  function handleClick(){
   side === 'front' ? setSide('back') : setSide('front')
  }

  return (
    <div className={`${backgroundColor} max-w-[237px] mb-2 flex flex-col items-center rounded-[14px] `}>
      <div className="w-full p-3 [grid-row-start:1] [grid-column-start:1] flex flex-col justify-center ">
        <div className='mb-2'>
          <p className=' break-words text-md leading-4'>
            {worbite} 
          </p>
          <p className='font-normal text-[0.70rem]'>
            {partOfSpeech}
          </p>
        </div>
        <p className='font-normal text-[0.70rem] leading-3'>
          {definition}
        </p>
      </div>
    </div>
  )
}

export default CollectedWorbite