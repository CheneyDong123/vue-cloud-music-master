<script setup lang="ts">
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import { _getBanner } from "@/api/banner";
let banners: any = ref([]);
async function getBanner() {
  let result = await _getBanner();
  banners.value = result.data.banners;
}

getBanner();
</script>
<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <template v-if="banners">
      <el-carousel-item v-for="item in banners" :key="item.encodeId">
        <img class="cover" :src="item.imageUrl" alt="cover" />
      </el-carousel-item>
    </template>
  </el-carousel>
</template>

<style scoped lang='less'>
.cover {
  height: 100%;
  width: 100%;
}
.el-carousel__item {
  border-radius: 6px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>