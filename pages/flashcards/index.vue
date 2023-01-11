<template>
  <div class="overall-wrapper-game">
    <NuxtLayout>
      <div class="courses">
        <div v-for="item in courses">
          <h2>{{ item.name }}</h2>
          <details class="show-detail">
            <summary class="text1">Semester {{ item.semester[0] }}</summary>
            <h4>Om Uddannelse:</h4>
            {{ item.description }}
          </details>
          <h4 class="slide">Slide fra højre - vælg et emne</h4>
          <OverviewSubject :course="item" />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({ layout: "flashcards" });
// de to linier hereunder skal være pa alle sider der ønskes password beskyttet.
const token = useCookie("token").value;
if (!token) {
  navigateTo("/member/loginpage");
}
let courses = {};
//fetch the flascards memo game api from umbraco heartcore
const uri = `https://cdn.umbraco.io/content/a157b211-b293-4192-b36b-2655e3b8d7d1/children`;
await useFetch(uri, {
  headers: {
    "Umb-Project-Alias": "nicole-ba-test",
    "Api-Key": "BC2nwQgvNxNvZuoL4c6K",
    Authorization: "Bearer " + token,
  },
  method: "get",
  onResponse({ request, response, options }) {
    courses = response._data._embedded.content;
  },
});

useHead({
  title: "MemoMD",
  meta: [
    {
      name: "description",
      content: "MemoMD App er especiel opbygget til medicinstuderende for at effektivisere deres læring indenfor det forskellige emner.",
    },
  ],
});
</script>

<style scoped>
.overall-wrapper-game {
  z-index: 1;
}

details {
  margin: 10px 0;
}

details[open] summary {
  margin: 10px 0;
}

.show-detail,
.text1 {
  margin: 10px 0;
}

summary {
  font-weight: bold;
}

.slide {
  margin-top: 10px;
}
</style>