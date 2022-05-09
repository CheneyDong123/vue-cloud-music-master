import { defineStore } from "pinia";
export const useStore = defineStore("main", {
  state: () => {
    return {
      count: 1
    };
  },
  getters: {},

  actions: {},
});

export const useTodos = defineStore("todos" ,{
  state: ()=>{
    return {
      name: "123"
    }
  }
})