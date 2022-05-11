<script setup lang="ts">
import router from "@/router";
const { title } = defineProps(["title"]);
const goPlaylist = () => {
  router.push({ path: "/home/playlist" });
};
</script>

<template>
  <li>
    <div class="title" @click="goPlaylist()">{{ title }} ></div>
    <ul style="margin-top: 15px">
      <slot></slot>
    </ul>
  </li>
</template>

<style scoped lang='less'>
.title {
  font-size: larger;
  font-weight: bold;
  margin-left: 5px;
}
</style>