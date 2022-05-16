<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const forward = () => {
  router.go(-1);
};
const back = () => {
  router.go(1);
};
</script>

<template>
  <div style="display: flex">
    <div class="forward" @click="forward()">
      <el-icon><ArrowLeft /></el-icon>
    </div>
    <div class="back" @click="back()">
      <el-icon><ArrowRight /></el-icon>
    </div>
  </div>
</template>

<style scoped lang='less'>
.forward {
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  cursor: pointer;
  color: rgb(247,192,190);
  background-color: rgb(233, 77, 71);
  border-radius: 50%;
}
.back {
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  color: rgb(247, 193, 190);
  background-color: rgb(233, 77, 71);
}
</style>