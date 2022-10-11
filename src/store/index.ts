import { defineStore } from "pinia";
import { ref } from 'vue'
export const useStore = defineStore("main", {
  state: () => {
    return {
      count: 1
    };
  },
  getters: {},

  actions: {},
});

export * from "./songList";