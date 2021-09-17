# sentinel-dvpn-desktop

## Project setup
If you have a build of the application you will need to do only the first 2 steps. And launch the application after that.

### 1. Install Sentinel CLI (Linux)
Follow the [first step](https://github.com/sentinel-official/docs/blob/master/guides/mainnets/sentinelhub-1/SETUP.md#step-1---install-golang) to install Golang.

Clone [Sentinel Cli](https://github.com/sentinel-official/cli-client) and install dependencies from the first step. There are two servers which provides Rest API for the application.

Execute `make go` in cloned repository.

Copy sentinelcli to the user folder.
````
cp ~/go/bin/sentinelcli /usr/local/bin
````
### 2. Install Node.js
Node.js must be 14.17.6 LTS or later. [Download](https://nodejs.org/en/download/).

### 3. Install dependencies
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
