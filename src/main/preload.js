import channels from '@/main/channels'
import logger from '@/main/utils/logger'
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
    removeAllListeners: (channel) => {
      if (channels.includes(channel)) {
        ipcRenderer.removeAllListeners(channel)
      }
    }
  }
)

contextBridge.exposeInMainWorld(
  'logger', {
    error: logger.error
  }
)
