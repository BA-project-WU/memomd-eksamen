<template>
  <div>
    <h1>Overview of the Flashcards game</h1>
    <NuxtLink to="/flashcards/questionpage">Question</NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "flashcards",
});

//fetch the flascards memo game api from umbraco heartcore

useHead({
  title: "MemoMD App | Flashcards",
  meta: [
    {
      name: "description",
      content:
        "MemoMD App er especiel opbygget til medicinstuderende for at effektivisere deres læring indenfor det forskellige emner.",
    },
  ],
});
</script>

<style scoped>

</style>
