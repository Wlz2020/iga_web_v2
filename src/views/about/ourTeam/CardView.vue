<script setup>
const props = defineProps({
  img: { type: String },
  name: { type: String },
  position: { type: String }
})
</script>
<template>
  <div class="card">
    <div class="card-img-wrap">
      <img :src="props.img" alt="" srcset="" />
    </div>
    <div class="card-name pingFang_Regular_font">{{ props.name }}</div>
    <div class="card-position pingFang_Regular_font">{{ props.position }}</div>
  </div>
</template>

<style scoped lang="less">
.card-img-wrap {
  width: 168rem;
  height: 188rem;
}

.card-name {
  font-weight: bold;
  font-size: 15rem;
  margin-top: 33rem;
}

.card-position {
  margin-top: 3rem;
  font-size: 13rem;
}
</style>
