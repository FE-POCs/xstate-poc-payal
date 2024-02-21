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
    sendAction({ type: 'ADD_NEW_NOTIFICATION', value: { id: uniqueId, message, type } })
    setTimeout(() => {
      sendAction({ type: 'REMOVE_NOTIFICATION', value: uniqueId })
    }, timer)
  }

  const removeNotification = (id) => {
    sendAction({ type: 'REMOVE_NOTIFICATION', value: id })
  }


  return (
    <div>
      <h1>Notification Stack</h1>
      <div className='toast-buttons'>
        <div class="toast-row">
          <button onClick={() => addNewNotification("New Success Notification", "success")} class="custom-toast success-toast">Success</button>
          <button onClick={() => addNewNotification("New Warning Notification", "warning")} class="custom-toast warning-toast">Warning</button>
          <button onClick={() => addNewNotification("New Error Notification", "error")} class="custom-toast error-toast">Error</button>
          <button onClick={() => addNewNotification("New Timer Success Notification", "success", 7000)} class="custom-toast info-toast">Success Timer</button>
        </div>
      </div>
     <div className='notification-stack'>
       <NotificationStack notifications={state.context.notifications} removeNotification={removeNotification} />
     </div>
    </div>
  )
}

export default NotificationPage