<script setup lang="ts">
import { useStore, useTodos } from "./store";

const store = useStore();
const todo = useTodos();

const { count } = store;
const { name } = todo;
console.log(count);
console.log(name);
</script>

<template></template>

<style>
</style>
