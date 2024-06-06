<script setup>
import { ref, onMounted } from 'vue'
import AddressView from '../components/AddressView.vue'
import { schoolName, list } from './hook/other'

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
        <div class="school school1" @mouseover="onMouseover(schoolName.AALTO_UNIVERSITY)">
          <div class="dot"></div>
          <div class="name">[{{ schoolName.AALTO_UNIVERSITY }}]</div>
          <div
            class="school-tip school1-tip en_font_bold ani-fadeIn"
            v-if="showTip(schoolName.AALTO_UNIVERSITY)"
          ></div>
        </div>

        <div class="school school2" @mouseover="onMouseover(schoolName.SHERIDAN_COLLEGE)">
          <div class="dot"></div>
          <div class="name">[{{ schoolName.SHERIDAN_COLLEGE }}]</div>
          <div
            class="school-tip school2-tip en_font_bold ani-fadeIn"
            v-if="showTip(schoolName.SHERIDAN_COLLEGE)"
          ></div>
        </div>

        <div class="school school3" @mouseover="onMouseover(schoolName.RMIT)">
          <div class="dot"></div>
          <div class="name">[{{ schoolName.RMIT }}]</div>
          <div
            class="school-tip school3-tip en_font_bold ani-fadeIn"
            v-if="showTip(schoolName.RMIT)"
          ></div>
        </div>
      </div>
      <div class="right">
        <div class="photo ani-fadeIn">{{ currentSchoolDetails.img }}</div>
        <div class="name ani-fadeIn">
          <div>{{ currentSchoolDetails.name1 }}</div>
          <div>{{ currentSchoolDetails.name2 }}</div>
        </div>
        <div class="desc ani-fadeIn">{{ currentSchoolDetails.desc }}</div>
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

      .school {
        position: absolute;
        display: flex;
        align-items: center;
        font-size: 16rem;
        color: #fff;

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
        width: 100rem;
        height: 1rem;
        margin-left: 20rem;
        border: 1rem solid #fff;
      }

      .school1 {
        top: 40rem;
        left: 40rem;

        .school1-tip {
          width: 250rem;
        }
      }
      .school2 {
        top: 185rem;
        left: 220rem;

        .school2-tip {
          width: 60rem;
        }
      }
      .school3 {
        bottom: 85rem;
        left: 120rem;

        .school3-tip {
          width: 280rem;
        }
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
      }
      .name {
        flex: 2;
        border-top: 1rem solid #fff;
        border-bottom: 1rem solid #fff;
      }
      .desc {
        flex: 4;
      }
    }
  }
}
</style>
