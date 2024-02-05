import { LitElement, html } from '../../../app-stdlib/vendor/lit-element/lit-element.js'
import viewCSS from '../../css/views/general.css.js'

class InternalsView extends LitElement {
  static get properties () {
    return {
    }
  }

  static get styles () {
    return viewCSS
  }

  constructor () {
    super()
  }

  async load () {
    // wire up events
    this.browserEvents = beaker.browser.createEventsStream()
    this.requestUpdate()
  }

  unload () {
    this.browserEvents.close()
  }

  // rendering
  // =

  render () {
  document.title = "Beaker Internals";

    return html`
      <link rel="stylesheet" href="beaker://assets/font-awesome.css">
      <div class="section info">
        <h2>List of internal Chromium URLs</h2>
        <h3>These URLs are the chrome:// URLs exposed by Electron</h3>
        ${this.renderChromeURLs()}
        <button class="btn btn-default" @click=${this.onClickViewBeakerLog}>View beaker.log</button>
        <button class="btn btn-default" @click=${this.onClickViewShellState}>View shell-window-state.json</button>
        <button class="btn btn-default" @click=${this.onClickOpenProcessManager}>Launch Process Manager</button>
      </div>
    `
  }

  renderChromeURLs () {
    return html`
      <div class="section">
        <ul class="chromeurls">
        <li><a href="#"><div @click=${this.onClickChromeAccessibilityUrl}>chrome://accessibility/</div></a></li>
        <li><a href="#"><div @click=${this.onClickChromeBlobUrl}>chrome://blob-internals/</div></a></li>
        <li><a href="#"><div @click=${this.onClickChromeDinoUrl}>chrome://dino/</div></a></li>
        <li><a href="#"><div @click=${this.onClickChromeGpuUrl}>chrome://gpu/</div></a></li>
        <li><a href="#"><div @click=${this.onClickChromeHistogramsUrl}>chrome://histograms/</div></a></li>
        <li><a href="#"><div @click=${this.onClickChromeIndexDbUrl}>chrome://indexeddb-internals/</div></a></li>
        <li><a href="#"><div @click=${this.onClickChromeMediaUrl}>chrome://media-internals/</div></a></li>
        <li><a href="#"><div @click=${this.onClickChromeNetErrorsUrl}>chrome://network-errors/</div></a></li>
        <li><a href="#"><div @click=${this.onClickChromeProcessesUrl}>chrome://process-internals/</div></a></li>
        <li><a href="#"><div @click=${this.onClickChromeServiceWorkerUrl}>chrome://serviceworker-internals/</div></a></li>
        <li><a href="#"><div @click=${this.onClickChromeTracingUrl}>chrome://tracing/</div></a></li>
        <li><a href="#"><div @click=${this.onClickChromeUkmUrl}>chrome://ukm/</div></a></li>
        <li><a href="#"><div @click=${this.onClickChromeWebRtcUrl}>chrome://webrtc-internals/</div></a></li>
        <ul>
      </div>
    `
  }

  // events
  // =

  onClickViewBeakerLog () {
    beaker.browser.viewBeakerLog()
  }
  onClickViewShellState () {
	beaker.browser.viewShellState()
  }
  // Eventually replace with proper task manager
  onClickOpenProcessManager () {
	beaker.browser.openChromeProcessesUrl()
  }
  onClickChromeAccessibilityUrl () {
    beaker.browser.openChromeAccessibilityUrl()
  }
  onClickChromeBlobUrl () {
    beaker.browser.openChromeBlobUrl()
  }
  onClickChromeDinoUrl () {
    beaker.browser.openChromeDinoUrl()
  }
  onClickChromeGpuUrl () {
    beaker.browser.openChromeGpuUrl()
  }
  onClickChromeHistogramsUrl () {
    beaker.browser.openChromeHistogramsUrl()
  }
  onClickChromeIndexDbUrl () {
    beaker.browser.openChromeIndexDbUrl()
  }
  onClickChromeMediaUrl () {
    beaker.browser.openChromeMediaUrl()
  }
  onClickChromeNetErrorsUrl () {
    beaker.browser.openChromeNetErrorsUrl()
  }
  onClickChromeProcessesUrl () {
    beaker.browser.openChromeProcessesUrl()
  }
  onClickChromeServiceWorkerUrl () {
    beaker.browser.openChromeServiceWorkerUrl()
  }
  onClickChromeTracingUrl () {
    beaker.browser.openChromeTracingUrl()
  }
  onClickChromeUkmUrl () {
    beaker.browser.openChromeUkmUrl()
  }
  onClickChromeWebRtcUrl () {
    beaker.browser.openChromeWebRtcUrl()
  }
}
customElements.define('internals-view', InternalsView)
