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

function onMouseover(v) {
  currentSchool.value = v
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
      <div class="circle"></div>
      <div
        class="place-dot other-dot en_font_bold"
        @mouseover="onMouseover('other')"
        @click="onClick('other')"
      >
        [OTHERS]
      </div>
      <div
        class="place-tip other-dot-tip en_font_bold ani-fadeIn"
        v-if="showTip('other')"
        @click="onClick('other')"
      >
        EXPLORE MORE
      </div>

      <div
        class="place-dot us-dot en_font_bold"
        @mouseover="onMouseover('us')"
        @click="onClick('us')"
      >
        [U.S.]
      </div>
      <div
        class="place-tip us-dot-tip en_font_bold ani-fadeIn"
        v-if="showTip('us')"
        @click="onClick('us')"
      >
        EXPLORE MORE
        <div class="line" v-if="showTip('us')"></div>
      </div>

      <div
        class="place-dot uk-dot en_font_bold"
        @mouseover="onMouseover('uk')"
        @click="onClick('uk')"
      >
        [U.K.]
      </div>
      <div
        class="place-tip uk-dot-tip en_font_bold ani-fadeIn"
        v-if="showTip('uk')"
        @click="onClick('uk')"
      >
        EXPLORE MORE
        <div class="line" v-if="showTip('uk')"></div>
      </div>

      <div class="place-dot logo-dot" @mouseover="onMouseover('studio')" @click="onClick('studio')">
        <img :src="ImgIgaStu" alt="" srcset="" />
      </div>
      <div
        class="place-tip studio-dot-tip en_font_bold ani-fadeIn"
        v-if="showTip('studio')"
        @click="onClick('studio')"
      >
        EXPLORE MORE
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
      border: 2rem solid @mainColor;
    }

    .place-dot {
      font-size: 16rem;
      color: @mainColor;
      position: absolute;

      &::before {
        content: '';
        position: absolute;
        top: 5.5rem;
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
      left: 750rem;
    }

    .uk-dot {
      top: 300rem;
      left: 450rem;
    }

    .logo-dot {
      top: 400rem;
      left: 700rem;
      width: calc(341rem / 2.5);
    }
  }
}

.place-tip {
  font-size: 16rem;
  color: @mainColor;
  position: absolute;
  border-bottom: 1px solid #fff;
  &:hover {
    cursor: pointer;
  }
}

.other-dot-tip {
  top: 67rem;
  left: 100rem;

  &::before {
    content: '';
    position: absolute;
    top: 5rem;
    right: -30rem;
    width: 16rem;
    height: 16rem;
    background-color: #fff;
  }

  &::after {
    content: '';
    position: absolute;
    top: 13rem;
    left: 178rem;
    width: 225rem;
    height: 1rem;
    background-color: #fff;
  }
}

.us-dot-tip {
  top: 107rem;
  right: 100rem;

  &::before {
    content: '';
    position: absolute;
    top: 5rem;
    left: -30rem;
    width: 16rem;
    height: 16rem;
    background-color: #fff;
  }

  &::after {
    content: '';
    position: absolute;
    top: 13rem;
    right: 178rem;
    width: 45rem;
    height: 1rem;
    background-color: #fff;
  }

  .line {
    position: absolute;
    width: 110rem;
    height: 1rem;
    background-color: #fff;
    transform: rotate(-43deg);
    left: -192rem;
    top: 51rem;
  }
}

.uk-dot-tip {
  top: 360rem;
  left: 100rem;

  &::before {
    content: '';
    position: absolute;
    top: 5rem;
    right: -30rem;
    width: 16rem;
    height: 16rem;
    background-color: #fff;
  }

  &::after {
    content: '';
    position: absolute;
    top: 13rem;
    left: 178rem;
    width: 60rem;
    height: 1rem;
    background-color: #fff;
  }

  .line {
    position: absolute;
    width: 100rem;
    height: 1rem;
    background-color: #fff;
    transform: rotate(-34deg);
    left: 229rem;
    top: -15rem;
  }
}

.studio-dot-tip {
  top: 398rem;
  right: 100rem;

  &::before {
    content: '';
    position: absolute;
    top: 5rem;
    left: -30rem;
    width: 16rem;
    height: 16rem;
    background-color: #fff;
  }

  &::after {
    content: '';
    position: absolute;
    top: 13rem;
    right: 168rem;
    width: 80rem;
    height: 1rem;
    background-color: #fff;
  }
}
</style>
