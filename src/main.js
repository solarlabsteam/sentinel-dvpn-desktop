'use strict'

import path from 'path'
import { app, protocol, BrowserWindow, Menu, nativeImage, Tray, globalShortcut } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
import i18next from 'i18next'
import launchKeyringRestServer from '@/main/rest/keyring'
import launchDvpnRestServer from '@/main/rest/dvpn'
import Notifications from '@/main/common/Notifications'
import initI18n from '@/main/i18n'

const isDevelopment = process.env.NODE_ENV === 'development'

let win, tray

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', () => {
    // Someone tried to run a second instance, we should focus our window.
    if (win) {
      if (win.isMinimized()) win.restore()
      win.focus()
    }
  })

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', async () => {
    try {
      await initI18n()
    } catch (e) {
      console.trace('Cannot load locales')
    }

    try {
      await launchKeyringRestServer()
      await launchDvpnRestServer()
      if (isDevelopment && !process.env.IS_TEST) {
        // Install Vue Devtools
        try {
          await installExtension(VUEJS3_DEVTOOLS)
        } catch (e) {
          console.error('Vue Devtools failed to install:', e.toString())
        }
      }
      await import('./main/ipc')

      await createWindow()
      tray = createTray()
      createMenu()
    } catch (e) {
      Notifications.createCritical(e)
    }
  })
}

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

app.on('quit', () => {
  if (tray instanceof Tray) {
    tray.destroy()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('browser-window-focus', function () {
  if (isDevelopment) return

  globalShortcut.register('CommandOrControl+R', () => {
    console.log('CommandOrControl+R is pressed: Shortcut Disabled')
  })
  globalShortcut.register('F5', () => {
    console.log('F5 is pressed: Shortcut Disabled')
  })
})

app.on('browser-window-blur', function () {
  if (isDevelopment) return
  globalShortcut.unregister('CommandOrControl+R')
  globalShortcut.unregister('F5')
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.isQuitting = true
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.isQuitting = true
      app.quit()
    })
  }
}

async function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1200,
    height: 850,
    icon: nativeImage.createFromPath(path.resolve(__static, 'assets/images/logo.png')),
    autoHideMenuBar: true,
    webPreferences: {

      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('close', e => {
    if (app.isQuitting || process.platform === 'darwin') {
      return false
    }

    e.preventDefault()
    win.hide()
  })
}

function createTray () {
  const icon = nativeImage.createFromPath(path.resolve(__static, 'assets/images/small-logo.png'))
  const tray = new Tray(icon)
  const contextMenu = Menu.buildFromTemplate([
    {
      label: i18next.t('tray.open.label'),
      click: function () {
        win.show()
      }
    },
    {
      label: i18next.t('tray.exit.label'),
      click: function () {
        app.isQuitting = true
        win.close()
      }
    }
  ])

  tray.on('double-click', () => {
    win.show()
  })
  tray.setContextMenu(contextMenu)
  return tray
}

function createMenu () {
  const menu = Menu.buildFromTemplate([{
    label: i18next.t('menu.file.label'),
    submenu: [{
      role: 'close'
    },
    {
      label: i18next.t('menu.file.submenu.exit.label'),
      click: function () {
        app.isQuitting = true
        win.close()
      }
    }]
  }, {
    role: 'viewMenu'
  }])

  Menu.setApplicationMenu(menu)
}
