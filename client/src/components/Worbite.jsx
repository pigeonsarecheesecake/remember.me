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

  // Apply style when element is being dragged
  const style= transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    zIndex: isDragging ? 9999 : 'auto',
    position: 'absolute',
  } : undefined
  
  function handleClick(){
   side === 'front' ? setSide('back') : setSide('front')
  }

  return (
    <div style={style} ref={setNodeRef} {...listeners} {...attributes} className={` max-w-[237px] mb-2 flex flex-col items-center perspective-1000 `}>
        <div onClick={handleClick} className={`bg-${partOfSpeech} ${side==='front'?'':'[transform:rotateY(180deg)]'} ${isDragging ? 'bg-opacity-0' : ''} hover:bg-opacity-70 grid [grid-template-columns:1fr] rounded-[14px] w-full transition-all duration-[600ms] [transform-style:preserve-3d]`}>
        {isDragging? 
        <div className={`bg-${partOfSpeech} ${side==='front'? '':' [transform:rotateY(180deg)]'} text-center p-4 rounded-[14px] border border-2 border-black `}>
          <p>{word.toLowerCase().split(';')[0]}</p>
          <svg className='absolute top-[20px] left-[-10px]' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_581_1462)">
<path d="M10.7343 21.1431C16.2526 21.1431 20.726 16.6703 20.726 11.1529C20.726 5.63556 16.2526 1.16284 10.7343 1.16284C5.2161 1.16284 0.742676 5.63556 0.742676 11.1529C0.742676 16.6703 5.2161 21.1431 10.7343 21.1431Z" fill="white"/>
<path d="M10.9931 22C4.90761 21.9886 -0.00801103 17.0668 9.80174e-06 10.9937C0.00803063 4.91144 4.93397 -0.0102947 11.0046 1.61712e-05C17.0844 0.0103271 22.0103 4.94122 22 11.0075C21.9897 17.092 17.0638 22.0115 10.9931 22ZM20.3122 10.9834C20.2996 5.86118 16.1276 1.69444 11.0057 1.68756C5.88043 1.68184 1.68553 5.87379 1.68782 10.9994C1.69011 16.1297 5.88386 20.3205 11.0057 20.3125C16.1322 20.3033 20.3259 16.0999 20.3122 10.9834Z" fill="black"/>
<path d="M11.8526 11.8517V12.1874C11.8526 13.2552 11.8538 14.3218 11.8526 15.3895C11.8515 15.9669 11.4951 16.3679 10.9956 16.3645C10.496 16.3599 10.1499 15.9601 10.1488 15.3792C10.1476 14.2175 10.1488 13.0558 10.1488 11.8517C10.0308 11.8517 9.93108 11.8517 9.83025 11.8517C8.73369 11.8517 7.63827 11.8586 6.54171 11.8495C5.83358 11.8437 5.41306 11.1552 5.75681 10.5766C5.939 10.2696 6.22431 10.1459 6.57494 10.147C7.65202 10.1493 8.7291 10.147 9.80619 10.147C9.90931 10.147 10.0124 10.147 10.1488 10.147C10.1488 10.021 10.1488 9.91902 10.1488 9.81706C10.1488 8.72067 10.1442 7.62542 10.1511 6.52903C10.1545 6.01807 10.5292 5.63428 11.0001 5.63428C11.4711 5.63428 11.8366 6.01578 11.8526 6.52674C11.8549 6.59319 11.8526 6.65964 11.8526 6.72723C11.8526 7.74686 11.8526 8.7665 11.8526 9.78613C11.8526 9.89038 11.8526 9.99464 11.8526 10.1459C11.9649 10.1459 12.0646 10.1459 12.1643 10.1459C13.2609 10.1459 14.3563 10.1401 15.4529 10.1482C16.0991 10.1527 16.5185 10.7279 16.3042 11.2927C16.1701 11.6478 15.8493 11.8472 15.3921 11.8483C14.3242 11.8506 13.2574 11.8483 12.1895 11.8483C12.0875 11.8483 11.9856 11.8483 11.8526 11.8483V11.8517Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_581_1462">
<rect width="22" height="22" fill="white"/>
</clipPath>
</defs>
</svg>

        </div> : <><div className={`[grid-row-start:1] [grid-column-start:1] flex flex-col justify-center w-full [backface-visibility:hidden] [transform:rotateY(0deg)] z-[2]`}>
            <p className={` ${isDragging? `bg-${partOfSpeech} p-4 border border-2 border-black rounded-[14px]`: '' } break-words text-center text-md`}>
              {word.toLowerCase().split(';')[0]}
            </p>
            <p className={`${isDragging ? 'hidden' : ''} font-normal text-sm text-center`}>
              {partOfSpeech}
            </p>
          </div>
    
          <div className="w-full p-3 [grid-row-start:1] [grid-column-start:1] flex flex-col justify-center [backface-visibility:hidden] p-2 [transform:rotateY(180deg)]">
            <div className='mb-2'>
              <p className=' break-words text-md'>
                {word.toLowerCase().split(';')[0]} 
              </p>
              <p className='font-normal text-[0.70rem]'>
                {partOfSpeech}
              </p>
            </div>
            <div className="border border-[1px] mb-2 border-black "></div>
            <p className='font-normal text-[0.70rem]'>
              {definitions[0].split('.')[0] + '.'}
            </p>
          </div></>}
          
        </div>
    </div>
    
  )
}

export default Worbite