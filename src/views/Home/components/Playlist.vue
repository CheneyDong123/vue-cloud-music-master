<script setup lang="ts">
import ListItem from "@/components/Common/ListItem.vue";
import {
  _getHighQuality,
  _getHotCategory,
  _getTopPlaylist,
} from "@/api/playlist";
import { _getPlaylistCatlist } from "@/api/catlist";
import { formatCategory } from "@/utils/format";
import { ref, watchEffect } from "vue";
import PlaylistTags from "../../../components/Common/PlaylistTags.vue";
import HighQuality from "@/views/Playlist/HighQuality.vue";
let catlist = ref();
let currentCat = ref("全部歌单");
let isShow = ref(false);
let playlists = ref();
let hotCatlist = ref();
let categories = ref();
let highQuality = ref([]);
let sub = ref();
let sum = ref();
// let backImg = ref() || {};

async function getTopPlaylist(cat?: string, offect?: number, limit?: number) {
  const result = await _getTopPlaylist(cat, limit, offect);
  playlists.value = result.data.playlists;
}

async function getPlaylistCatlist() {
  const result = await _getPlaylistCatlist();
  catlist.value = result.data;
  categories.value = catlist.value.categories;
  sub.value = catlist.value.sub;
  sum.value = formatCategory(categories.value, sub.value);
}

async function getHotCategory() {
  const result = await _getHotCategory();
  hotCatlist.value = result.data.tags;
}

async function getHighQuality(cat = "全部") {
  const result = await _getHighQuality(cat);

  highQuality.value = result.data.playlists;
}

const changeCat = (cat: string) => {
  currentCat.value = cat;
  isShow.value = false;
  getHighQuality(currentCat.value);
};
getPlaylistCatlist();
getHotCategory();
getHighQuality();

watchEffect(async () => {
  getTopPlaylist(currentCat.value);
});
</script>

<template>
  <div class="playlist-container">
    <div class="playlist-header" v-show="highQuality.length">
      <HighQuality :highQuality="highQuality" :currentCat="currentCat" />
    </div>
    <div class="playlist-body">
      <div class="tag">
        <el-button @click="isShow = !isShow" round text>
          {{ currentCat }}&nbsp;<el-icon><ArrowRight /></el-icon>
        </el-button>
        <ul class="hot-tag">
          <li
            v-for="(cat, index) in hotCatlist"
            :key="index"
            @click="changeCat(cat.name)"
          >
            <p :class="{ active: cat.name === currentCat }">
              {{ cat.name }}
            </p>
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
        <div>
          <PlaylistTags
            @changeCat="changeCat"
            :sum="sum"
            :isShow="isShow"
            :currentCat="currentCat"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>
.playlist-container {
  width: 100%;
  .playlist-header {
    margin: 0 auto;
    // width: 98%;
    height: 180px;
  }
  .playlist-body {
    margin-top: 20px;
    width: 100%;
    .tag {
      // width: 98%;
      display: flex;
      margin: 0 auto;
      padding-bottom: 10px;
      position: relative;
      .hot-tag {
        margin-top: 10px;
        display: flex;
        position: absolute;
        right: 0;
        font-size: 10px;
        li {
          // margin-left: 5px;
          p {
            width: fit-content;
            padding: 5px 10px;
          }
        }
      }
    }
    .content {
      width: 100%;
      position: relative;
      .content-item {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
}
.active {
  border-radius: 30px;
  background-color: rgb(254, 246, 245);
  color: rgb(253, 84, 78);
}
</style>