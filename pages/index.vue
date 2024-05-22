<script setup lang="ts">
  import { queryGetData as query } from "~/services";
  import type { HomePage } from "~/types";
  const { locale } = useI18n();

  const variables = {
    lang: locale.value,
  };
  const response = useAsyncQuery<HomePage>(query, variables);
</script>
<template>
  <div class="max-w-7xl w-full mx-auto px-4">
    <Navbar />
    <Hero id="inicio" :data="response.data.value?.page.hero" />
    <AboutMe id="sobre-mim" :content="'sa'" />
    <Skills id="habilidades" />
    <Experience id="experiencia" />
    <Projects id="projetos" />
    <Contact id="contato" />
  </div>
</template>
<style>
  h1 strong,
  h2 strong {
    @apply bg-gradient-to-r from-emerald-500 to-violet-500 inline-block text-transparent bg-clip-text font-bold;
  }
</style>
