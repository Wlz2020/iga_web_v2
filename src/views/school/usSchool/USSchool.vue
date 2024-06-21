<script setup>
import { ref, onMounted } from 'vue'
import AddressView from '../components/AddressView.vue'
import { list } from './hook/us'
import { FILE_RESOURCE_IP } from '@/consts/file_resource_ip'

import bus from '@/utils/bus'

const addFilterBg = ref(false)
const currentSchoolDetails = ref('')

function onMouseover(v) {
  currentSchoolDetails.value = list.find((item) => item.school === v)
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
        <div class="item-box">
          <div class="address-view-wrap">
            <AddressView :name="'U.S.'" />
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="middle-box">
          <div class="top">
            <div class="photo">
              <img :src="FILE_RESOURCE_IP + currentSchoolDetails.img" />
            </div>
          </div>
          <div class="bottom">
            <div class="name">
              <div class="ch_font_bold ch-name ch_font_light">{{ currentSchoolDetails.name1 }}</div>
              <div class="en_font_bold en-name">{{ currentSchoolDetails.name2 }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-box">
          <div class="content-box">
            <div class="desc ch_font_light">{{ currentSchoolDetails.desc }}</div>
          </div>
          <div class="bar"></div>
        </div>
      </div>
      <div class="school-name-wrap">
        <div
          v-for="(item, index) in list"
          :key="item.school"
          :class="[
            'school',
            'school' + (index + 1),
            { active: item.school === currentSchoolDetails.school }
          ]"
          @mouseover="onMouseover(item.school)"
        >
          <div class="dot"></div>
          <div class="name">[{{ item.school }}]</div>
        </div>
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

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;

    .left {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .item-box {
        width: 300rem;
        height: 350rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #fff;
      }

      .address-view-wrap {
        transform: scale(0.8) translateY(-20rem);
        &:deep {
          .back-map {
            bottom: -75rem;
          }
        }
      }
    }

    .middle {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      // border: 1px solid #fff;

      .middle-box {
        margin-top: 70rem;
        width: 320rem;
        height: 350rem;
      }

      .top {
        height: 280rem;
        border: 1px solid #fff;
        border-left: 0;
        border-bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .photo {
          width: 300rem;
          height: 260rem;

          img {
            object-fit: cover;
          }
        }
      }

      .bottom {
        height: 70rem;
        border: 1px solid #fff;

        .name {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          padding-left: 20rem;
        }

        .ch-name {
          font-size: 18rem;
        }

        .en-name {
          margin-top: 5rem;
          font-size: 12rem;
        }
      }
    }

    .right {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .right-box {
        position: relative;
        margin-top: 70rem;
        width: 400rem;
        height: 350rem;
      }

      .content-box {
        height: 100%;
        border: 1px solid #fff;
        border-left: 0;

        .desc {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 30rem;
          height: 100%;
          font-size: 14rem;
          line-height: 30rem;
        }
      }

      .bar {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 50rem;
        height: 40rem;
        border: 1px solid #fff;
        background-color: #000;
        border-right: 0;
        border-bottom: 0;
      }
    }

    .school-name-wrap {
      .active {
        cursor: pointer;
        opacity: 0.5;
      }

      .school {
        position: absolute;
        display: flex;
        align-items: center;
        font-size: 16rem;
        color: #fff;
        white-space: nowrap;

        &:hover {
          cursor: pointer;
          opacity: 0.4;
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

      .school1 {
        top: 58rem;
        left: 360rem;
      }

      .school2 {
        top: 58rem;
        left: 640rem;
      }

      .school3 {
        top: 58rem;
        left: 880rem;
      }

      .school4 {
        top: 100rem;
        right: 80rem;
      }

      .school5 {
        top: 100rem;
        right: 5rem;
      }

      .school6 {
        top: 100rem;
        right: -70rem;
      }

      .school7 {
        top: 140rem;
        right: 99rem;
      }

      .school8 {
        top: 140rem;
        right: -30rem;
      }

      .school9 {
        top: 200rem;
        right: 40rem;
      }

      .school10 {
        top: 240rem;
        right: 43rem;
      }

      .school11 {
        top: 290rem;
        right: 70rem;
      }

      .school12 {
        top: 330rem;
        right: 95rem;
      }

      .school13 {
        top: 370rem;
        right: 75rem;
      }

      .school14 {
        top: 420rem;
        right: 50rem;
      }

      .school15 {
        top: 450rem;
        left: 1000rem;
      }

      .school16 {
        top: 490rem;
        left: 1000rem;
      }

      .school17 {
        top: 490rem;
        left: 850rem;
      }

      .school18 {
        top: 490rem;
        left: 730rem;
      }

      .school19 {
        top: 490rem;
        left: 620rem;
      }

      .school20 {
        top: 490rem;
        left: 420rem;
      }

      .school21 {
        top: 440rem;
        left: 160rem;
      }

      .school22 {
        top: 480rem;
        left: 160rem;
      }

      .school23 {
        top: 440rem;
        left: 60rem;
      }

      .school24 {
        top: 480rem;
        left: 60rem;
      }
    }
  }
}
</style>
