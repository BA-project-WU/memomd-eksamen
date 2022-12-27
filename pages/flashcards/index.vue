<template>
  <div>
    <NuxtLayout>
      <!-- <h1>Oversigt over Flashcards-spillet</h1> -->
      <div>
        <div v-for="item in courses">
          <h3>{{ item.name }}</h3>
          <OverviewSubject :course="item"/>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "flashcards",
});

// de to linier hereunder skal være pa alle sider der ønskes password beskyttet.
const token = useCookie("token").value
if(!token){ navigateTo('/member/loginpage')}

//const { id } = useRoute().params
let courses = {}
//fetch the flascards memo game api from umbraco heartcore
const uri = `https://cdn.umbraco.io/content/a157b211-b293-4192-b36b-2655e3b8d7d1/children`
await useFetch(uri, {
  headers: { 'Umb-Project-Alias': 'nicole-ba-test', 'Api-Key': 'BC2nwQgvNxNvZuoL4c6K' },
  method: "get",
  onResponse({ request, response, options }) {
  courses = response._data._embedded.content
  }
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

<style scoped>


</style>
