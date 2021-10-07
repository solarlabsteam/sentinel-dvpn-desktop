<template>
  <root>
    <connection />
    <div class="page">
      <router-view />
    </div>
  </root>
</template>

<script>
import Connection from '@/client/pages/Connection'
import Root from '@/client/pages/Root'

export default {
  components: {
    Connection,
    Root
  }
}
</script>

<style lang="scss">
@import "@/client/styles/index.scss";

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
  @include font-template(12px, 15px);
}

.page {
  flex: none;
  overflow-x: auto;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  width: 400px;
  height: 100%;
}
</style>
