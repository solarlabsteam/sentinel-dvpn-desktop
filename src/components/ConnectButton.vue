<template>
  <button type="button" @click="connectToDvpn">Connect to dVPN</button>
</template>

<script>
import { queryNodeList } from '../modules/dvpnConnection'

export default {
  name: 'ConnectButton',
  methods: {
    connectToDvpn () {
      queryNodeList()
    }
  }
}
</script>
