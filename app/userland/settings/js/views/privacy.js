import { LitElement, html, css } from '../../../app-stdlib/vendor/lit-element/lit-element.js'
import viewCSS from '../../css/views/blocking.css.js'
import * as toast from '../../../app-stdlib/js/com/toast.js'

class PrivacySettingsView extends LitElement {
  static get properties () {
    return {
    }
  }

  static get styles () {
    return viewCSS
  }

  constructor () {
    super()
    this.settings = undefined
    this.browserInfo = undefined
    this.browserEvents = undefined
  }

  async load () {
    this.browserEvents = beaker.browser.createEventsStream()
    // fetch data
    this.browserInfo = await beaker.browser.getInfo()
    this.settings = await beaker.browser.getSettings()
    console.log('loaded', {
      browserInfo: this.browserInfo,
      settings: this.settings
    })
    this.requestUpdate()
  }

  unload () {
    this.browserEvents.close()
  }

  // rendering
  // =

  render () {
  document.title = "Settings - Privacy";

    if (!this.browserInfo) return html``
    return html`
      <link rel="stylesheet" href="beaker://assets/font-awesome.css">
      <div class="form-group">
      <h2>Privacy</h2>
        <div class="section">
          <div class="radio-item">
            <input id="DoNotTrack" ?checked=${this.settings.do_not_track == 1} type="checkbox" @change=${this.onDoNotTrackChange} />
            <label for="DoNotTrack">
              <span>
                Send a "<a rel="noopener" target="_blank" href="https://www.w3.org/TR/tracking-dnt/">Do Not Track</a>" request with your browsing traffic
              </span>
            </label>
          </div>
        </div>
        <div class="section">
          <div class="radio-item">
            <input id="GlobalPrivacyControl" ?checked=${this.settings.global_privacy_control == 1} type="checkbox" @change=${this.onGlobalPrivacyControlChange} />
            <label for="GlobalPrivacyControl">
              <span>
                Send a "<a rel="noopener" target="_blank" href="https://globalprivacycontrol.org/">Global Privacy Control</a>" request with your browsing traffic
              </span>
            </label>
          </div>
        </div>
      </div>
      <em>&nbsp;<b>Note:</b> Both of these settings require a browser restart to take effect.</em>
    `
  }

  // events
  // =

  onDoNotTrackChange (e) {
    this.settings.do_not_track = this.settings.do_not_track == 1 ? 0 : 1
    beaker.browser.setSetting('do_not_track', this.settings.do_not_track)
    this.requestUpdate()
    toast.create('Setting updated')
  }

  onGlobalPrivacyControlChange (e) {
    this.settings.global_privacy_control = this.settings.global_privacy_control == 1 ? 0 : 1
    beaker.browser.setSetting('global_privacy_control', this.settings.global_privacy_control)
    this.requestUpdate()
    toast.create('Setting updated')
  }
}
customElements.define('privacy-settings-view', PrivacySettingsView)
