<script setup>
import { toPage } from '@/helps/navigation'
import { RouterName as RN } from '@/config/router'

const props = defineProps({
  name: { type: String, required: true }
})
</script>

<template>
  <div class="address-wrap">
    <div class="p-relative address-view-wrap">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="dot en_font_bold">
        <div class="dot-span"></div>
        <div class="name">[{{ props.name }}]</div>
      </div>
      <div class="en_font_bold direction n-direction">N</div>
      <div class="en_font_bold direction s-direction">S</div>
      <div class="en_font_bold direction w-direction">W</div>
      <div class="en_font_bold direction e-direction">E</div>
    </div>

    <div class="en_font_bold back-map" @click="toPage($router, RN.OurSchool)">BACK TO THE MAP</div>
  </div>
</template>

<style scoped lang="less">
@borderColor: #fff;

.address-wrap {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.address-view-wrap {
  position: relative;
  width: 280rem;
  height: 280rem;

  &:hover {
    cursor: pointer;
  }

  .bar {
    width: 36rem;
    height: 36rem;
    position: absolute;
    border: 1px solid transparent;
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
    border: 1px solid @borderColor;
    position: absolute;
    left: calc(50% - 105rem - 36rem);
    top: calc(50% - 105rem - 36rem);
  }

  .line1 {
    position: absolute;
    width: 105rem;
    height: 210rem;
    border-right: 1px solid @borderColor;
    position: absolute;
    left: calc(50% - 105rem);
    top: calc(50% - 105rem);
  }

  .line2 {
    position: absolute;
    width: 210rem;
    height: 105rem;
    border-bottom: 1px solid @borderColor;
    position: absolute;
    position: absolute;
    left: calc(50% - 105rem);
    top: calc(50% - 105rem);
  }

  .dot {
    width: 100%;
    position: absolute;
    left: 0;
    font-size: 21rem;
    top: 45%;
    color: @borderColor;
    display: flex;
    justify-content: center;
    align-items: center;

    .dot-span {
      width: 6rem;
      height: 6rem;
      border-radius: 100%;
      background-color: #fff;
    }

    .name {
      margin-left: 10rem;
    }
  }

  .direction {
    position: absolute;
    font-size: 16rem;
    color: @borderColor;
  }

  .n-direction {
    top: -10rem;
    right: calc(36rem + 105rem - 10rem);
  }

  .s-direction {
    bottom: -14rem;
    right: calc(36rem + 105rem - 10rem);
  }

  .w-direction {
    top: calc(36rem + 105rem - 10rem);
    left: -8.5rem;
  }

  .e-direction {
    top: calc(36rem + 105rem - 10rem);
    right: -4.5rem;
  }
}

.back-map {
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 18rem;
  border-bottom: 1px solid #fff;

  &:hover {
    cursor: pointer;
    opacity: 0.4;
  }
}
</style>
