import React from 'react'
import spinnerImage from "../../public/images/spinner.gif"

const Spinner = () => {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <img src={spinnerImage} />
    </div>
  )
}

export default Spinner
