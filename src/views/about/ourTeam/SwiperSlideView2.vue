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
      <CardView
        class="card-view-wrap"
        :img="FILE_RESOURCE_IP + teamList[8].img"
        :name="teamList[8].name"
        :position="teamList[8].position"
      />
      <CardView
        class="card-view-wrap"
        :img="FILE_RESOURCE_IP + teamList[12].img"
        :name="teamList[12].name"
        :position="teamList[12].position"
      />
    </div>
    <div class="list list2">
      <CardView
        class="card-view-wrap"
        :img="FILE_RESOURCE_IP + teamList[9].img"
        :name="teamList[9].name"
        :position="teamList[9].position"
      />
      <CardView
        class="card-view-wrap"
        :img="FILE_RESOURCE_IP + teamList[13].img"
        :name="teamList[13].name"
        :position="teamList[13].position"
      />
    </div>
    <div class="list list3">
      <CardView
        class="card-view-wrap"
        :img="FILE_RESOURCE_IP + teamList[10].img"
        :name="teamList[10].name"
        :position="teamList[10].position"
      />
      <CardView
        class="card-view-wrap"
        :img="FILE_RESOURCE_IP + teamList[14].img"
        :name="teamList[14].name"
        :position="teamList[14].position"
      />
    </div>
    <div class="list list4">
      <CardView
        class="card-view-wrap"
        :img="FILE_RESOURCE_IP + teamList[11].img"
        :name="teamList[11].name"
        :position="teamList[11].position"
      />
      <CardView
        class="card-view-wrap"
        :img="FILE_RESOURCE_IP + teamList[15].img"
        :name="teamList[15].name"
        :position="teamList[15].position"
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
        text-align: center;
        font-size: 24rem;
        margin-bottom: 20rem;
      }

      .position {
        text-align: center;
        font-size: 18rem;
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
