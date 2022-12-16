<template>
  <div class="profile-page">
    <NuxtLayout>
      <ProfileInfo/>
      <DailyRecord />
      <ProfileEdit />  
    </NuxtLayout>
  </div>
</template>

<script setup>
//https://medium.com/@shahriarrahi/create-api-with-nuxt3-adcb7b6a17dd
definePageMeta({
  layout: "flashcards",
});
</script>

<style>
.profile-page{
  height: 100vh;
}
</style>
