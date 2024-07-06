import React from 'react'

const Worbite = ({worbiteObject}) => {
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
    case 'interj':
      partOfSpeech='interjection'
      break  
    case 'n.':
      partOfSpeech='noun'
      break
    case 'prep.':
      partOfSpeech='preposition'
      break
    case 'pron.':
      partOfSpeech='preposition'
      break
    case 'v.':
      partOfSpeech='verb'
      break
  }
  return (
    <div className={`bg-${partOfSpeech} rounded-[14px] h-40 flex justify-center items-center px-[25px] py-[18px] mb-2`}>
        {worbiteObject.word}
        <br />
        {partOfSpeech}
    </div>
  )
}

export default Worbite