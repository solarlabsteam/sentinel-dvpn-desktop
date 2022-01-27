import { ipcMain } from 'electron'
import Store from 'electron-store'

const store = new Store()

export function initStoreHandlers () {
  ipcMain.handle('GET_STORE_VALUE', (event, key) => {
    return store.get(key)
  })

  ipcMain.handle('SET_STORE_VALUE', (event, payload) => {
    const { key, data } = JSON.parse(payload)

    store.set(key, data)
  })
}

export const getters = {
  getUserKey () {
    return store.get('key')
  }
}

export const setters = {
  setUserKey (key) {
    store.set('key', key)
  }
}

export default store
