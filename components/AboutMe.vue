<script setup lang="ts">
  import type { About } from "~/types";
  defineProps({
    data: Object as PropType<About>,
  });
</script>
<template>
  <div class="space-y-9">
    <h2
      class="font-poppins text-4.5xl font-bold text-solid-heading text-center"
    >
      {{ data?.headline }}
    </h2>
    <div
      class="font-poppins text-lg text-dark-content leading-relaxed text-center"
      v-html="data?.content.html"
    ></div>
  </div>
</template>
<style></style>
