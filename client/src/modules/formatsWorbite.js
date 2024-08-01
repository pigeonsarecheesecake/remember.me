const formatsWorbite = (worbiteObject)=>{
  const {pos,word,definitions} = worbiteObject
  worbiteObject.word = word.toLowerCase().split(';')[0]
  worbiteObject.definitions= definitions[0].split('.')[0] + '.'
  switch(pos){
    case 'a.':
      worbiteObject.pos= 'adjective'
      worbiteObject.backgroundColor='bg-adjective'
    break
    case 'adv.':
      worbiteObject.pos= 'adverb'
      worbiteObject.backgroundColor='bg-adverb'
    break
    case 'conj.':
      worbiteObject.pos= 'conjunction'
      worbiteObject.backgroundColor='bg-conjunction'
    break
    case 'interj.':
      worbiteObject.pos= 'interjection'
      worbiteObject.backgroundColor='bg-interjection'
    break  
    case 'n.':
      worbiteObject.pos= 'noun'
      worbiteObject.backgroundColor='bg-noun'
    break
    case 'prep.':
      worbiteObject.pos= 'preposition'
      worbiteObject.backgroundColor='bg-preposition'
    break
    case 'pron.':
      worbiteObject.pos= 'pronoun'
      worbiteObject.backgroundColor='bg-pronoun'
    break
    case 'v.':
      worbiteObject.pos= 'verb'
      worbiteObject.backgroundColor='bg-verb'
    break
  }
}

export default formatsWorbite