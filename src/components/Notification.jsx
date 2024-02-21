import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faClose,
  } from '@fortawesome/free-solid-svg-icons'


const Notification = ({ id, message, type, removeNotification }) => {
    return (
        <div className={`toast toast-${type}`}>
            <div className='toast-wrapper'>
              <div className='toast-message'>{message}</div> 
              <FontAwesomeIcon icon={faClose} onClick={() => removeNotification(id)} className='toast-closing' />
            </div>
           
        </div>
       
    )
}

export default Notification