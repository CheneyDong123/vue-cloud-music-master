<script setup lang="ts">
import {
  Share,
  Download,
  CaretRight,
  Plus,
  CollectionTag,
} from "@element-plus/icons-vue";
import { defineProps } from "vue";
import { useGetTime } from "@/hooks/index";

const { item } = defineProps(["item"]);
const { name, creator, createTime, subscribedCount, shareCount } = item;
</script>

<template>
  <div class="description-title" v-if="item">
    <p class="title">{{ name }}</p>
    <div class="creator">
      <img :src="creator.avatarUrl" alt="avatarImg" />
      <span>{{ creator.nickname }}</span>
      <span>{{ useGetTime(createTime) }}创建</span>
    </div>
    <div class="utils">
      <el-button-group style="margin-right: 12px">
        <el-button type="danger" :icon="CaretRight" round>播放全部</el-button>
        <el-button type="danger" :icon="Plus" round></el-button>
      </el-button-group>
      <el-button :icon="CollectionTag" round>
        收藏({{ subscribedCount }})
      </el-button>
      <el-button :icon="Share" round> 分享({{ shareCount }}) </el-button>
      <el-button :icon="Download" round> 下载全部 </el-button>
    </div>
  </div>
</template>

<style scoped lang='less'>
.description-title {
  .title {
    font-size: 24px;
    font-weight: bold;
    color: rgb(55, 55, 55);
  }
  .creator {
    margin-top: 10px;
    display: flex;
    align-items: center;
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
    span {
      font-size: 10px;
      margin-left: 10px;
      color: rgb(80, 125, 175);
      & + span {
        font-size: 9px;
        color: rgb(103, 103, 103);
      }
    }
  }
  .utils {
    margin-top: 12px;
  }
}
</style>