<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'

import { goHome } from '@/helps/go-home'
import IconClose from '@/components/IconClose.vue'
import bus from '@/utils/bus'

const addFilterBg = ref(false)
const instance = getCurrentInstance()

function onGoHome() {
  const { $router } = instance.proxy
  goHome($router)
}

onMounted(() => {
  bus.on('bus-show-menu', (v) => {
    addFilterBg.value = v
  })
})
</script>

<template>
  <div class="ani-fadeIn our-school-view en_font_bold" :class="{ filter: addFilterBg }">
    <IconClose @click="onGoHome()" class="close-icon"></IconClose>
    <div class="content">us====</div>
  </div>
</template>

<style scoped lang="less">
@modalWidth: 1200rem;
@modalHeight: 500rem;

.our-school-view {
  position: absolute;
  top: calc(50% - (@modalHeight / 2));
  left: calc(50% - (@modalWidth / 2));
  width: @modalWidth;
  height: @modalHeight;
  display: flex;
  align-items: center;
  border: 1px solid red;

  .close-icon {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }

  .content {
    width: 100%;
    height: 100%;
    border: 1px solid yellow;
  }
}
</style>
