<template>
  <div>
  <NuxtLayout>
    <h1>Overview of the Flashcards game</h1>
    <div>
      <p>moduler</p>
      <div class="card" >
        <p>emner</p>
        <p>beskrivelse</p>
        <NuxtLink to="/flashcards/questionpage">Spil</NuxtLink>
        {{ data._embedded.content.parentId }}
      </div>
    </div>
    <NuxtLink to="/flashcards/questionpage">Question</NuxtLink>
  </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "flashcards",
});

//const { id } = useRoute().params

//fetch the flascards memo game api from umbraco heartcore
const uri = `https://cdn.umbraco.io/content/a157b211-b293-4192-b36b-2655e3b8d7d1/children?`
const { data } = await useFetch(uri, {
  headers: { 'Umb-Project-Alias': 'nicole-ba-test', 'Api-Key': 'BC2nwQgvNxNvZuoL4c6K'}
})

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
