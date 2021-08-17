<template>
  <connection class="main"/>

  <router-view class="page"/>
</template>

<script>
import Connection from '@/client/views/Connection'

export default {
  components: {
    Connection
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
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
}

.main {
  flex: 1 0 57%;
}
</style>
