<script setup>
import { onMounted } from 'vue'
import bus from '@/utils/bus'
import { FILE_RESOURCE_IP } from '@/consts/file_resource_ip'

import { teamList } from './hook/data'

onMounted(() => {
  bus.on('bus-about-us-slide-active-index', (v) => {
    console.log(v, teamList)
  })
})
</script>
<template>
  <div class="swiper-slide-item">
    <div class="list list1">
      <div class="line1">
        <span class="span1 pingFang_Regular_font">[OUR TEAM]</span>-<span
          class="span2 pingFang_Regular_font"
          >文书团队</span
        >
      </div>
      <div class="img-wrap">
        <img :src="FILE_RESOURCE_IP + teamList[16].img" />
      </div>
      <div class="line3">
        <div class="name pingFang_Regular_font">{{ teamList[16].name }}</div>
        <div class="position pingFang_Regular_font">{{ teamList[16].position }}</div>
      </div>
    </div>
    <div class="list list2">
      <div class="line1">&nbsp;</div>
      <div class="img-wrap">
        <img :src="FILE_RESOURCE_IP + teamList[17].img" />
      </div>
      <div class="line3">
        <div class="name pingFang_Regular_font">{{ teamList[17].name }}</div>
        <div class="position pingFang_Regular_font">{{ teamList[17].position }}</div>
      </div>
    </div>
    <div class="list list3">
      <div class="line1">&nbsp;</div>
      <div class="img-wrap">
        <img :src="FILE_RESOURCE_IP + teamList[18].img" />
      </div>
      <div class="line3">
        <div class="name pingFang_Regular_font">{{ teamList[18].name }}</div>
        <div class="position pingFang_Regular_font">{{ teamList[18].position }}</div>
      </div>
    </div>
    <div class="list list4">
      <div class="line1">&nbsp;</div>
      <div class="img-wrap">
        <img :src="FILE_RESOURCE_IP + teamList[19].img" />
      </div>
      <div class="line3">
        <div class="name pingFang_Regular_font">{{ teamList[19].name }}</div>
        <div class="position pingFang_Regular_font">{{ teamList[19].position }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
img {
  object-fit: cover;
}

.swiper-slide-item {
  height: 100%;
  display: flex;

  .list {
    width: 25%;
  }

  .list1,
  .list2,
  .list3,
  .list4 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .line1 {
      font-size: 18rem;

      .span1 {
        margin-right: 30rem;
      }
      .span2 {
        margin-left: 30rem;
      }
    }

    .img-wrap {
      width: 227rem;
      height: 264rem;
    }

    .line3 {
      .name {
        font-weight: bold;
        text-align: center;
        font-size: 24rem;
      }

      .position {
        margin-top: 3rem;
        text-align: center;
        font-size: 18rem;
      }
    }
  }

  .list2,
  .list3,
  .list4 {
    margin-top: 124rem;
    justify-content: unset;
    align-items: flex-start;
    padding-left: 50rem;

    .line3 {
      margin-top: 29rem;

      .name {
        text-align: left;
        font-size: 18rem;
      }

      .position {
        margin-top: 3rem;
        font-size: 14rem;
        text-align: left;
      }
    }
  }
}
</style>
