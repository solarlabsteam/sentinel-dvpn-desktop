import store from '@/main/store/store'

export default async function launchDvpnRestServer () {
  // By default server is started by a daemon sentinelcli-vpn.service on the port 12000
  store.set('dvpnRestServerPort', 12000)
}
