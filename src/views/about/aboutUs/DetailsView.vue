<script setup>
import { ref, onMounted } from 'vue'
import bus from '@/utils/bus'

const showView = ref(false)
const showTip1 = ref(false)
const showTip2 = ref(false)
const showTip3 = ref(false)
const showTip4 = ref(false)

onMounted(() => {
  bus.on('bus-about-us-slide-active-index', (v) => {
    if (v === 1) {
      showView.value = true
    } else {
      showView.value = false
    }
  })
})
</script>
<template>
  <div class="content pingFang_Regular_font" :class="showView ? 'ani-fadeIn-slow' : ''">
    <div class="item">
      <template v-if="!showTip1">
        <div class="en_font_bold title" @click="showTip1 = true">Concentration</div>
      </template>
      <template v-if="showTip1">
        <div class="tip ani-fadeIn-fast" @click="showTip1 = false">
          IGA一直以来都致力于寻求游戏设计/交互/数字媒体/动画等跨学科方向的精进，搭配国际化的视野，先进的教学理念以及优质的产品服务去探索数字艺术教育的潜能与技术创新。
        </div>
      </template>
    </div>

    <div class="item">
      <template v-if="!showTip2">
        <div class="en_font_bold title" @click="showTip2 = true">Professional</div>
      </template>
      <template v-if="showTip2">
        <div class="tip ani-fadeIn-fast" @click="showTip2 = false">
          IGA的导师毕业于世界顶尖的游戏设计院校，有大量的作品集制作心得和游戏开发经验，以其高超的技术能力以及对学校录取特点的了解，助力学生成功获取梦校的OFFER。
        </div>
      </template>
    </div>

    <div class="item">
      <template v-if="!showTip3">
        <div class="en_font_bold title" @click="showTip3 = true">Resource</div>
      </template>
      <template v-if="showTip3">
        <div class="tip ani-fadeIn-fast" @click="showTip3 = false">
          IGA有着丰富的游戏行业资源，每年会举办游戏大咖分享会，游戏制作人讲座，国际性赛事Game
          Jam等活动，同时和众多海外游戏设计教授有着深度合作，定期开放海外教授课与夏校课程。
        </div>
      </template>
    </div>

    <div class="item">
      <template v-if="!showTip4">
        <div class="en_font_bold title" @click="showTip4 = true">Development</div>
      </template>
      <template v-if="showTip4">
        <div class="tip ani-fadeIn-fast" @click="showTip4 = false">
          IGA有着丰富的游戏行业资源，每年会举办游戏大咖分享会，游戏制作人讲座，国际性赛事Game
          Jam等活动，同时和众多海外游戏设计教授有着深度合作，定期开放海外教授课与夏校课程。
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: default;
  }

  .item {
    width: 22%;
    color: #fff;

    .title {
      text-align: center;
      font-size: 18rem;
      transition: color 0.8s ease-in-out;

      &:hover {
        cursor: pointer;
        color: #868686;
      }
    }

    .tip {
      line-height: 35rem;
      font-size: 14rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
