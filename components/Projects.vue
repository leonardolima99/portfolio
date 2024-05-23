<script setup lang="ts">
  import type { Projects } from "~/types";
  defineProps({
    data: Object as PropType<Projects>,
  });
</script>
<template>
  <div class="space-y-9">
    <h2
      class="font-poppins text-4.5xl font-bold text-solid-heading text-center"
    >
      {{ data?.headline }}
    </h2>
  </div>
</template>
<style></style>
