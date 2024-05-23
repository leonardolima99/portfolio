<script setup lang="ts">
  import type { Techs } from "~/types";
  defineProps({
    data: Object as PropType<Techs>,
  });
</script>
<template>
  <div>
    <h2
      class="font-poppins text-4.5xl font-bold text-solid-heading text-center"
    >
      {{ data?.headline }}
    </h2>
    <div
      class="mt-9 font-poppins text-lg text-dark-content leading-relaxed text-center"
      v-html="data?.content.html"
    ></div>
    <div
      class="mt-20 flex flex-wrap items-center justify-center gap-x-24 gap-y-14"
    >
      <NuxtImg
        :src="tech.image.url"
        v-for="tech in data?.techs"
        :key="tech.id"
        class="max-w-28"
        :alt="tech.alt"
        :title="tech.name"
      />
    </div>
  </div>
</template>
<style></style>
