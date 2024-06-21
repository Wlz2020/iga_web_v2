<script setup>
import { ref } from 'vue'
import ImgArrow from '@/assets/image/common/arrow.png'

const showTip = ref(false)

function onMouseover(flag) {
  showTip.value = !!flag
}
</script>

<template>
  <div class="service-preview-view en_font_bold">
    <div class="list" @mouseover="onMouseover(1)" @mouseleave="onMouseover(0)">
      <div class="item">
        <div class="name">SERVICE&nbsp;&nbsp;&nbsp;LIST</div>
        <div class="more ani-fadeIn-fast" v-if="showTip">EXPLORE&nbsp;&nbsp;&nbsp;MORE</div>
      </div>
      <div class="item item-icon" v-for="item in 5" :key="item">
        <div class="icon ani-fadeIn-fast" v-if="showTip">
          <img :src="ImgArrow" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.service-preview-view {
  .list {
    &:hover {
      cursor: pointer;
    }

    .item {
      font-size: 15rem;
      width: 400rem;
      height: 40rem;
      border-bottom: 1px solid #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .icon {
        width: 25rem;
      }
    }

    .item-icon {
      justify-content: flex-end;
    }
  }
}
</style>
