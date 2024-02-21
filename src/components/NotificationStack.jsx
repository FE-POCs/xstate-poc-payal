import React from 'react'
import Notification from './Notification'



const NotificationStack = (props) => {
    return (
       props.notifications.map((notification) => {
        return (
            <Notification 
               id={notification.id}
               message={notification.message}
               type={notification.type}
               removeNotification={props.removeNotification}

            />
        )
       })
    )
}

export default NotificationStack