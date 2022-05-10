<script setup lang="ts">
let menuList = [
  {
    title: "发现音乐",
    link: "/home",
  },
  {
    title: "直播",
    link: "/live",
  },
  {
    title: "私人FM",
    link: "/FM",
  },
];
let myMusic = [
  {
    title: "最近播放",
    link: "/recent",
  },
  {
    title: "我的收藏",
    link: "/myFavorite",
  },
];
</script>

<template>
  <div class="side">
    <el-scrollbar height="100%">
      <div class="side-find">
        <ul>
          <router-link
            v-for="(item, index) in menuList"
            :key="index"
            :to="item.link"
            active-class="menuList-active"
            ><li>{{ item.title }}</li></router-link
          >
        </ul>
      </div>
      <div class="side-myMusic">
        <div class="side-title">我的音乐</div>
        <div class="side-myMusic-content">
          <router-link
            v-for="(item, index) in myMusic"
            :key="index"
            :to="item.link"
            active-class="myMusic-active"
            ><li>{{ item.title }}</li></router-link
          >
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped lang='less'>
.side {
  height: 100%;
  margin-left: 9px;
  li:hover {
    background-color: #f5f5f5;
  }
  .side-find {
    margin-top: 5px;
    line-height: 35px;
    font-size: 15px;
    li {
      color: black;
      cursor: pointer;
      margin-top: 3px;
      padding-left: 9px;
      width: 170px;
    }
  }
  .side-myMusic {
    margin-top: 10px;
    .side-title {
      font-size: 12px;
      padding-left: 9px;
      line-height: 35px;
      color: rgb(146, 146, 146);
    }
    .side-myMusic-content {
      font-size: 15px;
      line-height: 30px;
      li {
        color: black;
        cursor: pointer;
        padding-left: 9px;
        line-height: 35px;
        width: 170px;
      }
    }
  }
}
.menuList-active {
  font-size: 17px;
  color: rgb(49, 49, 49);
  font-weight: 600;
  li {
    background-color: #f5f5f5;
  }
}
.myMusic-active {
  li {
    background-color: #f5f5f5;
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