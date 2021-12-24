<script setup lang="ts">
interface Question {
  id: number;
  title: string;
}
const config = useRuntimeConfig();
const { data, refresh } = await useFetch<string, Question[]>(
  `${config.BASE_URL}/questions`
);
</script>

<style scoped lang="scss"></style>

<template>
  <div>
    <h1 class="text-xl font-bold mb-2">Notes</h1>
    <p class="mb-4">built with nuxt 3</p>
    <ul class="border shadow divide-y">
      <li v-for="user of data" :key="user.id">
        <NuxtLink :to="`${user.id}`">
          <span>{{ user.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
