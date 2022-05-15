<script setup lang="ts">
import { useMsToMin } from "@/hooks/index";
import { useRouter } from "vue-router";

const router = useRouter();
const { songList } = defineProps(["songList"]);
const goDetail = (id: any) => {
  router.push({ path: "/playlist", query: { id } });
};
</script>

<template>
  <el-table :data="songList" stripe style="width: 100%">
    <el-table-column label="" width="50">
      <template #default="scope">
        <div style="display: flex; align-items: center; text-align: center">
          <span class="songIndex">{{ songList.indexOf(scope.row) + 1 }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="70">
      <template #default>
        <i class="iconfont icon-xihuan" style="margin-right: 8px"></i>
        <i class="iconfont icon-xiazai1"></i>
      </template>
    </el-table-column>
    <el-table-column label="标题" width="550">
      <template #default="scope">
        <span class="common">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="歌手" width="250">
      <template #default="scope">
        <span class="common active" @click="goDetail(scope.row.ar[0].id)">{{
          scope.row.ar[0].name
        }}</span>
      </template>
    </el-table-column>
    <el-table-column label="专辑" width="300">
      <template #default="scope">
        <span class="common active" @click="goDetail(scope.row.id)">{{
          scope.row.al.name
        }}</span>
      </template>
    </el-table-column>

    <el-table-column label="时间">
      <template #default="scope">
        <span class="songTime">{{ useMsToMin(scope.row.dt) }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>
<!-- TODO: 
      1.点击跳转到详情页面
      2.点击歌手跳转到歌手页面
      3.点击专辑跳转到歌单页面
      4.点击收藏将歌曲收藏到喜欢歌单        
-->
<style scoped lang='less'>
.songIndex {
  text-align: center;
  margin-left: 10px;
  color: rgb(202, 202, 225);
  font-size: small;
}

.songTime {
  font-size: small;
  color: rgb(150, 150, 151);
}
.common {
  font-size: small;
}
.active:hover {
  color: black;
}
</style>