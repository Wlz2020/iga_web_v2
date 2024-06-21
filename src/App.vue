<script setup>
import MenuView from './components/MenuView.vue'
</script>
<template>
  <div class="page-layout-view mainBgColor">
    <RouterView />
    <MenuView />
  </div>
</template>

<style scoped>
.page-layout-view {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
