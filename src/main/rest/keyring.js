import { spawn } from 'child_process'
import ps from 'ps-node'
import portastic from 'portastic'
import store from '@/main/store/store'

export default async function launchKeyringRestServer () {
  const isLaunched = await isKeyringRestServerLaunched()

  if (isLaunched) {
    return true
  }

  const freePort = await portastic.find({
    min: 10000,
    max: 11000
  })
  const port = freePort.shift()
  store.set('keyringRestServerPort', port)

  return new Promise((resolve, reject) => {
    const keyringRestServer = spawn(
      'sentinelcli-dvpn-desktop',
      ['start', '--home', `${process.env.HOME}/.sentinelcli-dvpn-desktop`, '--listen', `127.0.0.1:${port}`, '--with-keyring'],
      { detached: true, stdio: 'ignore' }
    )
    setTimeout(() => {
      resolve()
    }, 1000)
    keyringRestServer.on('close', signal => {
      reject(signal)
    })
  })
}

function isKeyringRestServerLaunched () {
  return new Promise((resolve) => {
    ps.lookup({
      command: 'sentinelcli-dvpn-desktop',
      arguments: '--with-keyring'
    }, function (err, resultList) {
      if (err) {
        throw new Error(err)
      }

      resolve(resultList.length > 0)
    })
  })
}
