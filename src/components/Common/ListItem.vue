<script setup lang="ts">
import router from "@/router";
import { computed } from "@vue/runtime-core";

const { item } = defineProps(["item"]);
const { name, picUrl, playCount, creator } = item;
const formatCount = computed(() => {
  let count = playCount.toString();

  // if (count.length > 4) {
  //   count = count.slice(0, count.length - 4);
  // } else {
  //   return count;
  // }
  // return count + "万";
  switch (count.length) {
    case 1:
    case 2:
    case 3:
    case 4:
      break;
    case 5:
    case 6:
    case 7:
    case 8:
      count = count.slice(0, count.length - 4)
      count += "万";
      break;
    default:
      count = count.slice(0, count.length - 8)
      count += "亿";
      break;
  }
  return count;
});
const goPlaylistDetail = () => {
  router.push("/playlist");
};
</script>

<template>
  <li class="playlist-item" @click="goPlaylistDetail()">
    <div class="container">
      <div class="count">▷ {{ formatCount }}</div>
      <template v-if="creator">
        <div class="copywriter">
          <i class="iconfont icon-yonghu" />
          {{ creator.nickname }}
        </div>
      </template>
      <img :src="picUrl" alt="COVERIMG" class="coverImg" />
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