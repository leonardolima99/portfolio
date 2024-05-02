<script setup lang="ts">
  const navItems = [
    {
      name: "Início",
      path: "/",
    },
    {
      name: "Sobre Mim",
      path: "#sobre-mim",
    },
    {
      name: "Habilidades",
      path: "#habilidades",
    },
    {
      name: "Experiências",
      path: "#experiencias",
    },
    {
      name: "Projetos",
      path: "#projetos",
    },
    {
      name: "Contato",
      path: "#contato",
    },
  ];
</script>
<template>
  <div class="w-full h-15 px-2">
    <nav class="max-w-7xl mx-auto flex justify-between py-2">
      <span>
        <NuxtLink to="/" class="inline-flex p-4 cursor-pointer">
          Leonardo Lima
        </NuxtLink>
      </span>
      <ul class="flex gap-2">
        <li v-for="item in navItems" :key="item.name">
          <NuxtLink :to="item.path" class="inline-flex p-4 cursor-pointer">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style></style>
