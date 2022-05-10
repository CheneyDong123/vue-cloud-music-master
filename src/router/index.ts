import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Home from "@/views/Home/index.vue";
import Recommend from "@/views/Home/components/Recommend.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "/home",
        redirect: "/home/recommend",
      },
      {
        path: "recommend",
        component: () => import("@/views/Home/components/Recommend.vue"),
      },
      {
        path: "playlist",
        component: () => import("@/views/Home/components/Playlist.vue"),
      },
      {
        path: "rank",
        component: () => import("@/views/Home/components/Rank.vue"),
      },
      {
        path: "artist",
        component: () => import("@/views/Home/components/Artist.vue"),
      },
      {
        path: "newsong",
        component: () => import("@/views/Home/components/Newsong.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
