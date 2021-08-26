import channels from '@/main/channels'
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'ipc', {
    send: (channel, data) => {
      if (channels.includes(channel)) {
        ipcRenderer.send(channel, data)
      }
    },
    on: (channel, func) => {
      if (channels.includes(channel)) {
        // Strip event as it includes `sender` and is a security risk
        ipcRenderer.on(channel, (event, ...args) => func(...args))
      }
    },
    once: (channel, func) => {
      if (channels.includes(channel)) {
        // Strip event as it includes `sender` and is a security risk
        ipcRenderer.once(channel, (event, ...args) => func(...args))
      }
    },
    invoke: async (channel, data) => {
      if (channels.includes(channel)) {
        return await ipcRenderer.invoke(channel, data)
      }
    },
    handle: async (channel, func) => {
      if (channels.includes(channel)) {
        ipcRenderer.on(channel, (event, ...args) => func(...args))
      }
    }
  }
)
