<script setup lang="ts">
const { songList } = defineProps(["songList"]);
console.log("1111", songList);
</script>

<template>
  <div>

  </div>
  <el-table :data="songList" stripe style="width: 100%">
    <el-table-column prop="" label="" width="20" />
    <el-table-column prop="" label="操作" width="70" />

    <el-table-column prop="name" label="标题" width="550" />
    <el-table-column prop="ar[0].name" label="歌手" width="250" />
    <el-table-column prop="al.name" label="专辑" width="350" />
    <el-table-column prop="dt" label="时间" />
  </el-table>
</template>

<style scoped lang='less'>
</style>