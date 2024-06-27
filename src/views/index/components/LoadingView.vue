<script setup>
import { FILE_RESOURCE_IP } from '@/consts/file_resource_ip'
import { defineEmits } from 'vue'

const emit = defineEmits(['close-loading-view'])

function onClick() {
  emit('close-loading-view')
}
</script>

<template>
  <div class="load-wrap">
    <div class="size100 load-img">
      <img :src="FILE_RESOURCE_IP + '/files/images/common/iga_web_loading.gif'" />
    </div>

    <div class="font text-wrap en_font_bold">
      <span class="animate__animated animate__zoomIn" @click="onClick">START YOUR NEXT LEVEL</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.load-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .load-img {
    img {
      object-fit: contain;
    }
  }

  .text-wrap {
    position: absolute;
    text-align: center;
    width: 100%;
    bottom: 3vh;

    span {
      position: relative;
      display: inline-block;
      padding: 20rem;
      font-size: 12rem;
      font-weight: bold;
      color: #454545;
      word-spacing: 4rem;
      transition: color 0.5s ease-in-out;

      &:hover {
        &::before {
          content: '+';
          position: absolute;
          left: 0;
        }

        &::after {
          content: '+';
          position: absolute;
          right: 0;
        }

        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
