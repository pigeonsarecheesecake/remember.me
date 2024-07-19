import React from 'react'

const Modal = ({parent, setParent}) => {
  return (
    <>
    {   
        // Modal
        <div className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 z-[1000]">
            {/* Overlay */}
            <div className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 bg-[rgba(49,49,49,0.8)] "></div>
            {/* Content */}
            <div className="absolute top-[40%] left-[50%]">
                <p>Chichi</p>
                <p>Description</p>
                <button onClick={()=>{setParent(null)}}>X</button>
            </div>
            {/* Close */}
        </div>
    }
    </>
  )
}

export default Modal