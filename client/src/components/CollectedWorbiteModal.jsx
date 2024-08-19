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
            <p>{formattedDate}</p>
            <p>{worbite}</p>
            <p>{partOfSpeech}</p>
            <p>{definition}</p>
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


