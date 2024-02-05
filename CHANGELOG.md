## Changelog since I forked Beaker

__1.2.4__
 - Now using my custom AVX compiler optimized Electron builds > https://github.com/Alex313031/electron-13.6.9
 - Added new privacy section with checkboxes for Do Not Track \
   and Global Privacy Control headers
 - "Seach with Google" now focuses the opened tab, similar to Chromium
 - [Electron Log](https://www.npmjs.com/package/electron-log) now logs URL navigations
 - Added Platform to about page version entries
 - Added background image(s) for the new tab page

__1.2.3__
 - Added https://beaker-browser.gitbook.io/
 - Fixed package-lock hyperspace issue (pinned sodium)
 - Update @beaker/dat-serve-resolve-path to my new fork > https://github.com/Alex313031/dat-serve-resolve-path
 - Update main icon/logo
 - Add new beaker internals page in settings, showing chrome:// URLs and debug stuff
 - Update toolbar style and highlight CSS colors
 - Update sqlite3 to 5.1.4
 - Update more npm deps and lock them to specific versions to prevent things like the \
   package-lock hyperspace issue from happening again.

__1.2.2__
 - Update links
 - Ressurect the documentation page, it is now at https://thorium.rocks/docs.beakerbrowser.com/
 - Update new tab page
 - Update menus
 - Update shortcuts
 - Add chrome://gpu page
 - Add shortcuts for duplicating tab
 - Add new tab to the right shortcut and menu
 - Add humans.txt
 - Fix Windows build
 - Update more npm deps

__1.2.1__
 - Updated to Electron 13.6.9 from castlabs (Has widevine for Netflix, etc.)
 - Changed setting defaults
 - Updated menus
 - Changed some CSS
 - Updated AdBlocker
 - Updated more npm deps
 - Now using my own fork of pauls-electron-rpc > https://github.com/Alex313031/pauls-electron-rpc
 - Added auto patching of electron-builder \
   for making releases.

__1.2.0__
 - Fixed hyperspace
 - Updated to Electron 12.2.3
 - Updated to node 14
 - Removed Analytics
 - Updated npm deps
 - Update sqlite3 to 5.1.2

__1.1.2__
 - Updated to Electron 11.5.0
 - Fixed hyperdrive-daemon-client

## Original Changelog
https://beakerbrowser.com/2020/12/08/beaker-1.1.html
