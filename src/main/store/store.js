import { ipcMain } from 'electron'
import Store from 'electron-store'
import { GET_STORE_VALUE, SET_STORE_VALUE } from '@/shared/channel-types'

const store = new Store()

export function initStoreHandlers () {
  ipcMain.handle(GET_STORE_VALUE, (event, key) => {
    return store.get(key)
  })

  ipcMain.handle(SET_STORE_VALUE, (event, payload) => {
    const { key, data } = JSON.parse(payload)

    store.set(key, data)
  })
}

export const getters = {
  getUserKey () {
    return store.get('key')
  },

  getSetting (key) {
    const settings = store.get('settings') || {}
    return settings[key]
  }
}

export const setters = {
  setUserKey (key) {
    store.set('key', key)
  },

  setSetting (key, value) {
    const settings = store.get('settings') || {}
    store.set('settings', {
      ...settings,
      [key]: value
    })
  }
}

export default store
