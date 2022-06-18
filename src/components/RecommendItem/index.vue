<script setup lang="ts">
import router from "@/router";
const { title } = defineProps(["title"]);
const goPlaylist = () => {
  router.push({ path: "/home/playlist" });
};
</script>

<template>
  <div class="title" @click="goPlaylist()">{{ title }} ></div>
  <ul class="container">
    <slot></slot>
  </ul>
</template>

<style scoped lang='less'>
.title {
  font-size: larger;
  font-weight: bold;
}

.container {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>