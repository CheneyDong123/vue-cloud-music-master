<script setup lang="ts">
import Carousel from "@/components/Carousel/index.vue";
import RecommendItem from "@/components/RecommendItem/index.vue";
import { ref } from "@vue/reactivity";
import { _getPlaylist } from "../../../api/playlist";
let playlists = ref();
async function getPlaylist() {
  let result = await _getPlaylist();
  playlists.value = result.data.result;
}

getPlaylist();
</script>

<template>
  <div><Carousel /></div>
  <div class="recommend-content">
    <RecommendItem title="推荐歌单">
      <ListItem v-for="item in playlists" :key="item.id" :item="item" />
    </RecommendItem>
  </div>
</template>

<style scoped lang='less'>
.recommend-content {
  height: 100%;
  width: 100%;
}
</style>