<template>
  <login>
    <connection class="main"/>

    <router-view class="page"/>
  </login>
</template>

<script>
import Connection from '@/client/views/Connection'
import Login from '@/client/views/Login'

export default {
  components: {
    Connection,
    Login
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  display: flex;
  height: 100vh;
  background-color: $clr-dark-blue;
  font-family: 'Inter', sans-serif;
  color: $clr-white;
}

.main {
  flex: 1 0 57%;
  border-right: 1px solid black;
  padding: 20px;
}

.page {
  padding: 20px;
}
</style>
