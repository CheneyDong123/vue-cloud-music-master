<script setup lang="ts">
import ListItem from "@/components/Common/ListItem.vue";
import { _getTopPlaylist } from "@/api/playlist";
import { _getPlaylistCatlist } from "@/api/catlist";
import { ref, watch, watchEffect, nextTick, reactive } from "vue";
let catlist = ref();
let cat = ref("全部歌单");
let isShow = ref(false);
let playlists = ref();
let hotCatlist = ref();

async function getTopPlaylist(cat?: string, offect?: number, limit?: number) {
  const result = await _getTopPlaylist(cat, limit, offect);
  playlists.value = result.data.playlists;
}

async function getPlaylistCatlist() {
  const result = await _getPlaylistCatlist();
  catlist.value = result.data;
  hotCatlist.value = catlist.value.sub.filter((item: any) => item.hot);
}

const changeCat = (currentCat: string) => {
  cat.value = currentCat;
  // getTopPlaylist(cat.value);
};
getTopPlaylist(cat.value);
getPlaylistCatlist();
watchEffect(async () => {
  console.log(cat.value);

  getTopPlaylist(cat.value);
  await nextTick();
});
</script>

<template>
  <div class="playlist-container">
    <div>head</div>
    <div>
      <div class="tag">
        <el-button @click="isShow = !isShow" round>
          全部标签&nbsp;<el-icon><ArrowRight /></el-icon>
        </el-button>
        <ul class="hot-tag">
          <li
            v-for="(cat, index) in hotCatlist"
            :key="index"
            @click="changeCat(cat.name)"
          >
            {{ cat.name }}
          </li>
        </ul>
      </div>
      <div class="content">
        <ul class="content-item">
          <ListItem
            v-for="(item, index) in playlists"
            :key="index"
            :item="item"
          />
        </ul>
        <div class="playlist-tag" v-show="isShow">123</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>
.playlist-container {
  width: 100%;
  .tag {
    display: flex;
    margin-bottom: 10px;
    .hot-tag {
      display: flex;
    }
  }

  .content {
    width: 100%;
    position: relative;
    .playlist-tag {
      position: absolute;
      top: 0;
      height: 500px;
      width: 600px;
      border-radius: 5px;
      background-color: rgb(255, 255, 255);
      box-shadow: 0 0 3px 1px rgb(241, 239, 239);
    }
    .content-item {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>