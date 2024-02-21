import React from 'react'


const Notification = ({ id, message, removeNotification }) => {
    return (
        <div>
            {message} {id}
            <button onClick={() => removeNotification(id)}>Close</button>
        </div>
       
    )
}

export default Notification