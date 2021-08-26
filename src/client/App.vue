<template>
  <login>
    <connection />
    <div class="page">
      <router-view />
    </div>
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
  background-color: $slr__clr-dark-blue;
  font-family: 'Inter', sans-serif;
  color: $slr__clr-white;
  @extend .r-s12-lh15
}

.page {
  flex: none;
  box-sizing: border-box;
  width: 400px;
  padding: 30px;
}
</style>
