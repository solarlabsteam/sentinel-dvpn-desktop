const { contextBridge, ipcRenderer } = require('electron')

const validChannels = ['NODE_LIST', 'SUBSCRIPTION_LIST', 'CONNECT_TO_NODE', 'CLI_INPUT', 'DISCONNECT', 'SUBSCRIBE_TO_NODE',
  'QUOTA', 'SUBSCRIPTION_FOR_NODE', 'NODE_INFO', 'GET_STORE_VALUE', 'SET_STORE_VALUE', 'CHECK_LOGIN', 'ADD_ACCOUNT'
]

contextBridge.exposeInMainWorld(
  'ipc', {
    send: (channel, data) => {
      if (validChannels.includes(channel)) {
        ipcRenderer.send(channel, data)
      }
    },
    on: (channel, func) => {
      if (validChannels.includes(channel)) {
        // Strip event as it includes `sender` and is a security risk
        ipcRenderer.on(channel, (event, ...args) => func(...args))
      }
    },
    once: (channel, func) => {
      if (validChannels.includes(channel)) {
        // Strip event as it includes `sender` and is a security risk
        ipcRenderer.on(channel, (event, ...args) => func(...args))
      }
    },
    invoke: async (channel, data) => {
      if (validChannels.includes(channel)) {
        return await ipcRenderer.invoke(channel, data)
      }
    }
  }
)
