<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
</script>

<template>
  <div class="search">
    <el-input
      class="a"
      size="large"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
  </div>
</template>

<style scoped lang='less'>
.search {
  height: 100%;
  display: flex;
  align-items: center;
  .a {
    border: 0;
    border-radius: 10px;
    height: 30px;
    width: 100px;
    background-color: rgb(242, 80, 74);
  }
}
</style>