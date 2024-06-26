<script setup>
import { onMounted, ref, getCurrentInstance } from 'vue'
import bus from '@/utils/bus'
import { useMenuStore } from '@/stores/menu'
import IconAdd from '@/components/IconAdd.vue'
import IconRemove from '@/components/IconRemove.vue'
import IconClose from '@/components/IconClose.vue'
import { toPage } from '@/helps/navigation'
import { RouterName as RN } from '@/config/router'
import ImgLogo from '@/assets/image/index/icon_logo.png'
import OfferPreview from '@/components/OfferPreview.vue'
import SchoolMap from '@/components/SchoolMap.vue'
import ServicePreview from '@/components/ServicePreview.vue'
import { usebackHomeFlagStore } from '@/stores/backHome'

const menuStore = useMenuStore()
const backHomeFlagStore = usebackHomeFlagStore()
const showModal = ref(false)

function onShowModal(flag) {
  menuViewRef.value.classList.toggle('ani-fadeIn-fast', flag)
  showModal.value = flag
  menuStore.changeMenuOpenStatus(flag)
  bus.emit('bus-show-menu', flag)
}

const menuTopAreaList = [
  {
    name: 'ABOUT',
    items: [
      {
        name: 'ABOUT US',
        routerName: RN.AboutUs
      },
      {
        name: 'OUR TEAM',
        routerName: RN.OurTeam
      },
      {
        name: 'CONTACT US',
        routerName: RN.ContachUs
      }
    ]
  },
  {
    name: 'SHOWCASE',
    items: [
      {
        name: "STUDENTS' WORKS",
        routerName: RN.StudentWorks
      }
    ]
  },
  {
    name: 'OUR OFFERS'
  }
]
const menuBottomAreaList = [
  {
    name: 'OUR SERVICE'
  },
  {
    name: 'SCHOOLS'
  }
]

const menuViewRef = ref(null)

const currentMenu = ref(menuTopAreaList[0])

function setInitCurrentMenu() {
  currentMenu.value = menuTopAreaList[0]
}

function onMouseover(item) {
  currentMenu.value = item
}

const instance = getCurrentInstance()
const { $router } = instance.proxy

function goRouterByName(name) {
  onShowModal(false)
  toPage($router, name)
}

function onGoHome() {
  backHomeFlagStore.changeBackHomeFlagStatus(true)
  toPage($router, RN.Home)
}

onMounted(() => {
  setInitCurrentMenu()
})
</script>

<template>
  <div v-if="menuStore.menuShowIconStatus" class="menu-view en_font_bold" ref="menuViewRef">
    <div class="logo-wrap" @click="onGoHome">
      <img :src="ImgLogo" />
    </div>

    <div class="menu-icon-wrap">
      <template v-if="!showModal">
        <IconAdd class="menu-add-content-wrap" @click="onShowModal(true)"></IconAdd>
      </template>

      <template v-else>
        <IconRemove class="menu-remove-content-wrap" @click="onShowModal(false)"></IconRemove>
      </template>
    </div>

    <div class="content-box-wrap" v-if="showModal">
      <div class="content-box">
        <div class="menu-list">
          <div class="top-wrap">
            <IconAdd></IconAdd>
            <IconAdd></IconAdd>
            <IconAdd></IconAdd>
            <IconAdd></IconAdd>
            <div class="menu-contain">
              <div
                class="item"
                :class="{ active: item.name === currentMenu.name }"
                @mouseover="onMouseover(item)"
                @click="item.name === 'OUR OFFERS' && goRouterByName(RN.OurOffers)"
                v-for="item in menuTopAreaList"
                :key="item.name"
              >
                [{{ item.name }}]
              </div>
            </div>
          </div>
          <div class="bottom-wrap">
            <IconAdd></IconAdd>
            <IconAdd></IconAdd>
            <div class="menu-contain">
              <div
                class="item"
                :class="{ active: item.name === currentMenu.name }"
                @mouseover="onMouseover(item)"
                v-for="item in menuBottomAreaList"
                :key="item.name"
              >
                [{{ item.name }}]
              </div>
            </div>
          </div>
        </div>
        <div class="menu-details">
          <IconClose @click="onShowModal(false)"></IconClose>
          <IconAdd></IconAdd>
          <IconAdd></IconAdd>
          <IconAdd></IconAdd>
          <div class="item-box">
            <template v-if="['ABOUT', 'SHOWCASE'].includes(currentMenu.name)">
              <div
                class="item ani-fadeIn-fast"
                v-for="item in currentMenu.items"
                :key="item.name"
                @click="goRouterByName(item.routerName)"
              >
                [{{ item.name }}]
              </div>
            </template>

            <template v-if="['OUR OFFERS'].includes(currentMenu.name)">
              <OfferPreview
                @click="goRouterByName(RN.OurOffers)"
                class="offer-preview-wrap ani-fadeIn-fast"
              ></OfferPreview>
            </template>

            <template v-if="['OUR SERVICE'].includes(currentMenu.name)">
              <ServicePreview @click="goRouterByName(RN.OurService)" class="ani-fadeIn-fast" />
            </template>

            <template v-if="['SCHOOLS'].includes(currentMenu.name)">
              <SchoolMap
                @click="goRouterByName(RN.OurSchool)"
                class="school-map-wrap ani-fadeIn-fast"
              ></SchoolMap>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@modalWidth: 1000rem;
@modalHeight: 500rem;

.logo-wrap {
  position: absolute;
  bottom: 0;
  width: calc(132rem / 2.5);
  height: calc(70rem / 2.5);
  text-align: center;
  left: calc(50% - (132rem / 5));
  top: 5vh;
}

.menu-icon-wrap {
  position: absolute;
  bottom: 0;
  width: 80rem;
  display: flex;
  justify-content: center;
  left: calc(50% - (80rem / 2));
  bottom: 5vh;

  .menu-add-content-wrap,
  .menu-remove-content-wrap {
    position: relative;
    z-index: 2;

    &:hover {
      cursor: pointer;

      &::before {
        content: 'MENU';
        position: absolute;
        bottom: 30rem;
        font-size: 13rem;
        left: -4rem;
        width: 100%;
        color: #fff;
      }
    }
  }

  .menu-remove-content-wrap {
    &:hover {
      &::before {
        left: -12rem;
        content: 'CLOSE';
      }
    }
  }
}

.content-box {
  position: absolute;
  top: calc(50% - (@modalHeight / 2));
  left: calc(50% - (@modalWidth / 2));
  width: @modalWidth;
  height: @modalHeight;
  display: flex;
}

.content-box-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1;

  .menu-list {
    flex: 0.8;
    // border: 1px solid green;
    display: flex;
    flex-direction: column;

    .top-wrap {
      flex: 1;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      // border: 1px solid blue;

      .icon-box {
        &:nth-child(1) {
          position: absolute;
          top: 0;
          left: 0;
        }

        &:nth-child(2) {
          position: absolute;
          top: 0;
          right: 0;
        }

        &:nth-child(3) {
          position: absolute;
          bottom: 0;
          left: 0;
        }

        &:nth-child(4) {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }

    .bottom-wrap {
      flex: 0.7;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      // border: 1px solid lightcoral;

      .icon-box {
        &:nth-child(1) {
          position: absolute;
          bottom: 0;
          left: 0;
        }

        &:nth-child(2) {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
  }

  .menu-details {
    flex: 2;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon-box {
      &:nth-child(1) {
        position: absolute;
        top: 0;
        right: 0;
        &:hover {
          cursor: pointer;
        }
      }

      &:nth-child(2) {
        position: absolute;
        bottom: 0;
        right: 0;
      }

      &:nth-child(3) {
        position: absolute;
        top: 0;
        left: 0;
      }

      &:nth-child(4) {
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }

    .item-box {
      font-size: 15rem;
      margin-bottom: 8rem;

      .item {
        color: #868686;
        border: 1px solid transparent;
        width: max-content;

        transition:
          border-bottom-color 0.9s ease-in-out,
          color 0.9s ease-in-out;

        &:not(&:last-child) {
          margin-bottom: 8rem;
        }

        &:hover {
          color: #fff;
          cursor: pointer;
          border-bottom-color: #fff;
        }
      }

      .offer-preview-wrap {
        transform: scale(0.8);

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}

.menu-contain {
  .item {
    font-size: 15rem;
    color: #868686;
    border: 1px solid transparent;
    &:not(&:last-child) {
      margin-bottom: 8rem;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .active {
    width: max-content;
    color: #fff;
    border-bottom-color: #fff;
    transition:
      border-bottom-color 0.9s ease-in-out,
      color 0.9s ease-in-out;

    &:hover {
      color: #fff;
      border-bottom-color: #fff;
    }
  }
}
</style>
