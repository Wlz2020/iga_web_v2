<script setup>
import { ref, onMounted } from 'vue'
import AddressView from '../components/AddressView.vue'

import bus from '@/utils/bus'

const addFilterBg = ref(false)

onMounted(() => {
  bus.on('bus-show-menu', (v) => {
    addFilterBg.value = v
  })
})
</script>

<template>
  <div class="ani-fadeIn our-school-view en_font_bold" :class="{ filter: addFilterBg }">
    <div class="content">
      <div class="left">
        <AddressView :name="'OTHER'" />
      </div>
      <div class="middle">middle</div>
      <div class="right">right</div>
    </div>
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
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid yellow;

    .left {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .middle {
      flex: 1;
      height: 100%;
      border: 1px solid red;
    }
    .right {
      flex: 1;
      height: 100%;
      border: 1px solid red;
    }
  }
}
</style>
