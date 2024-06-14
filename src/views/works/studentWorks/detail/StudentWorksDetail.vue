<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import IconClose from '@/components/IconClose.vue'

import { studentWorksList } from '../hook/data'

const modules = [Mousewheel, Pagination]

const props = defineProps({
  id: { type: Number, required: true }
})

const emit = defineEmits(['onCloseDetail'])

const model = ref()

function initData() {
  const id = props.id
  const res = studentWorksList.find((item) => item.id == id)
  model.value = res
  console.log('model.value=', model.value)
}

initData()

function onClick() {
  emit('onCloseDetail')
}
</script>

<template>
  <div class="detail-view">
    <IconClose @click="onClick" class="close-icon"></IconClose>

    <div class="swiper-box">
      <swiper
        :modules="modules"
        class="swiper-container"
        :slides-per-view="1"
        :grabCursor="true"
        :pagination="{ clickable: true }"
        :mousewheel="true"
        :loop="true"
        direction="vertical"
      >
        <swiper-slide class="slide-item">
          <div class="bg-img">
            <img :src="model.one.img" />
          </div>
          <div class="content">
            {{ model.one }}
          </div>
        </swiper-slide>
        <swiper-slide class="slide-item">
          <div class="bg-img">
            <img :src="model.two.img" />
          </div>
          <div class="content">
            {{ model.two }}
          </div>
        </swiper-slide>
        <swiper-slide class="slide-item">
          <div class="bg-img">
            <img :src="model.three.img" />
          </div>
          <div class="content">
            {{ model.three }}
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped lang="less">
.detail-view {
  position: relative;
  background-color: #000;
  height: 100vh;
  z-index: 3;

  .close-icon {
    position: absolute;
    top: 10%;
    right: 5%;

    &:deep {
      .icon {
        font-size: 40rem;
        color: #fff;
      }
    }
  }
}

.swiper-box {
  height: 100%;
}

.swiper-container {
  width: 100%;
  height: 100%;

  :deep(.swiper-pagination) {
    top: unset;
    right: 5%;
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

.slide-item {
  position: relative;

  .content {
    position: relative;
    color: #fff;
    border: 1px solid red;
  }

  .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    img {
      object-fit: cover;
    }
  }
}
</style>
