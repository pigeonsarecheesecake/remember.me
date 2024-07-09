import React from 'react'

const Worbite = ({worbiteObject}) => {
  // Worbite Object content
  const {word, pos, definitions} = worbiteObject
  // Part of speech
  let partOfSpeech;
  switch(worbiteObject.pos){
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
    <div className={` bg-${partOfSpeech} max-w-[237px] rounded-[14px] h-40 flex flex-col justify-center items-center mb-2`}>
        <p className='  w-3/4 break-words text-center text-lg'>
          {word.toLowerCase().split(';')[0]}
        </p>
        <p className='font-normal text-sm '>
          {partOfSpeech}
        </p>
    </div>
  )
}

export default Worbite