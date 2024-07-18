import React, { useState } from 'react'
import { useDraggable } from '@dnd-kit/core';

const Worbite = ({worbiteObject,id}) => {
  // States 
  const [side, setSide] = useState('front')

  // Draggable Hook
  const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
    id:id
  })
 
  // Worbite Object content
  const {word, pos, definitions} = worbiteObject
  
  // Part of speech
  let partOfSpeech;
  switch(pos){
    case 'a.':
      partOfSpeech= 'adjective'
      break
    case 'adv.':
      partOfSpeech='adverb'
      break
    case 'conj.':
      partOfSpeech='preposition'
      break
    case 'interj.':
      partOfSpeech='interjection'
      break  
    case 'n.':
      partOfSpeech='noun'
      break
    case 'prep.':
      partOfSpeech='preposition'
      break
    case 'pron.':
      partOfSpeech='pronoun'
      break
    case 'v.':
      partOfSpeech='verb'
      break
  }
  
  function handleClick(){
   side === 'front' ? setSide('back') : setSide('front')
  }

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} className={` max-w-[237px] mb-2 flex flex-col items-center perspective-1000 `}>
        {/* Flipper */}
        <div onClick={handleClick} className={`bg-${partOfSpeech} ${side==='front'?'':'[transform:rotateY(180deg)]'} grid [grid-template-columns:1fr] rounded-[14px] w-full transition-all duration-[600ms] [transform-style:preserve-3d] hover:bg-opacity-70`}>
          {/* Card (front) */}
          <div className={`[grid-row-start:1] [grid-column-start:1] flex flex-col justify-center w-full [backface-visibility:hidden] [transform:rotateY(0deg)] z-[2]`}>
            <p className={`break-words text-center text-md leading-5`}>
              {word.toLowerCase().split(';')[0]}
            </p>
            <p className={`font-normal text-[0.70rem] text-center`}>
              {partOfSpeech}
            </p>
          </div>
          {/* Card (back) */}
          <div className="w-full p-3 [grid-row-start:1] [grid-column-start:1] flex flex-col justify-center [backface-visibility:hidden] p-2 [transform:rotateY(180deg)]">
            <div className='mb-2'>
              <p className=' break-words text-md leading-4'>
                {word.toLowerCase().split(';')[0]} 
              </p>
              <p className='font-normal text-[0.70rem]'>
                {partOfSpeech}
              </p>
            </div>
            <p className='font-normal text-[0.70rem] leading-3'>
              {definitions[0].split('.')[0] + '.'}
            </p>
          </div>
        </div>
    </div>
    
  )
}

export default Worbite