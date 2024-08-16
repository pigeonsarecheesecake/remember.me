import React, { useContext, useState } from 'react'
import axios from 'axios';

const CollectedWorbiteModal = ({modal, setIsModalOpen}) => {
  // States
  const {worbite, partOfSpeech, definition, examples, createdAt} = modal
  

  // Handlers

  return (
  <>
  {   
    // Modal
    <div className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 z-[1000]">
      {/* Overlay */}
      <div className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 bg-[rgba(49,49,49,0.8)] " onClick={()=>{setIsModalOpen(false)}}>
        {/* Content */}
        <div className="absolute top-[30%] left-[20%] bg-white w-[500px] h-[427px] rounded-[27px] overflow-hidden shadow-modal">
          {/* Left Modal */}
          <div className="">
            <p>{worbite}</p>
            <p>{partOfSpeech}</p>
            <p>{definition}</p>
          </div>
          {/* Right Modal */}
          <div className=""></div>
        </div>
      </div>
    </div>
  }
  </>)
}

export default CollectedWorbiteModal


