<script setup lang="ts">
import { useTo } from "@/hooks/index";

const { item } = defineProps(["item"]);
const { tags, trackCount, playCount, description } = item;
</script>

<template>
  <div class="description-detial">
    <p>
      标签:
      <span v-for="(tag, index) in tags.join(`/`)" :key="index">
        <a style="color: red.">{{ tag }}</a>
      </span>
    </p>
    <p>
      <span>
        歌曲:
        <span class="changeNum">{{ trackCount }}</span>
      </span>
      <span>
        播放:
        <span class="changeNum">{{ useTo(playCount) }}</span>
      </span>
    </p>
    <p v-if="description">
      简介：
      <span class="changeNum">{{ description }}</span>
    </p>
  </div>
</template>

<style scoped lang='less'>
.description-detial {
  color: rgb(55, 55, 55);
  font-size: small;
  margin-top: 15px;
  p {
    margin-top: 5px;
  }
  p + p {
    span + span {
      margin-left: 10px;
    }
  }
}
</style>