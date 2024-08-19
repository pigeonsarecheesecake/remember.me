import React, { useContext, useState } from 'react'
import {parseISO, format} from 'date-fns'
import axios from 'axios';

const CollectedWorbiteModal = ({modal, setIsModalOpen}) => {
  // States
  const {worbite, partOfSpeech, definition, examples, createdAt} = modal

  // Converts date to readable format
  const date  = parseISO(createdAt)
  const formattedDate = format(date, 'MM/dd/yyyy')

  // Handlers

  return (
  <>
  {   
    // Modal
    <div className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 z-[1000]">
      {/* Overlay does not include content so when user clicks overlay, modal closes */}
      <div className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 bg-[rgba(49,49,49,0.8)] " onClick={()=>{setIsModalOpen(false)}}> </div>
        {/* Content */}
        <div className="absolute top-[30%] left-[10%] w-[700px] bg-white h-[427px] rounded-[27px] overflow-hidden shadow-modal flex">
          {/* Left Modal */}
          <div className="border bg-tertiary flex flex-col justify-center w-[40%] p-6">
            {/* Date */}
            <div className="flex font-normal mb-4">
              <svg className='mr-2' width="15" height="15" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.48943 1.77075C5.48943 1.47735 5.25158 1.2395 4.95818 1.2395C4.66478 1.2395 4.42693 1.47735 4.42693 1.77075V2.88939C3.4074 2.97103 2.7381 3.17139 2.24638 3.66311C1.75465 4.15484 1.55429 4.82414 1.47266 5.84367H15.527C15.4454 4.82414 15.245 4.15484 14.7533 3.66311C14.2616 3.17139 13.5923 2.97103 12.5728 2.88939V1.77075C12.5728 1.47735 12.3349 1.2395 12.0415 1.2395C11.7481 1.2395 11.5103 1.47735 11.5103 1.77075V2.84239C11.039 2.83325 10.5108 2.83325 9.91651 2.83325H7.08318C6.48887 2.83325 5.96066 2.83325 5.48943 2.84239V1.77075Z" fill="#1C274C"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.41699 8.5C1.41699 7.90571 1.41699 7.3775 1.42613 6.90625H15.5745C15.5837 7.3775 15.5837 7.90571 15.5837 8.5V9.91667C15.5837 12.5879 15.5837 13.9236 14.7538 14.7534C13.924 15.5833 12.5883 15.5833 9.91699 15.5833H7.08366C4.41236 15.5833 3.07672 15.5833 2.24685 14.7534C1.41699 13.9236 1.41699 12.5879 1.41699 9.91667V8.5ZM12.042 9.91667C12.4332 9.91667 12.7503 9.59955 12.7503 9.20833C12.7503 8.81712 12.4332 8.5 12.042 8.5C11.6508 8.5 11.3337 8.81712 11.3337 9.20833C11.3337 9.59955 11.6508 9.91667 12.042 9.91667ZM12.042 12.75C12.4332 12.75 12.7503 12.4329 12.7503 12.0417C12.7503 11.6505 12.4332 11.3333 12.042 11.3333C11.6508 11.3333 11.3337 11.6505 11.3337 12.0417C11.3337 12.4329 11.6508 12.75 12.042 12.75ZM9.20866 9.20833C9.20866 9.59955 8.89154 9.91667 8.50033 9.91667C8.10911 9.91667 7.79199 9.59955 7.79199 9.20833C7.79199 8.81712 8.10911 8.5 8.50033 8.5C8.89154 8.5 9.20866 8.81712 9.20866 9.20833ZM9.20866 12.0417C9.20866 12.4329 8.89154 12.75 8.50033 12.75C8.10911 12.75 7.79199 12.4329 7.79199 12.0417C7.79199 11.6505 8.10911 11.3333 8.50033 11.3333C8.89154 11.3333 9.20866 11.6505 9.20866 12.0417ZM4.95866 9.91667C5.34986 9.91667 5.66699 9.59955 5.66699 9.20833C5.66699 8.81712 5.34986 8.5 4.95866 8.5C4.56746 8.5 4.25033 8.81712 4.25033 9.20833C4.25033 9.59955 4.56746 9.91667 4.95866 9.91667ZM4.95866 12.75C5.34986 12.75 5.66699 12.4329 5.66699 12.0417C5.66699 11.6505 5.34986 11.3333 4.95866 11.3333C4.56746 11.3333 4.25033 11.6505 4.25033 12.0417C4.25033 12.4329 4.56746 12.75 4.95866 12.75Z" fill="#1C274C"/>
              </svg>
              <p className='text-xs'>{formattedDate}</p>
            </div>
            {/* Worbite */}
            <div className="flex flex-col mb-4">
              <h2 className='text-[40px] leading-[45px]'>{worbite}</h2>
              <h3 className='text-lg font-normal'>{partOfSpeech}</h3>
            </div>
            {/* Definition */}
            <p className='font-normal'>{definition}</p>
          </div>
          {/* Right Modal */}
          <div className="">
            dadads
          </div>
        </div>
    </div>
  }
  </>)
}

export default CollectedWorbiteModal


