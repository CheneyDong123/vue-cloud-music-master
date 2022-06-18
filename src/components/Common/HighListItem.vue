<script setup lang="ts">
import { useTo } from "@/hooks";
import { computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps(["item"]);
const formatCount = computed(() => {
  let count = props.item.playCount.toString();
  count = useTo(count);
  return count;
});
const goPlaylistDetail = (id: any) => {
  router.push({ path: "/playlist", query: { id } });
};
</script>

<template>
  <div class="high-list-item-container">
    <div class="coverimg" @click="goPlaylistDetail(item.id)">
      <img :src="item.coverImgUrl" alt="" />
      <p>▷ {{ formatCount }}</p>
    </div>
    <div class="content">
      <div style="height: 50%">
        <p class="name" @click="goPlaylistDetail(item.id)">{{ item.name }}</p>
        <p class="nickname">by &nbsp;{{ item.creator.nickname }}</p>
      </div>

      <div style="height: 50%">
        <span class="tag">
          {{ item.tag }}
        </span>
        <span class="copywrite">{{ item.copywriter }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>
.high-list-item-container {
  width: 31%;
  display: flex;
  margin: 10px 10px 10px 0px;
  .coverimg {
    position: relative;
    p {
      color: white;
      position: absolute;
      top: 3px;
      right: 8px;
      font-size: 10px;
    }
    img {
      width: 150px;
      border-radius: 5px;
    }
  }
  .content {
    margin: 10px;

    .name {
      margin: 10px 0;
      color: rgb(55, 55, 55);
      font-size: smaller;
      &:hover {
        color: black;
      }
    }
    .nickname {
      margin: 15px 0;

      font-size: 10px;
      color: rgb(159, 159, 159);
    }
    .tag {
      font-size: 5px;
      width: fit-content;
      border: 1px solid rgb(253, 84, 78);
      color: rgb(253, 84, 78);
    }
    .copywrite {
      font-size: 5px;
      margin-left: 5px;
      color: rgb(207, 207, 207);
    }
  }
}
</style>