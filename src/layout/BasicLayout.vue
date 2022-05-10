<script setup lang="ts">
import BasicHeader from "@/components/BasicHeader/index.vue";
import BasicSider from "@/components/BasicSider/index.vue";
import BasicFooter from "@/components/BasicFooter/index.vue";
</script>

<template>
  <div class="header-container">
    <BasicHeader />
  </div>
  <div class="body-container">
    <el-container style="height: 100%">
      <el-aside width="200px">
        <BasicSider />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
  <div class="footer-container">
    <BasicFooter />
  </div>
</template>

<style scoped lang='less'>
.header-container {
  background-color: rgb(253, 84, 78);
  width: 100%;
  position: absolute;
  top: 0;
  height: 60px;
}

.body-container {
  width: 100%;
  position: absolute;
  top: 60px;
  bottom: 80px;
}

.footer-container {
  border-top: 1px solid #ebebeb;
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 0;
}

.el-aside {
  border-right: 1px solid #ebebeb;
}
</style>