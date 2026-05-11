import React from 'react'
import { GiCheckMark } from 'react-icons/gi'

const CopyCopmponent = ({copyPopup,message}) => {
  return (
    <>
         <div className={`copy-popup z-50 ${copyPopup ? "active" : ""}`}>
        <GiCheckMark />
        <div>{message} </div>
      </div>
    </>
  )
}

export default CopyCopmponent
