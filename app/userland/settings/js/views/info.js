import { LitElement, html } from '../../../app-stdlib/vendor/lit-element/lit-element.js'
import viewCSS from '../../css/views/general.css.js'

class InfoSettingsView extends LitElement {
  static get properties () {
    return {
      isVersionsExpanded: {type: Boolean}
    }
  }

  static get styles () {
    return viewCSS
  }

  constructor () {
    super()
    this.browserInfo = undefined
    this.daemonStatus = undefined
    this.isVersionsExpanded = false
  }

  async load () {
    this.browserInfo = await beaker.browser.getInfo()
    this.daemonStatus = await beaker.browser.getDaemonStatus()
    console.log('loaded', {
      browserInfo: this.browserInfo,
      daemonStatus: this.daemonStatus
    })
    this.requestUpdate()
  }

  unload () {
    this.browserEvents.close()
  }

  // rendering
  // =

  render () {
  document.title = "Settings - About";

    if (!this.browserInfo) return html``
    return html`
      <link rel="stylesheet" href="beaker://assets/font-awesome.css">
      <div class="section info">
        <h2 id="information" class="subtitle-heading">About Beaker</h2>
        <p class="ver">
          <strong>App Version:</strong>
          ${this.browserInfo.version}
        <br/>
        </p>
        <p>
          <ul class="versions">
            <li><strong>Electron:</strong> ${this.browserInfo.electronVersion}</li>
            <li><strong>Chromium:</strong> ${this.browserInfo.chromiumVersion}</li>
            <li><strong>Node:</strong> ${this.browserInfo.nodeVersion}</li>
            <li><strong>V8:</strong> ${this.browserInfo.v8Version}</li>
            <li><strong>Hyperspace API:</strong> ${this.daemonStatus.apiVersion}</li>
            <li><strong>Platform:</strong> ${this.browserInfo.fullPlatform}</li>
          </ul>
        </p>
        <p class="info"><strong>User Data Dir:</strong> ${this.browserInfo.paths.userData}</p>
        <p><strong>
          Beaker-ng is an experimental peer-to-peer Web browser based on <a rel="noopener" target="_blank" href="https://www.electronjs.org/">Electron</a>. It adds new APIs for building hostless applications while remaining compatible with the rest of the Web. 
          <br/>
          It can use the <a rel="noopener" target="_blank" href="https://www.datprotocol.com/">dat://</a> and <a rel="noopener" target="_blank" href="https://github.com/hypercore-protocol">hyper://</a> URL schemes/protocols. You can <a rel="noopener" target="_blank" href="https://beaker-browser.gitbook.io/docs/beginner/creating-new-hyperdrives">create hyperdrives</a> and <a rel="noopener" target="_blank" href="https://beaker-browser.gitbook.io/docs/beginner/sharing-hyperdrives">share them</a> with your peers. 
          <br/>
          Hyperdrives are <a rel="noopener" target="_blank" href="https://en.wikipedia.org/wiki/End-to-end_encryption">encrypted</a>, <a rel="noopener" target="_blank" href="https://en.wikipedia.org/wiki/Clustered_file_system#Distributed_file_systems">distributed</a>, and <a rel="noopener" target="_blank" href="https://en.wikipedia.org/wiki/Decentralized_web">decentralized</a>. 
          <br/>
          It is a continued fork of <a rel="noopener" target="_blank" href="https://github.com/beakerbrowser/beaker">Beaker</a>.
        </strong></p>
        <a title="Beaker WebUI Test Page" target="_blank" href="beaker://webui/">
        <svg title="Beaker SVG" fill="currentColor" width="8em" height="8em" viewBox="0 0 423.33333 423.33334"><g><path d="m 200.89962,376.0479 c -24.73216,-1.58999 -50.03103,-9.19167 -71.4375,-21.46517 -22.17481,-12.71403 -41.770537,-31.08395 -55.750567,-52.2631 -21.57868,-32.69077 -30.78054,-71.64081 -26.07932,-110.38965 3.08365,-25.4163 11.91667,-49.42273 26.07932,-70.87855 5.92143,-8.97071 11.67851,-16.07078 19.58166,-24.149613 8.783677,-8.978953 16.400907,-15.324151 26.291127,-21.900673 16.86303,-11.213103 33.66176,-18.605574 52.91667,-23.286565 33.1993,-8.070963 66.14007,-5.907045 99.30693,6.523591 8.55737,3.20722 15.0652,4.616366 24.65855,5.339333 4.91048,0.37006 6.60707,0.329676 15.73451,-0.374531 5.6268,-0.434124 13.2468,-0.874368 16.93333,-0.97832 12.74853,-0.359481 18.3855,1.439679 20.55395,6.560239 1.54225,3.641861 1.58295,4.143194 1.84942,22.779822 0.27258,19.064617 0.52411,22.429417 2.29427,30.691657 1.29904,6.0633 2.38416,9.06084 5.94809,16.43101 10.13412,20.95726 15.29833,40.34326 16.79852,63.06025 1.5486,23.44986 -2.52328,48.80746 -11.36765,70.79207 -10.94619,27.20912 -28.1073,50.0767 -51.59882,68.75663 -4.51138,3.58735 -14.17744,10.08816 -19.75556,13.2864 -5.71429,3.27631 -16.55936,8.43954 -22.40138,10.66507 -22.80973,8.68939 -46.6421,12.33747 -70.55555,10.8001 z m 19.93194,-47.96386 c 29.14081,-2.50322 55.34477,-14.82307 75.17415,-35.34329 18.27114,-18.90769 29.06845,-41.81794 32.29806,-68.53161 0.61364,-5.07567 0.61364,-19.97154 0,-25.04722 -3.23107,-26.72572 -14.01866,-49.61537 -32.29806,-68.5316 -26.17801,-27.09003 -63.8503,-39.879737 -101.45609,-34.444247 -40.13126,5.800517 -74.90491,32.525387 -90.82786,69.804667 -4.448017,10.41383 -7.183307,20.87142 -8.722427,33.34757 -0.60148,4.87566 -0.59211,19.84443 0.0156,24.87083 3.23108,26.72573 14.018657,49.61538 32.298067,68.53161 19.64716,20.33165 46.03634,32.81965 74.64499,35.32384 4.89002,0.42803 14.00778,0.43743 18.87361,0.0194 z" style="stroke-width:0.352778"></path></g></svg></a>

      </div>
    `
  }
}
customElements.define('info-settings-view', InfoSettingsView)
