<script setup>
import { onMounted } from 'vue'
import bus from '@/utils/bus'
import { FILE_RESOURCE_IP } from '@/consts/file_resource_ip'

import CardView from './CardView.vue'

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
          >作品集团队</span
        >
      </div>
      <div class="img-wrap">
        <img :src="FILE_RESOURCE_IP + teamList[0].img" />
      </div>
      <div class="line3">
        <div class="name pingFang_Regular_font">{{ teamList[0].name }}</div>
        <div class="position pingFang_Regular_font">{{ teamList[0].position }}</div>
      </div>
    </div>
    <div class="list list2">
      <CardView
        class="card-view-wrap"
        :img="FILE_RESOURCE_IP + teamList[1].img"
        :name="teamList[1].name"
        :position="teamList[1].position"
      />
      <CardView
        class="card-view-wrap"
        :img="FILE_RESOURCE_IP + teamList[5].img"
        :name="teamList[5].name"
        :position="teamList[5].position"
      />
    </div>
    <div class="list list3">
      <CardView
        class="card-view-wrap"
        :img="FILE_RESOURCE_IP + teamList[2].img"
        :name="teamList[2].name"
        :position="teamList[2].position"
      />
      <CardView
        class="card-view-wrap"
        :img="FILE_RESOURCE_IP + teamList[6].img"
        :name="teamList[6].name"
        :position="teamList[6].position"
      />
    </div>
    <div class="list list4">
      <CardView
        class="card-view-wrap"
        :img="FILE_RESOURCE_IP + teamList[3].img"
        :name="teamList[3].name"
        :position="teamList[3].position"
      />
      <CardView
        class="card-view-wrap"
        :img="FILE_RESOURCE_IP + teamList[7].img"
        :name="teamList[7].name"
        :position="teamList[7].position"
      />
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

  .list1 {
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
        font-size: 20rem;
        margin-bottom: 20rem;
      }

      .position {
        text-align: center;
        font-size: 16rem;
      }
    }
  }

  .list2,
  .list3,
  .list4 {
    .card-view-wrap {
      height: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      padding-left: 65rem;

      &:first-child {
        justify-content: flex-start;
      }
    }
  }
}
</style>
