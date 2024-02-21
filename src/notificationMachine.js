import { createMachine, assign } from 'xstate'


const notificationMachine = createMachine({
    id: 'notification-stack',
    context: {
        notifications: [],
        defaultTimer: 4000
    },
    on: {
        ADD_NEW_NOTIFICATION: {
            actions: assign({
                notifications: ({ context, event }) => {
                    return context.notifications.concat(event.value);
                },
            })
        },
        REMOVE_NOTIFICATION: {
            actions: assign({
                notifications: ({ context, event }) => {
                    return context.notifications.filter((notification) => notification.id !== event.value)
                }
            })
        }
    },

})

export default notificationMachine
