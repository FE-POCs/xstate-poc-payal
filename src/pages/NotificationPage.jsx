import React from 'react'
import NotificationStack from '../components/NotificationStack'
import { v4 as uuidv4 } from 'uuid';
import notificationMachine from '../notificationMachine';
import { useMachine } from '@xstate/react';


const NotificationPage = () => {
  const [state, sendAction] = useMachine(notificationMachine)
 
  const addNewNotification = (message, type, customTimer) => {
    const uniqueId = uuidv4()
    const timer = customTimer ?? state.context.defaultTimer
    sendAction({ type: 'ADD_NEW_NOTIFICATION', value: { id: uniqueId , message, type } })
    setTimeout(() => {
      sendAction({ type: 'REMOVE_NOTIFICATION', value: uniqueId })
    }, timer)
  }

  const removeNotification = (id) => {
    sendAction({ type: 'REMOVE_NOTIFICATION', value: id })
  }


  return (
    <div>
      <div>Notification Stack</div>
      <button onClick={() => addNewNotification("New Success Notification", "Success")}>Success</button>
      <button onClick={() => addNewNotification("New Warning Notification", "Warning")}>Warning</button>
      <button onClick={() => addNewNotification("New Error Notification", "Error")}>Error</button>
      <button onClick={() => addNewNotification("New Timer Success Notification", "Success", 7000)}>Success Timer</button>
      <NotificationStack notifications={state.context.notifications} removeNotification={removeNotification} />
    </div>
  )
}

export default NotificationPage