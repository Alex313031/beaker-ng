import * as path from 'path'
import { BrowserWindow } from 'electron'
import { ICON_PATH } from './windows'
import * as logger from '../logger'
import * as electronLog from 'electron-log'

// globals
// =

var initWindow

// exported api
// =

export function open ({isShutdown} = {isShutdown: false}) {
  initWindow = new BrowserWindow({
    autoHideMenuBar: false,
    fullscreenable: false,
    resizable: true,
    maximizable: false,
    alwaysOnTop: false,
    fullscreenWindowTitle: true,
    frame: false,
    width: 500,
    height: 420,
    backgroundColor: '#fff',
    webPreferences: {
      preload: path.join(__dirname, 'fg', 'webview-preload', 'index.build.js'),
      defaultEncoding: 'utf-8',
      nodeIntegration: false,
      contextIsolation: true,
      experimentalFeatures: true,
      devTools: true,
      worldSafeExecuteJavaScript: true,
      webviewTag: false,
      sandbox: true,
      webSecurity: true,
      enableRemoteModule: true,
      allowRunningInsecureContent: false
    },
    icon: ICON_PATH,
    show: true
  })
  initWindow.loadURL(`beaker://init/${isShutdown ? 'shutdown.html' : 'index.html'}`)
}

export function close () {
  if (initWindow) {
    if (!process.env.BEAKER_DEV) {
      initWindow.close()
      initWindow = undefined
      electronLog.info('init-window completed')
    } else {
    electronLog.info('init-window completed')
    electronLog.warn('init-window kept open because env variable BEAKER_DEV was set')
    }
  }
}
