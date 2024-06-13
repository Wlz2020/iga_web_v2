<script setup>
import { ref, onMounted } from 'vue'
import AddressView from '../components/AddressView.vue'
import { list } from './hook/other'

import bus from '@/utils/bus'

const addFilterBg = ref(false)
const currentSchoolDetails = ref('')

function onMouseover(v) {
  currentSchoolDetails.value = list.find((item) => item.school === v)
}

function showTip(v) {
  return currentSchoolDetails.value.school === v
}

onMounted(() => {
  currentSchoolDetails.value = list[0]
  bus.on('bus-show-menu', (v) => {
    addFilterBg.value = v
  })
})
</script>

<template>
  <div class="ani-fadeIn our-school-view en_font_bold" :class="{ filter: addFilterBg }">
    <div class="content">
      <div class="left">
        <AddressView :name="'OTHER'" />
      </div>
      <div class="middle">
        <div
          v-for="(item, index) in list"
          :key="item.school"
          class="school"
          :class="'school' + (index + 1)"
          @mouseover="onMouseover(item.school)"
        >
          <div class="dot"></div>
          <div class="name">[{{ item.school }}]</div>
          <div
            class="school-tip en_font_bold ani-fadeIn"
            :class="'school' + (index + 1) + '-tip'"
            v-if="showTip(item.school)"
          ></div>
        </div>
      </div>

      <div class="right">
        <div class="photo ani-fadeIn">
          <div class="photo-view">
            <img :src="currentSchoolDetails.img" />
          </div>
        </div>
        <div class="name ani-fadeIn">
          <div class="ch_font_bold ch-name ch_font_light">{{ currentSchoolDetails.name1 }}</div>
          <div class="en_font_bold en-name">{{ currentSchoolDetails.name2 }}</div>
        </div>
        <div class="desc ch_font_light">{{ currentSchoolDetails.desc }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@modalWidth: 1200rem;
@modalHeight: 500rem;

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

    .left {
      flex: 0.7;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .middle {
      flex: 2;
      height: 100%;
      position: relative;
      margin-right: 30rem;
      overflow: hidden;

      .school {
        position: absolute;
        display: flex;
        align-items: center;
        font-size: 16rem;
        color: #fff;
        white-space: nowrap;

        &:hover {
          cursor: pointer;
        }

        .dot {
          width: 6rem;
          height: 6rem;
          border-radius: 100%;
          background-color: #fff;
        }

        .name {
          margin-left: 10rem;
          padding-top: 5rem;
        }
      }

      .school-tip {
        width: 320rem;
        height: 1rem;
        margin-left: 20rem;
        border: 1rem solid #fff;
      }

      .school1 {
        top: 40rem;
        left: 40rem;
      }
      .school2 {
        top: 185rem;
        left: 220rem;
      }
      .school3 {
        bottom: 85rem;
        left: 120rem;
      }
    }
    .right {
      flex: 1.5;
      height: 100%;
      display: flex;
      flex-direction: column;
      border: 1rem solid #fff;

      .photo {
        flex: 4;
        display: flex;
        justify-content: center;
        align-items: center;

        .photo-view {
          width: 356rem;
          height: 180rem;

          img {
            object-fit: cover;
          }
        }
      }

      .name {
        flex: 2;
        border-top: 1rem solid #fff;
        border-bottom: 1rem solid #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20rem;

        .ch-name {
          font-size: 20rem;
        }

        .en-name {
          margin-top: 10rem;
          font-size: 14rem;
        }
      }
      .desc {
        flex: 4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 14rem;
        padding: 0 20rem;
        line-height: 25rem;
      }
    }
  }
}
</style>
