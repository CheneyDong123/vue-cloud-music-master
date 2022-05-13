<script setup lang="ts">
import { computed } from "@vue/runtime-core";

const { item } = defineProps(["item"]);
const { name, coverImgUrl, playCount, creator } = item;
const formatCount = computed(() => {
  let count = playCount.toString();

  if (count.length > 4) {
    count = count.slice(0, count.length - 4);
  } else {
    return count;
  }
  return count + "万";
});
</script>

<template>
  <li class="playlist-item">
    <div class="container">
      <div class="count">▷ {{ formatCount }}</div>
      <template v-if="creator">
        <div class="copywriter">
          <i class="iconfont icon-yonghu" />
          {{ creator.nickname }}
        </div>
      </template>
      <img :src="coverImgUrl" alt="COVERIMG" class="coverImg" />
    </div>
    <p>{{ name }}</p>
  </li>
</template>

<style scoped lang='less'>
.playlist-item {
  margin-bottom: 20px;
  padding: 5px 10px;
  width: 18%;
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .count {
      color: white;
      font-size: 10px;
      position: absolute;
      top: 3px;
      right: 8px;
    }

    .coverImg {
      border-radius: 7px;
      width: 100%;
      margin: 0 auto;
    }

    .copywriter {
      font-size: 8px;
      color: white;
      position: absolute;
      bottom: 10px;
      left: 8px;
      .icon-yonghu {
        font-size: 8px;
      }
    }
  }
  p {
    font-size: small;
  }
}
</style>