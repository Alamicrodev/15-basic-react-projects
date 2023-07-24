import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from './context'


function Modal() {
    const {isModalActive, closeModal} = useGlobalContext()

  return (
    <div className={isModalActive? "modal__overlay modal--show": "modal__overlay" }>
       <div className="modal__container">
            <button className='modal__close' onClick={closeModal}>
                   <FaTimes /> 
            </button>
            <p>
                Modal Content
            </p>
       </div>
    </div>
  )
}

export default Modal