import React from 'react'

const Worbite = ({worbite,partOfSpeech}) => {
  return (
    <div className='bg-adjective rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2'>
        {worbite} <br></br>
        {partOfSpeech}
    </div>
  )
}

export default Worbite