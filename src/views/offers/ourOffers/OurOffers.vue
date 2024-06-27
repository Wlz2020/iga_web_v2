<script setup>
import bus from '@/utils/bus'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { ref, getCurrentInstance, onMounted } from 'vue'
import { goHome } from '@/helps/go-home'
import IconClose from '@/components/IconClose.vue'
import OfferPreview from '@/components/OfferPreview.vue'

import USOfferPreview from './components/USOfferPreview.vue'
import UKOfferPreview from './components/UKOfferPreview.vue'
import OtherOfferPreview from './components/OtherOfferPreview.vue'

const modules = [Mousewheel, Pagination]
const currentIndex = ref(0)

const onSlideChange = (slideRef) => {
  const index = slideRef.activeIndex
  currentIndex.value = index
  bus.emit('bus-offers-slide-active-index', index)
}

const instance = getCurrentInstance()
function onGoHome() {
  const { $router } = instance.proxy
  goHome($router)
}

const addFilterBg = ref(false)

onMounted(() => {
  bus.on('bus-show-menu', (v) => {
    addFilterBg.value = v
  })
})
</script>

<template>
  <div class="swiper-box ani-fadeIn" :class="{ filter6px: addFilterBg }">
    <IconClose @click="onGoHome()" class="close-icon"></IconClose>
    <swiper
      :modules="modules"
      class="swiper-container"
      :slides-per-view="1"
      :speed="400"
      :mousewheel="true"
      :grabCursor="true"
      direction="vertical"
      @slideChange="onSlideChange"
    >
      <swiper-slide key="swiperIndex1" class="slide-item">
        <OfferPreview class="offers-wrap"></OfferPreview>
      </swiper-slide>
      <swiper-slide key="swiperIndex2" class="slide-item">
        <USOfferPreview></USOfferPreview>
      </swiper-slide>
      <swiper-slide key="swiperIndex3" class="slide-item">
        <UKOfferPreview></UKOfferPreview>
      </swiper-slide>
      <swiper-slide key="swiperIndex4" class="slide-item">
        <OtherOfferPreview></OtherOfferPreview>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped lang="less">
@modalWidth: 1200rem;
@modalHeight: 500rem;

.swiper-box {
  position: absolute;
  top: calc(50% - (@modalHeight / 2));
  left: calc(50% - (@modalWidth / 2));
  width: @modalWidth;
  height: @modalHeight;
  display: flex;
  align-items: center;

  .close-icon {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }

  .slide-item {
    position: relative;
  }
}

.swiper-container {
  width: 100%;
  height: 100%;

  :deep(.swiper-pagination) {
    top: unset;
    bottom: 2%;

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

.offers-wrap {
  position: absolute;
  top: 20%;
  left: 20%;

  :deep(.offer-preview-view) {
    transform: scale(1.4);
  }
}

.tip {
  position: absolute;
  bottom: 0;
  width: 100%;
  font-family: 'en_font_bold';
  font-size: 20rem;
  color: #fff;
  opacity: 0.6;
  text-align: center;

  .first-arrow {
    margin-bottom: -20rem;
  }
}
</style>
