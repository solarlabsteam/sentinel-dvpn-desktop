# Sentinel dVPN

##


## Project setup for developers

### Overview

### 1. Install WireGuard and Sentinel CLI
It uses two rest servers which are included in [sentinel-cli](https://github.com/sentinel-official/cli-client).
Run the script to install dependencies:
````
sudo sh scripts/linux/install-dev-dependencies
````
There is an auto-launching daemon. It may be necessary to restart a system.

### 2. Install Node.js
Node.js must be 14.17.6 LTS or later. [Download](https://nodejs.org/en/download/).

### 4. Install Vue CLI
CLI must be v4. [Download](https://cli.vuejs.org/guide/installation.html).

### 5. Install npm dependencies
```
yarn install
# OR
npm install
```

## Development
### Compiles and hot-reloads for development
```
yarn electron:serve
```

## Production
### Compiles and minifies for production
```
yarn electron:build
```
The build will be placed in `/dist_electron`. There will be the unpacked application and a bundled executable file for your system.

## Folder structure
```html
├── dist_electron/
│ ├── bundled/..  # where webpack outputs compiled files
│ ├── linux-unpacked/..  # unpacked Electron app (main app and supporting files)
│ ├── Sentinel dVPN-[version].deb  # installer for Electron app
│ ├── index.js  # compiled background file used for electron:serve
├── bin/linux/ # additional application binaries
│ ├── sentinelcli-dvpn-desktop # cli-client
├── build/ # build resources directory
│ ├── icons/.. # shortcuts
├── public/..  # Files placed here will be available through __static or process.env.BASE_URL
├── scripts/.. # scripts to install or remove additional binaries and daemons
├── src/
│ ├── background.js  # electron entry file (for Electron's main process)
│ ├── main.js  # the app's entry file (for Electron's render process)
│ └── ...
```

## Troubleshooting

### connect ECONNREFUSED 127.0.0.1:10000
The app uses two rest servers from [sentinel-cli](https://github.com/sentinel-official/cli-client). 
The problem is the app uses the hard coded address to connect to the servers.
If the host is not available the app won't work. Maybe it'll recognize an available host dynamically in the future.

The first server is a keyring handler. It's launched and closed together with the app.
The host `127.0.0.1` is hard coded for KeyApi.js and must be available. 
The port value is taken from `~/.config/Sentinel\ dVPN/config.json` `keyringRestServerPort`. 
You can change it manually and restart the app.

There is a command how to run the server manually if the app doesn't launch it by itself.
```
sentinelcli-dvpn-desktop start --home ${HOME}/.sentinelcli-dvpn-desktop --listen 127.0.0.1:10000 --with-keyring
```

The second server is a connection service. It's used as a daemon and is installed with the app and started with a system. 
The host and the port `127.0.0.1:12000` are hard coded for DvpnApi.js and must be available. 
The daemon is described in `scripts/linux/sentinelcli-dvpn.service`. 
**You can change it, but you'll have to [rebuild](https://github.com/solarlabsteam/sentinel-dvpn-desktop#project-setup-for-developers) the app!**
You can change the daemon script and reinstall it. Then change a port value in `src/main/rest/dvpn.js`. Then rebuild the app.

There is a command how to run the server manually if the daemon doesn't work.
```
sentinelcli-dvpn-desktop start --home ${HOME}/.sentinelcli-dvpn-desktop --listen 127.0.0.1:12000 --tty --with-service
```

### key with name desktop_dvpn_key_name already added
The easiest way is to reinstall the app. 
Or you can remove folder `~/.config/Sentinel\ dVPN`, `~/.sentinelcli-dvpn-desktop` and kill all `sentinelcli-dvpn-desktop` processes.
