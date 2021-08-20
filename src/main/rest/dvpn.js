import Sudoer from 'electron-sudo'
import portastic from 'portastic'
import store from '@/main/store/store'
import { exec } from 'child_process'

export async function launchDvpnRestServer () {
  const isLaunched = await isDvpnRestServerLaunched()

  if (isLaunched) {
    return true
  }

  const freePort = await portastic.find({
    min: 12000,
    max: 13000
  })
  const port = freePort.shift()
  store.set('dvpnRestServerPort', port)

  return new Promise((resolve, reject) => {
    const sudoer = new Sudoer({ name: 'Sentinel DVPN Desktop' })
    sudoer.spawn(
      'sentinelcli',
      ['start', '--home', '/tmp', '--listen', `127.0.0.1:${port}`, '--tty', '--with-service'],
      { detached: true, stdio: 'ignore' }
    ).then(() => {
      resolve()
    }).catch((err) => {
      reject(err)
    })
  })
}

function isDvpnRestServerLaunched () {
  return new Promise((resolve) => {
    exec('ps -ef | grep sentinelcli', (error, stdout) => {
      console.error(error)
      resolve(stdout.indexOf('--with-service') !== -1)
    })
  })
}
