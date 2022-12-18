<template>
  <div v-for="post in posts">
    <h2>{{ post.title }}</h2>
    <p>{{ post.id }}</p>
    <p>{{ post.description }}</p>
    <p>{{ post.countries }}</p>
  </div>
</template>

<script setup>
const { data: posts } = await useFetch('https://api.nuxtjs.dev/posts')
</script>