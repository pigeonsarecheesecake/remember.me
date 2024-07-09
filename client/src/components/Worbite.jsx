import React from 'react'

const Worbite = ({worbiteObject}) => {
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
  
  return (
    <div className={`max-w-[237px] mb-2 flex flex-col items-center perspective-1000 cursor-pointer`}>
        {/* Flipper */}
        <div className={`bg-${partOfSpeech} grid [grid-template-columns:1fr] rounded-[14px] w-full hover:[transform:rotateY(180deg)] hover:bg-opacity-50 transition-all duration-[600ms] [transform-style:preserve-3d]`}>
          {/* Front Card */}
          <div className="[grid-row-start:1] [grid-column-start:1] flex flex-col justify-center w-full [backface-visibility:hidden] [transform:rotateY(0deg)] z-[2]">
            <p className=' break-words text-center text-md '>
              {word.toLowerCase().split(';')[0]}
            </p>
            <p className='font-normal text-sm text-center'>
              {partOfSpeech}
            </p>
          </div>
          {/* Back Card */}
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
          </div>
        </div>
    </div>
  )
}

export default Worbite