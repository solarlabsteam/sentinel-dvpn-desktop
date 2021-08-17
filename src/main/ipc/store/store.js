import { ipcMain } from 'electron'
import Store from 'electron-store'

export default function initStore () {
  const store = new Store()

  ipcMain.handle('GET_STORE_VALUE', (event, key) => {
    return store.get(key)
  })

  ipcMain.handle('SET_STORE_VALUE', (event, payload) => {
    const { key, data } = JSON.parse(payload)
    return store.set(key, data)
  })
}
