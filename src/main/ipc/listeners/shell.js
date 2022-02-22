import { ipcMain, shell } from 'electron'
import { OPEN_EXTERNAL_LINK } from '@/shared/channel-types'

export default function initShellListeners () {
  ipcMain.on(OPEN_EXTERNAL_LINK, (event, url) => {
    shell.openExternal(url)
  })
}
