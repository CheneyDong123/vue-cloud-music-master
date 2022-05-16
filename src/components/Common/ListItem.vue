<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useTo } from "@/hooks/index";

const router = useRouter();

const { item } = defineProps(["item"]);
const { name, picUrl, playCount, creator, id, coverImgUrl } = item;
const formatCount = computed(() => {
  let count = playCount.toString();
  count = useTo(count);
  return count;
});
const goPlaylistDetail = () => {
  router.push({ path: "/playlist", query: { id } });
};
</script>

<template>
  <li class="playlist-item" @click="goPlaylistDetail()">
    <div class="container">
      <div class="count">▷ {{ formatCount }}</div>
      <template v-if="creator">
        <div class="copywriter">
          <i class="iconfont icon-yonghu" />
          {{ creator.nickname }}
        </div>
      </template>
      <img :src="picUrl || coverImgUrl" alt="COVERIMG" class="coverImg" />
    </div>
    <p>{{ name }}</p>
  </li>
</template>

<style scoped lang='less'>
.playlist-item {
  margin-bottom: 20px;
  padding: 5px 10px;
  width: 18%;
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .count {
      color: white;
      font-size: 10px;
      position: absolute;
      top: 3px;
      right: 8px;
    }

    .coverImg {
      border-radius: 7px;
      width: 100%;
      margin: 0 auto;
    }

    .copywriter {
      font-size: 8px;
      color: white;
      position: absolute;
      bottom: 10px;
      left: 8px;
      .icon-yonghu {
        font-size: 8px;
      }
    }
  }
  p {
    font-size: small;
  }
}
</style>