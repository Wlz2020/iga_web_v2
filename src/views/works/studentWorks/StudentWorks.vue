<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { goHome } from '@/helps/go-home'

import IconClose from '@/components/IconClose.vue'
import StudentWorksDetail from './detail/StudentWorksDetail.vue'
import bus from '@/utils/bus'

import { studentWorksList, levels } from './hook/data'

const onSwiper = (swiper) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}

const modules = [Mousewheel, Pagination]

const addFilterBg = ref(false)

const swiperList = ref([])

const reallySwiperList = ref(studentWorksList)

const currentLevel = ref(levels.All)

const currentWork = ref()

const showDetail = ref(false)

function generateSwiperItems(list = []) {
  const maxPerItem = 6
  const swiperItems = []

  for (let i = 0; i < list.length; i += maxPerItem) {
    const swiperItem = list.slice(i, i + maxPerItem)
    swiperItems.push(swiperItem)
  }

  return swiperItems
}

function initDataList() {
  swiperList.value = generateSwiperItems(reallySwiperList.value)
  console.log(swiperList.value)
}

function onFilterTeacherByLevel(level) {
  currentLevel.value = level

  if (level === levels.All) {
    reallySwiperList.value = studentWorksList
    initDataList()
    return
  }

  reallySwiperList.value = studentWorksList.filter((item) => item.level === level)
  initDataList()
}

const instance = getCurrentInstance()
const { $router } = instance.proxy

function onGoHome() {
  goHome($router)
}

function onMouseover(item) {
  currentWork.value = item
}

function onClick(item) {
  currentWork.value = item
  showDetail.value = true
}

onMounted(() => {
  initDataList()

  bus.on('bus-show-menu', (v) => {
    addFilterBg.value = v
  })
})
</script>
<template>
  <div class="our-team-view en_font_bold" :class="{ filter: addFilterBg }">
    <IconClose @click="onGoHome()" class="close-icon"></IconClose>
    <div class="content">
      <div class="filter-box">
        <div class="name">FILTER</div>
        <div class="filter-list">
          <div
            class="item"
            :class="{ active: currentLevel === level }"
            @click="onFilterTeacherByLevel(level)"
            v-for="level in levels"
            :key="level"
          >
            {{ level }}
          </div>
        </div>
      </div>
      <div class="swiper-box">
        <swiper
          :modules="modules"
          class="swiper-container"
          :slides-per-view="1"
          :grabCursor="true"
          :pagination="{ clickable: true }"
          :mousewheel="true"
          :loop="true"
          @swiper="onSwiper"
          direction="vertical"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            v-for="(swiperItem, swiperIndex) in swiperList"
            :key="swiperIndex"
            class="slide-item"
          >
            <div
              v-for="(teacherItem, teacherIndex) in swiperItem"
              :key="teacherIndex"
              @mouseover="onMouseover(teacherItem)"
              @mouseleave="onMouseover({})"
              @click="onClick(teacherItem)"
              class="teacher-info-item-box"
            >
              <div class="teacher-info-item">
                <img :src="teacherItem.img" alt="" srcset="" />
              </div>

              <div
                class="teacher-info-item-tips ani-fadeIn-fast"
                v-if="teacherItem.id === currentWork?.id"
              >
                <div>{{ teacherItem.name }}</div>
                <div>{{ teacherItem.subName }}</div>
                <!-- <div>{{ teacherItem.time }}</div>
                <div>{{ teacherItem.school }}</div> -->
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>

  <div v-if="showDetail">
    <StudentWorksDetail :id="currentWork.id" @onCloseDetail="showDetail = false" />
  </div>
</template>

<style scoped lang="less">
@modalWidth: 1200rem;
@modalHeight: 500rem;

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
    top: 0;
    right: 0;
    z-index: 2;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;

    .filter-box {
      flex: 1;
      height: 100%;
      margin-top: 30rem;

      .name {
        font-size: 22rem;
        color: #fff;
        font-weight: bold;
      }

      .filter-list {
        margin-top: 20rem;
        .item {
          font-size: 16rem;
          margin-bottom: 16rem;
          &:hover {
            color: #fff;
            cursor: pointer;
          }
        }

        .active {
          font-size: 18rem;
          color: #fff;
        }
      }
    }

    .swiper-box {
      flex: 7;
      height: 100%;
    }
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

.slide-item {
  display: flex;
  flex-wrap: wrap;
}

.teacher-info-item-box {
  width: 32.5%;
  display: flex;
  align-items: flex-start;
  padding-top: 40rem;
  padding-right: 26rem;
  position: relative;

  &:hover {
    cursor: pointer;
  }
}

.teacher-info-item {
  height: calc(243rem / 1.3);

  img {
    object-fit: cover;
  }
}

.teacher-info-item-tips {
  position: absolute;
  width: 100%;
  height: calc(243rem / 1.3);
  width: 93%;
  background-color: #000;
  line-height: 30rem;
  font-size: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
