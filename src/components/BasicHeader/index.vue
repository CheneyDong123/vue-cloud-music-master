<script setup lang="ts">
import Control from "./Control.vue";
import Search from "./Search.vue";
import UserLogin from "./UserLogin.vue";
</script>

<template>
  <el-row>
    <el-col :span="4">
      <div class="header-img">
        <img src="../../assets/images/logo.svg" alt="LOGO" />
      </div>
    </el-col>
    <el-col :span="2">
      <div class="header-control">
        <Control />
      </div>
    </el-col>
    <el-col :span="6">
      <div class="header-search">
        <Search />
      </div>
    </el-col>
    <el-col :span="6" :offset="6">
      <div class="header-user">
        <UserLogin />
      </div>
      <div class="header-setting">theme</div>
      <div class="header-user-message">message</div>
    </el-col>
  </el-row>
</template>


<style scoped lang="less">
.el-row {
  height: 100%;
}
.header-img {
  display: flex;
  align-items: center;
  width: 170px;
  height: 50px;
  float: left;
  margin: 0 auto;
  img {
    padding-top: 5px;
    margin-left: 15px;
    width: 130px;
  }
}
.header-control {
  height: 100%;
  width: 70px;
  display: flex;
  flex: 1;
  color: #c2bcbc;
  text-align: center;
  align-items: center;
}
.header-search {
  display: flex;
  flex: 1;
  width: 200px;
  height: 100%;
  float: left;
}
.header-user {
  width: 100px;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
}
.header-setting {
  width: 100px;
  height: 20px;
  float: left;
}
</style>
