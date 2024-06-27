<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'

import bus from '@/utils/bus'
import { goHome } from '@/helps/go-home'

import IconClose from '@/components/IconClose.vue'

import ImgQr1 from '@/assets/image/common/qr_1.png'
import ImgQr2 from '@/assets/image/common/qr_2.png'

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
  <div>
    <div class="about-us-view ani-fadeIn" :class="{ filter: addFilterBg }">
      <IconClose @click="onGoHome()" class="close-icon"></IconClose>
      <div class="content">
        <div class="en_font_bold left_wrap">[CONTACT US]</div>

        <div class="middle_wrap">
          <div class="top">
            <div class="name en_font_bold">[IGA - SHANGHAI]</div>
            <div class="desc pingFang_Regular_font">上海市徐汇区吴兴路277号 吴界808</div>
          </div>
          <div class="bottom">
            <div class="name en_font_bold">[IGA -SHENZHEN]</div>
            <div class="desc pingFang_Regular_font">
              广东省深圳市南山区南海大道1031号万海大厦B座701、703、704
            </div>
          </div>
        </div>

        <div class="right_wrap">
          <div class="img-contain img-contain1">
            <img :src="ImgQr1" alt="" />
          </div>
          <div class="img-contain img-contain2">
            <img :src="ImgQr2" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@modalWidth: 1200rem;
@modalHeight: 480rem;

.about-us-view {
  position: absolute;
  top: calc(50% - (@modalHeight / 2));
  left: calc(50% - (@modalWidth / 2));
  width: @modalWidth;
  height: @modalHeight;

  .close-icon {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .left_wrap {
      font-size: 18rem;
    }

    .middle_wrap {
      font-size: 18rem;

      .top {
        margin-bottom: 111rem;
      }

      .name {
        margin-bottom: 30rem;
      }
    }

    .right_wrap {
      display: flex;

      .img-contain {
        width: 130rem;
        height: 130rem;
      }

      .img-contain2 {
        margin-left: 48rem;
      }
    }
  }
}
</style>
