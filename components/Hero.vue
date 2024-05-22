<script setup lang="ts">
  import type { Hero } from "~/types";
  defineProps({
    data: Object as PropType<Hero>,
  });
</script>
<template>
  <div
    class="h-[calc(100vh-124px)] pb-[124px] flex gap-2 justify-between items-center flex-wrap"
  >
    <h1
      class="text-6xl font-bold font-poppins text-solid-heading leading-tight"
      v-html="data?.headline.html"
    ></h1>
    <div
      class="p-2 w-96 aspect-square bg-gradient-to-t from-emerald-500 to-violet-500 rounded-full"
    >
      <NuxtImg :src="data?.photo.url" class="w-96 max-w-full rounded-full" />
    </div>
  </div>
</template>
<style></style>
