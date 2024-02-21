import React, { useState } from 'react'
import NotificationStack from '../components/NotificationStack'
import { v4 as uuidv4 } from 'uuid';
import notificationMachine from '../notificationMachine';
import { useMachine } from '@xstate/react';


const NotificationPage = () => {
  const [state, sendAction] = useMachine(notificationMachine)
 
  const addNewNotification = (message, type) => {
    sendAction({ type: 'ADD_NEW_NOTIFICATION', value: { id: uuidv4(), message, type } })
  }

  const removeNotification = (id) => {
    console.log("remove notification", id)
    sendAction({ type: 'REMOVE_NOTIFICATION', value: id })
  }


  return (
    <div>
      <div>Notification Stack</div>
      <button onClick={() => addNewNotification("New Notification", "Success")}>Notify Success</button>
      <NotificationStack notifications={state.context.notifications} removeNotification={removeNotification} />
    </div>
  )
}

export default NotificationPage