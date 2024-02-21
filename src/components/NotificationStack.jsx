import React from 'react'
import Notification from './Notification'



const NotificationStack = (props) => {
    return (
       props.notifications.map((notification) => {
        return (
            <Notification 
               id={notification.id}
               message={notification.message}
               removeNotification={props.removeNotification}
            />
        )
       })
    )
}

export default NotificationStack