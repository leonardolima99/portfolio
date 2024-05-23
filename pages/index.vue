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
  <div class="max-w-7xl w-full mx-auto px-4 space-y-16">
    <Navbar />
    <Hero :id="$t('id-hero')" :data="response.data.value?.page.hero" />
    <AboutMe :id="$t('id-about-me')" :data="response.data.value?.page.about" />
    <Skills :id="$t('id-skills')" :data="response.data.value?.page.techs" />
    <Experience
      :id="$t('id-work-experience')"
      :data="response.data.value?.page.workExperiences"
    />
    <Projects
      :id="$t('id-projects')"
      :data="response.data.value?.page.projects"
    />
    <Contact :id="$t('id-contact')" :data="response.data.value?.page.contact" />
    <div class="w-full h-40 bg-slate-300"></div>
  </div>
</template>
<style>
  html {
    scroll-behavior: smooth;
  }
  h1 strong,
  h2 strong,
  h2 a {
    @apply bg-gradient-to-r from-emerald-500 to-violet-500 inline-block text-transparent bg-clip-text font-bold;
  }
</style>
