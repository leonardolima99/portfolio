<script setup lang="ts">
  const { locales, setLocale } = useI18n();

  const availableLocales = computed(() => {
    return locales.value;
  });
</script>
<template>
  <div class="flex gap-2">
    <button
      type="button"
      @click="setLocale(locale.code)"
      v-for="locale in availableLocales"
      :key="locale.code"
      class="py-2 px-3 bg-slate-200 rounded-lg"
    >
      {{ locale.name }}
    </button>
  </div>
</template>
<style></style>
