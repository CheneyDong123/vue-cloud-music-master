<script setup lang="ts">
import { _getPlaylistDetail } from "@/api/playlist";
import { ref } from "vue";
import { LocationQueryValue, useRoute } from "vue-router";
import LoadingPage from "@/components/Common/LoadingPage.vue";
import SongList from "@/components/SongList/index.vue";
import DescriptionTitle from "@/components/Common/DescriptionTitle.vue";
import DesciptionDetail from "@/components/Common/DesciptionDetail.vue";

const route = useRoute();
const id = route.query.id;
let playlistDetail = ref();
let currentIndex = ref(1);
async function test(id: LocationQueryValue | LocationQueryValue[]) {
  const result = await _getPlaylistDetail(id);
  playlistDetail.value = result.data.playlist;
  console.log(playlistDetail.value);
}
const change = (index: number) => {
  currentIndex.value = index;
};
test(id);
</script>

<template>
  <div style="height: 100%">
    <el-scrollbar>
      <div v-if="!playlistDetail">
        <LoadingPage />
      </div>
      <div v-else>
        <div class="playlist-header">
          <div class="coverImg">
            <img :src="playlistDetail.coverImgUrl" alt="cover" />
          </div>
          <div class="description">
            <DescriptionTitle :item="playlistDetail" />
            <DesciptionDetail :item="playlistDetail" />
          </div>
        </div>
        <div class="playlist-body">
          <div class="playlist-body-bar">
            <ul>
              <li
                :class="{
                  active: currentIndex == 1,
                  common: currentIndex !== 1,
                }"
                @click="change(1)"
              >
                歌曲列表
              </li>
              <li
                :class="{
                  active: currentIndex == 2,
                  common: currentIndex !== 2,
                }"
                @click="change(2)"
              >
                评论({{ playlistDetail.commentCount }})
              </li>
              <li
                :class="{
                  active: currentIndex == 3,
                  common: currentIndex !== 3,
                }"
                @click="change(3)"
              >
                收藏者
              </li>
            </ul>
          </div>
          <div class="songList">
            <SongList :songList="playlistDetail.tracks" />
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped lang='less'>
.playlist-header {
  display: flex;
  margin: 30px;
  .coverImg {
    height: 200px;
    width: 200px;
    img {
      min-width: 200px;
      width: 100%;
      border-radius: 8px;
    }
  }
  .description {
    margin-left: 20px;
  }
}

.playlist-body {
  .playlist-body-bar {
    margin-left: 40px;
    ul {
      display: flex;
      li {
        height: 30px;
        width: fit-content;
        margin-right: 25px;
      }
    }
  }
  .songList {
    margin-top: 10px;
  }
}

.changeNum {
  color: rgb(103, 103, 103);
}

.active {
  font-size: 19px;
  font-weight: bold;
  color: rgb(55, 55, 55);
  &:after {
    content: "";
    width: 75%;
    height: 1px;
    display: block;
    margin: 0 auto;
    border-bottom: 4px solid rgb(233, 77, 71);
  }
}

.common {
  margin-top: 2px;
  font-size: 14px;
}
</style>