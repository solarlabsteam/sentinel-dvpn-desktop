import { ipcMain } from 'electron'
import Store from 'electron-store'

const store = new Store()

export function initStoreHandlers () {
  ipcMain.handle('GET_STORE_VALUE', (event, key) => {
    return store.get(key)
  })

  ipcMain.handle('SET_STORE_VALUE', (event, payload) => {
    const { key, data } = JSON.parse(payload)
    return store.set(key, data)
  })
}

export const getters = {
  getKeyByName (name) {
    if (!store.has('keys')) {
      return null
    }

    const keys = store.get('keys')

    return keys.find(k => k.name === name)
  }
}

export const setters = {
  setKey (key) {
    let keys = []

    if (store.has('keys')) {
      keys = store.get('keys')
    }

    const existedKeyIndex = keys.findIndex(k => k.name === key.name)

    if (existedKeyIndex !== -1) {
      keys.splice(1, existedKeyIndex, key)
    } else {
      keys.push(key)
    }

    store.set('keys', keys)
  }
}

export default store
