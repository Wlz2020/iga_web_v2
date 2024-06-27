<script setup>
import bus from '@/utils/bus'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { ref, getCurrentInstance, onMounted } from 'vue'
import { goHome } from '@/helps/go-home'
import IconClose from '@/components/IconClose.vue'
import SummaryView from './SummaryView.vue'
import DetailsView from './DetailsView.vue'

const modules = [Mousewheel, Pagination]
const currentIndex = ref(0)

const onSlideChange = (slideRef) => {
  const index = slideRef.activeIndex
  currentIndex.value = index
  bus.emit('bus-about-us-slide-active-index', index)
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
        <SummaryView />
      </swiper-slide>
      <swiper-slide key="swiperIndex2" class="slide-item">
        <DetailsView />
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
</style>
