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
  <div class="detail-view en_font_bold">
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
          <div class="content one-content">
            <div class="name">{{ model.one.name }}</div>
            <div class="sub-name">{{ model.one.subName }}</div>
            <div class="time">{{ model.one.time }}</div>
            <div class="school">{{ model.one.school }}</div>
            <div class="desc">{{ model.one.desc }}</div>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-item tow-slide-item">
          <div class="left">
            <div>{{ model.two.desc }}</div>
          </div>

          <div class="right">
            <div class="right-img1">
              <img :src="model.two.list[0]" />
            </div>
            <div class="right-img2">
              <img :src="model.two.list[1]" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-item three-slide-item">
          <template v-if="model.three.length === 1">
            <div class="three-one-bg-img">
              <img :src="model.three[0]" />
            </div>
          </template>

          <template v-if="model.three.length === 2">
            <div class="three-two-bg-img">
              <img :src="model.three[0]" />
            </div>
            <div class="three-two-bg-img">
              <img :src="model.three[1]" />
            </div>
          </template>

          <template v-if="model.three.length === 3">
            <div class="three-three-bg-img">
              <img :src="model.three[0]" />
            </div>
            <div class="three-three-bg-img">
              <img :src="model.three[1]" />
            </div>
            <div class="three-three-bg-img">
              <img :src="model.three[2]" />
            </div>
          </template>

          <template v-if="model.three.length === 4">
            <div class="three-four-bg-img">
              <img :src="model.three[0]" />
            </div>
            <div class="three-four-bg-img">
              <img :src="model.three[1]" />
            </div>
            <div class="three-four-bg-img">
              <img :src="model.three[2]" />
            </div>
            <div class="three-four-bg-img">
              <img :src="model.three[3]" />
            </div>
          </template>
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
      &:hover {
        &::before {
          left: -34rem;
          font-size: 15rem;
        }
      }

      .icon {
        font-size: 35rem;
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
  }

  .one-content {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 80rem;
    .name {
      font-size: 40rem;
    }

    .sub-name {
      font-size: 25rem;
    }

    .time {
      margin-top: 70rem;
      font-size: 20rem;
    }

    .school {
      font-size: 20rem;
    }

    .desc {
      font-size: 20rem;
    }
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

.tow-slide-item {
  display: flex;

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 150rem;
    font-size: 15rem;
    line-height: 35rem;
    width: 50%;
  }

  .right {
    width: 50%;
    display: flex;
    flex-direction: column;

    .right-img1 {
      flex: 1;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .right-img2 {
      flex: 1;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

.three-slide-item {
  display: flex;
  flex-wrap: wrap;
  .three-one-bg-img {
    width: 100vw;
  }

  .three-two-bg-img {
    width: calc(100vw / 2);
  }

  .three-three-bg-img {
    width: calc(100vw / 3);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .three-four-bg-img {
    width: calc(100vw / 2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
