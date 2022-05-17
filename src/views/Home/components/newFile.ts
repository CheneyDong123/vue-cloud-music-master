import {
_getHighQuality,
_getHotCategory,
_getTopPlaylist
} from "@/api/playlist";
import { _getPlaylistCatlist } from "@/api/catlist";
import { formatCategory } from "@/utils/format";
import { ref, watchEffect } from "vue";

export default await (async () => {
let catlist = ref();
let currentCat = ref("全部歌单");
let isShow = ref(false);
let playlists = ref();
let hotCatlist = ref();
let categories = ref();
let highQuality = ref();
let sub = ref();
let sum = ref();

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
console.log("1111", result);

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
// @ts-ignore
return (await import('vue')).defineComponent({
setup() {
() => {
// @ts-ignore
`url(highQuality[0].coverImgUrl;
// @ts-ignore
[ListItem, PlaylistTags, HighQuality, ];
// @ts-ignore
[vShow, highQuality, isShow, currentCat, hotCatlist, changeCat, playlists, sum];
};
return {
};
},
});
})();
`;
};
}
});
});
