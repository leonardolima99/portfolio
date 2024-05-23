<script setup lang="ts">
  const { t } = useI18n();
  const navItems = computed(() => {
    return [
      {
        name: "Início",
        path: "/",
      },
      {
        name: t("about-me"),
        path: `#${t("id-about-me")}`,
      },
      {
        name: "Habilidades",
        path: `#${t("id-skills")}`,
      },
      {
        name: "Experiências",
        path: `#${t("id-work-experience")}`,
      },
      {
        name: "Projetos",
        path: `#${t("id-projects")}`,
      },
      {
        name: "Contato",
        path: `#${t("id-contact")}`,
      },
    ];
  });
</script>
<template>
  <div class="w-full">
    <nav class="max-w-7xl mx-auto flex justify-between py-8">
      <span>
        <NuxtLink
          to="/"
          class="bg-gradient-to-r from-emerald-500 to-violet-500 inline-block text-transparent bg-clip-text font-bold text-xl font-dm-sans cursor-pointer py-4 px-3"
        >
          Leonardo Lima
        </NuxtLink>
      </span>
      <ul class="sm:flex gap-1 hidden">
        <li v-for="item in navItems" :key="item.name">
          <a
            :href="item.path"
            class="inline-flex py-4 px-3 cursor-pointer font-dm-sans text-dark-content text-xl font-semibold hover:text-neutral-600 transition"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style></style>
