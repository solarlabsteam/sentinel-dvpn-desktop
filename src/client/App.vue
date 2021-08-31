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
  overflow: auto;
  height: 100vh;
  background-color: $slr__clr-dark-blue;
  font-family: 'Inter', sans-serif;
  color: $slr__clr-white;
  @extend .r-s12-lh15
}

.page {
  flex: none;
  overflow-x: auto;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  width: 400px;
  height: 100%;
}
</style>
