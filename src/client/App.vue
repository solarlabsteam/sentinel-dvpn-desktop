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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  display: flex;
}

.main {
  flex: 1 0 57%;
  padding: 20px;
  border-right: 1px solid black;
}

.page {
  padding: 20px;
}
</style>
