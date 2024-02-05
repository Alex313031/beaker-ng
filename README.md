Beaker Browser
======

![logo.png](build/icons/256x256.png)

Beaker-ng is an experimental peer-to-peer Web browser based on [Electron](https://www.electronjs.org/). It adds new APIs for building hostless applications while remaining compatible with the rest of the Web. It can use the dat:// and hyper:// URL schemes/protocols. \
It is a continued fork of [Beaker](https://github.com/beakerbrowser/beaker).

[Visit the website.](https://beaker-browser.gitbook.io/)

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installing](#installing)
  - [Binaries](#binaries)
  - [Building from source](#building-from-source)
- [Documentation](#documentation)
  - [Env Vars](#env-vars)
- [Vulnerability Disclosure](#vulnerability-disclosure)
- [Known Issues](#known-issues)
  - [tmux](#tmux)
- [Contributors](#contributors)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installing

### Binaries

**Visit the [Releases Page](https://github.com/Alex313031/beaker-ng/releases) to find the installer you need.**

### Building from Source

Requires node 12, 14, or 16.

On Linux (and in some cases macOS) you need libtool, m4, autoconf, and automake:

```bash
sudo apt-get install libtool m4 make g++ autoconf # debian/ubuntu
sudo dnf install libtool m4 make gcc-c++ libXScrnSaver  # fedora
brew install libtool autoconf automake # macos
```

On Windows, you'll need to install [Python 3.9](https://www.python.org/downloads/release/python-2913/), Visual Studio 2015 or 2017, and [Git](https://git-scm.com/download/win). (You might try [windows-build-tools](https://www.npmjs.com/package/windows-build-tools) in place of MSVS.) Then run:

```powershell
npm config set python C:\absolute\path\to\python.exe
npm config set msvs_version 2017
npm install -g gulp
```

To Build:

```bash
git clone https://github.com/Alex313031/beaker-ng.git
cd beaker/scripts
npm install # don't worry about v8 api errors building native modules - rebuild will fix
npm run rebuild # needed after each install for sqlite3. See https://github.com/electron/electron/issues/5851
npm start # for generating installation packages, see below
```

To Clean

```bash
npm run clean # cleans node_modules
npm run distclean # cleans 'dist' dir
```

To Build Installers

```bash
npm run dist # compiles beaker and places it in 'dist/platform-unpacked', where platform is i.e. linux, win, mac
npm run distclean # cleans 'dist'
npm run dist-linux # to make .deb, .appimage, and .zip
npm run dist-win # to make .exe and .zip
npm run dist-mac # to make .dmg and .app
```

If you pull latest from the repo and get weird module errors, do:

```bash
npm run burnthemall
```

This invokes [the mad king](http://nerdist.com/wp-content/uploads/2016/05/the-mad-king-game-of-thrones.jpg), who will torch your `node_modules/`, and do the full install/rebuild process for you.
(We chose that command name when GoT was still cool.)
`npm start` should work afterward.

If you're doing development, `npm run watch` to have assets build automatically.

## [Documentation](https://thorium.rocks/docs.beakerbrowser.com/)

### Env Vars

- `DEBUG`: which log systems to output? A comma-separated string. Can be `beaker`, `dat`, `bittorrent-dht`, `dns-discovery`, `hypercore-protocol`. Specify `*` for all.
- `BEAKER_OPEN_URL`: open the given URL on load, rather than the previous session or default tab.
- `BEAKER_USER_DATA_PATH`: override the user-data path, therefore changing where data is read/written. Useful for testing. For default value see `userData` in the [electron docs](https://electron.atom.io/docs/api/app/#appgetpathname).
- `BEAKER_DAT_QUOTA_DEFAULT_BYTES_ALLOWED`: override the default max-quota for bytes allowed to be written by a dat site. Useful for testing. Default value is `'500mb'`. This can be a Number or a String. Check [bytes.parse](https://github.com/visionmedia/bytes.js/tree/a4b9af2bf289175f12b3538eb172f2489844b1ec#bytesparsestringnumber-value-numbernull) for supported units and abbreviations.

## Vulnerability Disclosure

See [SECURITY.md](./SECURITY.md) for reporting security issues and vulnerabilities.

## Known Issues

### tmux

Launching from tmux is known to cause issues with GUI apps in macOS. On Beaker, it may cause the application to hang during startup.

## Contributors

This project exists thanks to all the people who contribute.
[[Contribute]](CONTRIBUTING.md).

## License

See [LICENSE](LICENSE)
