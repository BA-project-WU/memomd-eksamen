<template>
  <div>
  <h1>This is the Home</h1>
    <NuxtLink to="/">Home page</NuxtLink>
    <NuxtLink to="/profilepage/">Profile</NuxtLink>
    <NuxtLink to="/settingspage/">Settings</NuxtLink>
    <NuxtLink to="/flashcards/">Overview</NuxtLink>
    <NuxtLink to="/flashcards/questionpage">Question page</NuxtLink>
  </div>
  <div>
    <p>
      Nuxt is an open-source framework under MIT license for building modern and performant web applications that can be deployed on any platform running JavaScript.
    </p>
  </div>
</template>

<script setup>
// This will work in both `<script setup>` and `<script>`
// definePageMeta({
//   layout: "false",
// });
</script>

<style scoped>
h1 {
  background-color: var(--bg-color);
  color: var(--heading-color);
  padding: 100px;
}
p{
  color: var(--text-color),
}
</style>
