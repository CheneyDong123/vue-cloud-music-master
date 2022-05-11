<script setup lang="ts">
import Carousel from "@/components/Carousel/index.vue";
import RecommendItem from "@/components/RecommendItem/index.vue";
const playlists = [
  {
    name: "「蒸汽波/复古风」东京之夜的霓虹美学",
    coverImgUrl:
      "http://p1.music.126.net/5E6EsFo46Ep21mViMi7D7Q==/109951166163288112.jpg",
    id: 4980157066,
    playCount: 1010174,
    subscribedCount: 28203,
    trackCount: 121,
    createTime: 1587446405439,
    description:
      "“在广袤的空间和无限的时间中，能与你共享同一颗行星和同一段时光是我的荣幸。”——卡尔·萨根",
    tags: ["电子", "怀旧", "日语"],
  },
];
</script>

<template>
  <div><Carousel /></div>
  <ul class="recommend-content">
    <RecommendItem title="推荐歌单">
      <ListItem v-for="item in playlists" :key="item.id" :item="item" />
    </RecommendItem>
  </ul>
</template>

<style scoped lang='less'>
.recommend-content {
  height: 100%;
  width: 100%;
}
</style>