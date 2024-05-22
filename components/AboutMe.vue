<script setup lang="ts">
  defineProps({
    content: { type: String, default: "No content" },
  });
</script>
<template>
  <div class="max-w-7xl mx-auto space-y-9">
    <h2 class="font-poppins text-4.5xl font-bold text-solid-heading">
      {{ $t("about-me") }}
    </h2>
    <p class="font-poppins text-lg text-dark-content leading-relaxed">
      {{ content }}
    </p>
  </div>
</template>
<style></style>
