<script setup>
import { ref, onMounted } from 'vue'
import bus from '@/utils/bus'

const showView = ref(false)

onMounted(() => {
  bus.on('bus-about-us-slide-active-index', (v) => {
    if (v === 0) {
      showView.value = true
    } else {
      showView.value = false
    }
  })
})
</script>
<template>
  <div class="content" :class="showView ? 'ani-fadeIn-slow' : ''">
    <div class="en_font_bold title">[ABOUT US]</div>
    <div class="pingFang_Regular_font">
      IGA
      Studio是业内首家专注在数字媒体领域的作品集机构，我们通过作品集辅导，留学规划，技术课程和背景提升，助力学生进入全球顶尖的数字领域专业学府。另外IGA也是一家游戏公司，一直致力于研发属于自己品牌的电子游戏，交互等电子科技项目，希望通过我们的作品让大家能够了解到不一样的游戏。
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  margin: 0 auto;
  margin-top: 68rem;
  width: 480rem;
  line-height: 35rem;
  font-size: 16rem;

  .title {
    font-size: 18rem;
    margin-bottom: 70rem;
    text-align: center;
  }
}
</style>
