<script setup>
import { onMounted, ref } from 'vue'
import bus from '@/utils/bus'
import { FILE_RESOURCE_IP } from '@/consts/file_resource_ip'

const addFilterBg = ref(false)
onMounted(() => {
  bus.on('bus-show-menu', (v) => {
    addFilterBg.value = v
  })
})
</script>

<template>
  <div class="main-view" :class="{ filter: addFilterBg }">
    <video class="video" :autoplay="true" :loop="true" :controls="false" :muted="true">
      <source :src="FILE_RESOURCE_IP + '/files/videos/iga_video.mp4'" type="video/mp4" />
    </video>
  </div>
</template>

<style scoped lang="less">
.main-view {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .video {
    width: 100%;
    height: 100%;
  }
}
</style>
