<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useTo } from "@/hooks/index";
import { defineProps } from "vue";

const router = useRouter();
const props = defineProps(["item"]);
const name = computed(() => props.item.name);
const picUrl = computed(() => props.item.picUrl);
const playCount = computed(() => props.item.playCount);
const creator = computed(() => props.item.creator);
const id = computed(() => props.item.id);
const coverImgUrl = computed(() => props.item.coverImgUrl);

const formatCount = computed(() => {
  let count = playCount.value.toString();
  count = useTo(count);
  return count;
});
// const { name, picUrl, playCount, creator, id, coverImgUrl } = toRefs(items.value);
const goPlaylistDetail = () => {
  router.push({ path: "/playlist", query: { id: id.value } });
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