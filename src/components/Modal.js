import React from 'react'
import './modal.css'

function Modal({closeModal}) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
        <button onClick={() => closeModal(false)}>X</button>

        </div>
        <div className='title'>
          <h1>Are you sure you want to continue?</h1>
        </div>
        <div className='body'>
          <p>next page is awesome! proceed forward</p>
        </div>
        <div className='footer'>
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Modal