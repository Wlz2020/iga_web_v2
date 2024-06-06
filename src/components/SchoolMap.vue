<script setup>
import ImgIgaStu from '@/assets/image/common/iga_stu.png'
</script>

<template>
  <div class="p-relative school-map">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="cricle"></div>
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="dot"></div>
    <div class="studio-dot"></div>
    <div class="img-container">
      <img :src="ImgIgaStu" alt="" srcset="" />
    </div>
    <div class="en_font_bold direction ani-fadeOutInOut n-direction">N</div>
    <div class="en_font_bold direction ani-fadeOutInOut s-direction">S</div>
    <div class="en_font_bold direction ani-fadeOutInOut w-direction">W</div>
    <div class="en_font_bold direction ani-fadeOutInOut e-direction">E</div>
  </div>
</template>

<style scoped lang="less">
@borderColor: #fff;

.school-map {
  border: 1rem solid transparent;

  &:hover {
    cursor: pointer;
  }

  .bar {
    width: 36rem;
    height: 36rem;
    position: absolute;
    border: 1rem solid transparent;
    &:nth-child(1) {
      top: 0;
      left: 0;
      border-top-color: @borderColor;
      border-left-color: @borderColor;
    }
    &:nth-child(2) {
      top: 0;
      right: 0;
      border-top-color: @borderColor;
      border-right-color: @borderColor;
    }
    &:nth-child(3) {
      bottom: 0;
      left: 0;
      border-bottom-color: @borderColor;
      border-left-color: @borderColor;
    }
    &:nth-child(4) {
      bottom: 0;
      right: 0;
      border-bottom-color: @borderColor;
      border-right-color: @borderColor;
    }
  }

  .cricle {
    width: 210rem;
    height: 210rem;
    margin: 36rem;
    border-radius: 100%;
    border: 1rem solid @borderColor;
  }

  .line1 {
    position: absolute;
    width: 105rem;
    height: 210rem;
    border-right: 1rem solid @borderColor;
    position: absolute;
    top: 36rem;
    left: 36rem;
  }

  .line2 {
    position: absolute;
    width: 210rem;
    height: 105rem;
    border-bottom: 1rem solid @borderColor;
    position: absolute;
    top: 36rem;
    right: 36rem;
  }

  .dot {
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
    background-color: @borderColor;
    position: absolute;
    top: calc(36rem + 105rem - 2.8rem);
    right: calc(36rem + 105rem - 2.8rem);
  }

  .studio-dot {
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
    background-color: @borderColor;
    position: absolute;
    top: 198rem;
    left: 183rem;
  }

  .img-container {
    position: absolute;
    top: 218rem;
    left: 215rem;
    width: calc(341rem / 3);
  }

  .direction {
    position: absolute;
    font-size: 16rem;
    color: @borderColor;
  }

  .n-direction {
    top: -10rem;
    right: calc(36rem + 105rem - 6rem);
  }

  .s-direction {
    bottom: -14rem;
    right: calc(36rem + 105rem - 6rem);
  }

  .w-direction {
    top: calc(36rem + 105rem - 6rem);
    left: -8.5rem;
  }

  .e-direction {
    top: calc(36rem + 105rem - 6rem);
    right: -4.5rem;
  }
}
</style>
