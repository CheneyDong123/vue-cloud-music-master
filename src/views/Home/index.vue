<script setup lang="ts">
const NAVS = [
  {
    name: "个性推荐",
    key: "recommend",
  },
  {
    name: "歌单",
    key: "playlist",
  },
  {
    name: "排行榜",
    key: "rank",
  },
  {
    name: "歌手",
    key: "artist",
  },
  {
    name: "最新音乐",
    key: "newsong",
  },
];
</script>

<template>
  <div class="home-bar">
    <div class="home-bar-content">
      <router-link
        v-for="(item, index) in NAVS"
        :key="index"
        :to="`/home/${item.key}`"
        active-class="findMusic-active"
        ><span>{{ item.name }}</span>
      </router-link>
    </div>
  </div>
  <div class="home-content">
    <el-scrollbar height="100%">
      <div class="home-content-menu">
        <router-view />
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped lang='less'>
.home-bar {
  height: 10%;
  width: 100%;
  .home-bar-content {
    position: relative;
    top: 40%;
    width: fit-content;
    margin: 0 auto;
    a {
      display: inline-block;
      width: 100px;
      text-align: center;
    }
  }
}

.home-content {
  height: 90%;
  width: 100%;
}

.home-content-menu {
  padding-top: 5px;
  margin: 0 auto;
  height: 100%;
  width: 83%;
}

.findMusic-active {
  font-weight: bolder;
  font-size: 19px;
  span {
    display: block;
    margin: 0 auto;
    text-align: center;
    width: fit-content;
  }
  span:after {
    content: "";
    width: 75%;
    height: 1px;
    display: block;
    margin: 0 auto;
    border-bottom: 4px solid rgb(233, 77, 71);
  }
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>