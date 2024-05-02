<script setup lang="ts">
  const { locale, setLocale } = useI18n();
</script>
<template>
  <div class="max-w-7xl mx-auto p-4">
    <h1>Hero</h1>
    {{ $t("welcome") }}
    <div class="flex gap-2">
      <button type="button" @click="setLocale('en')">English</button>
      <button type="button" @click="setLocale('fr')">Français</button>
      <button type="button" @click="setLocale('pt-br')">
        Portugês brasileiro
      </button>
    </div>
  </div>
</template>
<style></style>
