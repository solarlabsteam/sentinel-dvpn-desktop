# sentinel-dvpn-desktop

## Project setup

### 1. Install Sentinel CLI (Linux)
Follow the [first step](https://github.com/sentinel-official/docs/blob/master/guides/mainnets/sentinelhub-1/SETUP.md#step-1---install-golang) to install Golang.

Run the script to install dependencies:
````
sudo sh scripts/linux/install-dev-dependencies
````
There is an auto-launching daemon. It is needed to restart a system.

### 2. Install Node.js
Node.js must be 14.17.6 LTS or later. [Download](https://nodejs.org/en/download/).

### 3. Install npm dependencies
Install [Vue CLI](https://cli.vuejs.org/guide/installation.html)
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
