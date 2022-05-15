<script setup lang="ts">
import { _getPlaylistComment, _getHotComment } from "@/api/comment";
import { ref } from "vue";
import { useRoute } from "vue-router";
import LoadingPage from "../Common/LoadingPage.vue";
import CommentItem from "./CommentItem.vue";
const route = useRoute();
const id = route.query.id;
let comments = ref();
let hotComments = ref();
async function getComment(id: any) {
  const result = await _getPlaylistComment(id);
  comments.value = result.data.comments;
}
async function getHotComment({ id, type }: any) {
  const result = await _getHotComment({ id, type });
  hotComments.value = result.data.hotComments;
  console.log("11111", hotComments);
}
getComment(id);
getHotComment({ id: id, type: 2 });
</script>

<template>
  <div style="width: 100%">
    <template v-if="!comments">
      <LoadingPage />
    </template>
    <template v-else>
      <div class="hotComment" v-show="hotComments">
        <span class="title">热门评论</span>
        <CommentItem :comments="hotComments" />
      </div>
      <div class="latestComment">
        <span class="title">最新评论({{ comments.length }})</span>
        <CommentItem :comments="comments" />
      </div>
    </template>
  </div>
</template>

<style scoped lang='less'>
.hotComment,
.latestComment {
  margin: 35px;
  font-size: 12px;
  .title {
    font-weight: bold;
    font-size: 14px;
    color: rgb(55, 55, 55);
  }
}
</style>