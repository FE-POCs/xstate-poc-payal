import { createMachine, assign } from 'xstate'


const notificationMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QDsD2AXAlgM0wYwEMtVkBaWdAvAawGIBBAEUYH0A5AUQHV2B5AFQCSAMUEBhekN5sA2gAYAuolAAHVLEzFkykAA9EARgMA6AJzmLliwA4AbABoQAT0NzrxgCwBWAMwGPBj7WgbZyAEzWAL6RjmhYuIRa5JQ0tABKHACyvABqHHxCohJSsoo6ahpaOvoIBgDsnmGmttZ1dR62pu0Rji61YdExIGgQcDpxOPhEmCTJVNTl6poz2kh6iB4+xmGdvgZhBqZeOwYOzohhcqZmcrYRYXV3dZdetoORQA */
    id: 'notification-stack',
    context: {
        notifications: [],
        defaultTimer: 4000
    },
    initial: 'empty',
    states: {
      empty: {
        on: {
            ADD_NEW_NOTIFICATION: {
                target: 'nonEmpty',
                actions: assign({
                    notifications: ({ context, event }) => {
                        return context.notifications.concat(event.value);
                    },
                })
            },
        },
      },
      nonEmpty: {
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
        }
      }
    }


})

export default notificationMachine
