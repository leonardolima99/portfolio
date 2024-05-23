<script setup lang="ts">
  import type { Contact } from "~/types";
  defineProps({
    data: Object as PropType<Contact>,
  });
</script>
<template>
  <div class="py-20">
    <h2
      class="font-poppins text-4.5xl font-bold text-solid-heading text-center"
      v-html="data?.headline.html"
    ></h2>
  </div>
</template>
<style></style>
