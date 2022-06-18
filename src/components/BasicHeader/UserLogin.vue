<script setup lang="ts">
import { reactive, toRefs } from "vue";
const state = reactive({
  circleUrl:
    "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
  squareUrl:
    "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
  sizeList: ["small", "", "large"] as const,
});
const { circleUrl } = toRefs(state);
</script>

<template>
  <div class="user-login">
    <el-avatar :size="25" :src="circleUrl" />
    <div class="user-login-name">未登录▼</div>
  </div>
</template>

<style scoped lang='less'>
.user-login {
  height: 30px;
  display: flex;
  align-items: center;
  .user-login-name {
    font-size: 13px;
    margin-left: 8px;
    color: rgb(254, 217, 216);
    &:hover {
      color: white;
    }
  }
}
</style>