<script setup lang="ts">
  import type { WorkExperiences } from "~/types";
  defineProps({
    data: Object as PropType<WorkExperiences>,
  });
</script>
<template>
  <div class="space-y-9">
    <h2
      class="font-poppins text-4.5xl font-bold text-solid-heading text-center"
    >
      {{ data?.headline }}
    </h2>
    <div class="max-w-4xl mx-auto space-y-6">
      <div
        class="flex flex-col gap-2 border-b-2 border-slate-200/80 py-6"
        v-for="job in data?.workExperience"
        :key="job.id"
      >
        <div class="flex justify-between items-center">
          <h3 class="font-poppins text-xl text-dark-content">
            {{ job.position }}
          </h3>
          <span
            class="font-poppins py-1 px-4 bg-badge-green-300 text-badge-green-600 rounded-full text-xs font-medium"
            >{{ job.category }}</span
          >
        </div>
        <div class="flex justify-between">
          <div class="flex flex-1">
            <div class="flex gap-1 items-center max-w-80 w-full">
              <span class="font-poppins text-sm font-black text-light-content"
                >X</span
              >
              <span
                class="font-poppins text-sm font-medium text-light-content min-w-60"
              >
                {{ job.employer }}
              </span>
            </div>
            <div class="flex gap-1 items-center">
              <span class="font-poppins text-sm font-black text-light-content"
                >X</span
              >
              <span
                class="font-poppins text-sm font-medium text-light-content w-full"
              >
                {{ job.location }}
              </span>
            </div>
          </div>
          <div class="flex gap-1 items-center">
            <span class="font-poppins text-sm font-black text-light-content"
              >X</span
            >
            <span
              class="font-poppins text-sm font-medium text-light-content w-full"
            >
              {{
                new Date(job.startDate).toLocaleString("default", {
                  month: "short",
                })
              }}
              - {{ job.endDate }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
