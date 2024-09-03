import {parseISO, format} from 'date-fns'

const CollectedWorbite = ({worbiteObject, setIsModalOpen, isModalOpen, setModal}) => {
  // Adds backgroundColor property for tailwind background class
  worbiteObject.backgroundColor = `bg-${worbiteObject.partOfSpeech}`

  // Worbite Object content
  const {worbite , partOfSpeech, definition, backgroundColor,_id, createdAt} = worbiteObject
  const date  = parseISO(createdAt)
  const formattedDate = format(date, 'MM/dd/yyyy')
  
  const handleClick = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
    setModal(worbiteObject)
  }

  return (
    <>
    <button onClick={handleClick} className={`${backgroundColor} w-full p-3 [grid-row-start:1] [grid-column-start:1] flex flex-col justify-center rounded-[14px] mb-2 text-left `}>
      <div className=''>
        <p className=' break-words text-md leading-4'>
          {worbite} 
        </p>
        <p className='font-normal text-[0.70rem]'>
          {partOfSpeech}
        </p>
      </div>
      <div className='border-b border border-black w-full my-2'></div>
      <p className='font-normal text-[0.70rem] leading-3'>
        {definition}
      </p>
      <p className='text-[8px] font-normal mt-2 text-right w-full'>{formattedDate}</p>
    </button>
    </>
  )
}

export default CollectedWorbite