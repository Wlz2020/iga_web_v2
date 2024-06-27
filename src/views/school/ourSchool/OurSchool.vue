<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import { RouterName as RN } from '@/config/router'

import { goHome } from '@/helps/go-home'
import { toPage } from '@/helps/navigation'
import IconClose from '@/components/IconClose.vue'
import bus from '@/utils/bus'

import ImgIgaStu from '@/assets/image/common/iga_stu.png'

const addFilterBg = ref(false)
const instance = getCurrentInstance()

const currentSchool = ref('')
const { $router } = instance.proxy

function onGoHome() {
  goHome($router)
}

const circleRef = ref()
const otherRef = ref()
const usRef = ref()
const ukRef = ref()
const studioRef = ref()

function onMouseover(flag) {
  currentSchool.value = flag

  if (flag === 'other') {
    circleRef.value.style.transition = 'transform 1s ease-in-out'
    circleRef.value.style.transform = 'scale(2.8)'
    circleRef.value.style.transformOrigin = '50% 0%'

    usRef.value.style.transition = 'transform 1s ease-in-out'
    usRef.value.style.transform = 'scale(2.8) translate(150rem, 200rem)'

    ukRef.value.style.transition = 'transform 1s ease-in-out'
    ukRef.value.style.transform = 'scale(2.8) translate(-100rem, 300rem)'

    studioRef.value.style.transition = 'transform 1s ease-in-out'
    studioRef.value.style.transform = 'scale(2.8) translate(200rem, 400rem)'
  }

  if (flag === 'us') {
    circleRef.value.style.transition = 'transform 1s ease-in-out'
    circleRef.value.style.transform = 'scale(2.8)'
    circleRef.value.style.transformOrigin = '100% 50%'

    otherRef.value.style.transition = 'transform 1s ease-in-out'
    otherRef.value.style.transform = 'scale(2.8) translate(-200rem, -200rem)'

    ukRef.value.style.transition = 'transform 1s ease-in-out'
    ukRef.value.style.transform = 'scale(2.8) translate(-350rem, 0rem)'

    studioRef.value.style.transition = 'transform 1s ease-in-out'
    studioRef.value.style.transform = 'scale(2.8) translate(0rem, 200rem)'
  }

  if (flag === 'uk') {
    circleRef.value.style.transition = 'transform 1s ease-in-out'
    circleRef.value.style.transform = 'scale(2.8)'
    circleRef.value.style.transformOrigin = '0% 50%'

    otherRef.value.style.transition = 'transform 1s ease-in-out'
    otherRef.value.style.transform = 'scale(2.8) translate(200rem, -200rem)'

    usRef.value.style.transition = 'transform 1s ease-in-out'
    usRef.value.style.transform = 'scale(2.8) translate(350rem, 0rem)'

    studioRef.value.style.transition = 'transform 1s ease-in-out'
    studioRef.value.style.transform = 'scale(2.8) translate(350rem, 200rem)'
  }

  if (flag === 'studio') {
    circleRef.value.style.transition = 'transform 1s ease-in-out'
    circleRef.value.style.transform = 'scale(2.8)'
    circleRef.value.style.transformOrigin = '50% 100%'

    otherRef.value.style.transition = 'transform 1s ease-in-out'
    otherRef.value.style.transform = 'scale(2.8) translate(0rem, -450rem)'

    usRef.value.style.transition = 'transform 1s ease-in-out'
    usRef.value.style.transform = 'scale(2.8) translate(150rem, -250rem)'

    ukRef.value.style.transition = 'transform 1s ease-in-out'
    ukRef.value.style.transform = 'scale(2.8) translate(-100rem, -200rem)'
  }
}

function onMouseout() {
  currentSchool.value = null

  circleRef.value.style.transition = 'transform 1s ease-in-out'
  circleRef.value.style.transform = ''

  usRef.value.style.transform = ''
  otherRef.value.style.transform = ''
  ukRef.value.style.transform = ''
  studioRef.value.style.transform = ''
}

const mapMapper = new Map()
mapMapper.set('other', 'other')
mapMapper.set('us', 'us')
mapMapper.set('uk', 'uk')
mapMapper.set('studio', 'studio')

const routerNameMapper = new Map()
routerNameMapper.set('other', RN.OtherSchool)
routerNameMapper.set('us', RN.UsSchool)
routerNameMapper.set('uk', RN.UkSchool)
routerNameMapper.set('studio', RN.OurService)

function showTip(v) {
  return currentSchool.value === mapMapper.get(v)
}

function onClick(v) {
  const name = routerNameMapper.get(v)
  toPage($router, name)
}

onMounted(() => {
  bus.on('bus-show-menu', (v) => {
    addFilterBg.value = v
  })
})
</script>

<template>
  <div class="ani-fadeIn our-school-view en_font_bold" :class="{ filter: addFilterBg }">
    <IconClose @click="onGoHome()" class="close-icon"></IconClose>
    <div class="content">
      <div class="circle" ref="circleRef"></div>
      <div
        ref="otherRef"
        class="place-dot other-dot en_font_bold"
        @mouseover="onMouseover('other')"
        @mouseout="onMouseout('other')"
        @click="onClick('other')"
      >
        [OTHERS]
        <div v-show="showTip('other')" class="place-tip other-dot-tip en_font_bold ani-fadeIn">
          EXPLORE MORE
        </div>
      </div>

      <div
        class="place-dot us-dot en_font_bold"
        @mouseover="onMouseover('us')"
        @mouseout="onMouseout('us')"
        @click="onClick('us')"
        ref="usRef"
      >
        [U.S.]
        <div v-show="showTip('us')" class="place-tip other-dot-tip en_font_bold ani-fadeIn">
          EXPLORE MORE
        </div>
      </div>

      <div
        class="place-dot uk-dot en_font_bold"
        @mouseover="onMouseover('uk')"
        @mouseout="onMouseout('uk')"
        @click="onClick('uk')"
        ref="ukRef"
      >
        [U.K.]

        <div v-show="showTip('uk')" class="place-tip other-dot-tip en_font_bold ani-fadeIn">
          EXPLORE MORE
        </div>
      </div>

      <div
        class="place-dot logo-dot"
        @mouseover="onMouseover('studio')"
        @mouseout="onMouseout('studio')"
        @click="onClick('studio')"
        ref="studioRef"
      >
        <img :src="ImgIgaStu" alt="" srcset="" />
        <div v-show="showTip('studio')" class="place-tip other-dot-tip en_font_bold ani-fadeIn">
          EXPLORE MORE
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@modalWidth: 1200rem;
@modalHeight: 500rem;
@mainColor: #fff;

.our-school-view {
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
    justify-content: center;
    position: relative;

    .circle {
      width: @modalHeight;
      height: @modalHeight;
      border-radius: 100%;
      border: 1px solid @mainColor;
    }

    .place-dot {
      font-size: 21rem;
      color: @mainColor;
      position: absolute;

      &::before {
        content: '';
        position: absolute;
        top: 10rem;
        left: -25rem;
        width: 10rem;
        height: 10rem;
        border-radius: 100%;
        background-color: #fff;
      }

      &:hover {
        cursor: pointer;
      }
    }

    .other-dot {
      top: 70rem;
      left: 550rem;
    }

    .us-dot {
      top: 200rem;
      left: 730rem;
    }

    .uk-dot {
      top: 300rem;
      left: 450rem;
    }

    .logo-dot {
      top: 400rem;
      left: 700rem;
      width: calc(341rem / 2);
    }
  }
}

.place-tip {
  font-size: 12rem;
  color: #615757;
  text-decoration: underline;
  word-spacing: 5rem;
  transition: color 1s ease-in-out;

  &:hover {
    color: #fff;
  }
}
</style>
