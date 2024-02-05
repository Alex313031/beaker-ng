import { ipcRenderer, webFrame } from 'electron'
import { setup as setupWebAPIs } from '../../bg/web-apis/fg.js'
import { setup as setupPrompt } from './prompt'
import { setup as setupExecuteJavascript } from './execute-javascript'
import setupExitFullScreenHackfix from './exit-full-screen-hackfix'
// import readableStreamAsyncIteratorPolyfill from './readable-stream-async-iterator-polyfill'
import windowOpenCloseHackfix from './window-open-close-hackfix'
import resizeHackfix from './resize-hackfix'

// HACKS
setupExitFullScreenHackfix()
// readableStreamAsyncIteratorPolyfill()
windowOpenCloseHackfix()
resizeHackfix()

setupWebAPIs()
setupPrompt()
setupExecuteJavascript()

// Privacy headers
webFrame.executeJavaScript(`Object.defineProperty(window.navigator, 'doNotTrack', { value: 1 })`)
webFrame.executeJavaScript(`Object.defineProperty(window.navigator, 'globalPrivacyControl', { value: true })`)

window.addEventListener('focus', e => {
  // track focus
  ipcRenderer.send('BEAKER_WC_FOCUSED')
})
