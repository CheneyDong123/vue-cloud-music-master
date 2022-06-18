<script setup lang="ts">
import { _getHighQuality } from "@/api/playlist";
import { ref } from "vue";
import { useRoute } from "vue-router";
import HighListItem from "@/components/Common/HighListItem.vue";

let highQuality = ref([]);

const route = useRoute();
const cat = route.query.cat;
async function getHighQuality(cat: any) {
  const result = await _getHighQuality(cat);

  highQuality.value = result.data.playlists;
}

getHighQuality(cat);
</script>

<template>
  <div class="container">
    <el-scrollbar>
      <p>精品歌单</p>
      <div class="content">
        <HighListItem
          v-for="(item, index) in highQuality"
          :key="index"
          :item="item"
        />
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped lang='less'>
.container {
  // margin: 50px 0 40px 0;
  margin-left: 40px;
  height: 100%;
  p {
    margin-top: 40px;
    font-weight: bold;
    font-size: larger;
  }
  .content {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>