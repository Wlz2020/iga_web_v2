<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'

import { goHome } from '@/helps/go-home'
import IconClose from '@/components/IconClose.vue'
import bus from '@/utils/bus'

import ImgArrow from '@/assets/image/common/arrow.png'
import ImgCheckArrow from '@/assets/image/common/check_arrow.png'

import { list as listRef } from './hook/list'

const addFilterBg = ref(false)
const instance = getCurrentInstance()
const showTip = ref(false)

const currentService = ref()
const currentServiceDesc = ref()

const list = ref(listRef)

function onGoHome() {
  const { $router } = instance.proxy
  goHome($router)
}

function onMouseover(flag, item) {
  currentService.value = item
  showTip.value = !!flag
}

function onClickItem(currentService) {
  currentServiceDesc.value = currentService.list[0].txt

  list.value = list.value.map((item) => {
    if (currentService.title == item.title) {
      return {
        ...item,
        show: !item.show
      }
    }

    return {
      ...item,
      show: false
    }
  })
}

function judgeNameClass(item) {
  if (!showTip.value || currentService.value.title === item.title) {
    return ''
  }

  return 'no-active'
}

onMounted(() => {
  bus.on('bus-show-menu', (v) => {
    addFilterBg.value = v
  })
})
</script>

<template>
  <div class="ani-fadeIn our-school-view en_font_bold" :class="{ filter: addFilterBg }">
    <IconClose @click="onGoHome()" class="close-icon"></IconClose>
    <div class="content">
      <div class="service-view en_font_bold">
        <div class="list">
          <div class="item">
            <div class="name">SERVICE LIST</div>
            <div class="more" v-if="showTip">EXPLORE MORE</div>
          </div>
          <div
            class="item-icon"
            v-for="item in list"
            :key="item.title"
            @mouseover="onMouseover(1, item)"
            @mouseleave="onMouseover(0, {})"
          >
            <div class="line1" @click="onClickItem(item)">
              <div class="name" :class="judgeNameClass(item)">
                <div class="title">{{ item.title }}</div>
                <div class="subTitle">{{ item.subTitle }}</div>
              </div>
              <div
                class="icon"
                :class="[item.title === currentService.title ? 'active' : 'no-active']"
                v-if="showTip"
              >
                <img :src="ImgArrow" alt="" />
              </div>
            </div>
            <div class="line2" v-if="item.show">
              <div class="box">
                <div class="left">
                  <div
                    class="line2-item-name"
                    v-for="items in item.list"
                    :key="items.name"
                    @click="currentServiceDesc = items.txt"
                    :class="{ 'active-line2-item-name': 1 }"
                  >
                    <div class="active-icon" v-if="currentServiceDesc === items.txt">
                      <img :src="ImgCheckArrow" alt="" />
                    </div>
                    <div
                      class="name pingFang_Medium_font"
                      :class="{ 'active-items-name': currentServiceDesc === items.txt }"
                    >
                      {{ items.name }}
                    </div>
                  </div>
                </div>
                <div class="rigth">
                  <div class="line2-item-txt pingFang_Regular_font">{{ currentServiceDesc }}</div>
                </div>
              </div>
            </div>
          </div>
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
  }
}

.service-view {
  .list {
    &:hover {
      cursor: pointer;
    }

    .item {
      font-size: 15rem;
      width: 1000rem;
      word-spacing: 5rem;
      border-bottom: 1px solid #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .name {
        font-size: 16rem;
      }

      .icon {
        width: 25rem;
      }

      .active {
        transform: rotate(90deg);
      }

      .no-active {
        // opacity: 0.3;
      }
    }

    .item-icon {
      display: flex;
      flex-direction: column;

      .name {
        font-size: 16rem;
      }

      .icon {
        width: 21rem;
      }

      .active {
        transform: rotate(90deg);
      }

      .no-active {
        // opacity: 0.3;
      }

      .line1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 40rem;
        border-bottom: 1px solid #fff;
      }

      .line2 {
        margin: 15rem 0;

        .box {
          display: flex;
          width: 1000rem;

          .left {
            flex: 1;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .line2-item-name {
              width: 48%;
              position: relative;

              .active-icon {
                position: absolute;
                top: calc(50% - 10rem);
                width: 13rem;
                height: 13rem;
              }

              .name {
                border-top: 1px solid #fff;
                padding: 11rem;
                white-space: nowrap;
                margin-left: 20rem;
                font-size: 15rem;
                color: #868686;
                transition: color 0.9s ease-in-out;

                &:hover {
                  color: #fff;
                }
              }

              .active-items-name {
                color: #fff;
              }

              &:nth-child(1) {
                width: 92%;

                .name {
                  border-top: 0;
                }
              }
            }
          }

          .rigth {
            flex: 1.2;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 80rem;
            padding-right: 80rem;

            .line2-item-txt {
              font-size: 13rem;
              line-height: 30rem;
            }
          }
        }
      }
      .name {
        display: flex;
        color: #868686;
        transition: color 0.9s ease-in-out;

        &:hover {
          color: #fff;
        }

        .title {
          width: 80rem;
          font-size: 16rem;
        }

        .subTitle {
          font-size: 16rem;
          margin-left: 27rem;
          word-spacing: 5rem;
        }
      }
    }
  }
}
</style>
