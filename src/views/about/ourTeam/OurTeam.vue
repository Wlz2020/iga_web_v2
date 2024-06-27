<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { goHome } from '@/helps/go-home'

import IconClose from '@/components/IconClose.vue'
import bus from '@/utils/bus'

import SwiperSlideView1 from './SwiperSlideView1.vue'
import SwiperSlideView2 from './SwiperSlideView2.vue'
import SwiperSlideView3 from './SwiperSlideView3.vue'

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
const modules = [Mousewheel, Pagination]

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
  <div class="ani-fadeIn our-team-view en_font_bold" :class="{ filter: addFilterBg }">
    <IconClose @click="onGoHome()" class="close-icon"></IconClose>
    <div class="content">
      <div class="swiper-box">
        <swiper
          :modules="modules"
          class="swiper-container"
          :slides-per-view="1"
          :speed="400"
          :grabCursor="true"
          :mousewheel="true"
          @swiper="onSwiper"
          direction="vertical"
          @slideChange="onSlideChange"
        >
          <swiper-slide class="slide-item"><SwiperSlideView1 /> </swiper-slide>
          <swiper-slide class="slide-item"><SwiperSlideView2 /></swiper-slide>
          <swiper-slide class="slide-item"><SwiperSlideView3 /></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@modalWidth: 1500rem;
@modalHeight: 600rem;

.our-team-view {
  position: absolute;
  top: calc(50% - (@modalHeight / 2));
  left: calc(50% - (@modalWidth / 2));
  width: @modalWidth;
  height: @modalHeight;
  display: flex;
  align-items: center;

  .close-icon {
    position: absolute;
    top: -8rem;
    right: 0;
    z-index: 2;
  }

  .content {
    width: 100%;
    height: 100%;
    position: relative;
    .swiper-box {
      flex: 1;
      height: 100%;
    }
  }
}

.swiper-container {
  width: 100%;
  height: 100%;

  :deep(.swiper-pagination) {
    top: unset;
    bottom: -3%;

    .swiper-pagination-bullet {
      opacity: 1;
      width: 10rem;
      height: 2rem;
      border-radius: 0%;
      background-color: #fff;
      opacity: 0.5;
    }

    .swiper-pagination-bullet-active {
      opacity: 1;
      height: 4rem;
    }
  }
}

.slide-item {
  // border: 1px solid blue;
}
</style>
