<template>
  <div>
    <h1 class="text-xl font-bold mb-2">Notes</h1>
    <p class="mb-4">built with nuxt 3</p>
    <ul class="border shadow divide-y">
      <li v-for="user of data" :key="user.id">
        <NuxtLink :to="`${user.id}`">
          <span>{{ user.title }}</span>
          <span>completed: {{ user.completed }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('count', () =>
  $fetch('https://jsonplaceholder.typicode.com/todos')
);
</script>

<style></style>
