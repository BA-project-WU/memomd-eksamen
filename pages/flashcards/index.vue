<template>
  <div>
    <h1>Overview of the Flashcards game</h1>
    <div><p>moduler</p>
      <div>
        <p>emner</p>
        <p>beskrivelse</p>
        <button>Spil</button>
      </div>
    </div>
    <NuxtLink to="/flashcards/questionpage">Question</NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "flashcards",
});

//const { id } = useRoute().params

//fetch the flascards memo game api from umbraco heartcore
//const { data: question } = await useFetch(uri)

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

<style scoped></style>
