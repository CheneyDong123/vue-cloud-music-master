<script setup lang="ts">
import { computed } from "@vue/runtime-core";

const { item } = defineProps(["item"]);
const { name, coverImgUrl, playCount } = item;
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
      <!-- <div class="count">▷{{ formatCount }}</div> -->
      <img :src="coverImgUrl" alt="COVERIMG" class="coverimg" />
      <p>{{ name }}</p>
    </div>
  </li>
</template>

<style scoped lang='less'>
.playlist-item {
  display: inline-block;
  margin-bottom: 20px;
  width: 20%;
  height: 100%;
  .container {
    width: 100%;
    margin: 0 auto;

    p {
      font-size: small;
    }
    .coverimg {
      border-radius: 5px;
      width: 100%;
      margin: 0 auto;
    }
    // .count {
    //   color: black;
    //   position: absolute;
    //   left: 0;
    // }
  }
}
</style>