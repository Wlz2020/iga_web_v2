<script setup>
import ImgRemove from '@/assets/image/common/close.png'
</script>

<template>
  <div class="icon-box"><img :src="ImgRemove" alt="" srcset="" /></div>
</template>

<style scoped lang="less">
.icon-box {
  position: relative;
  z-index: 2;
  width: 20rem;

  img {
    object-fit: contain;
  }

  &:hover {
    cursor: pointer;
  }

  .icon {
    font-size: 30rem;
    color: #fff;
  }
}
</style>
