<template>
  <div>
  <NuxtLink to="/">Home</NuxtLink>
  <NuxtLink to="/about">About</NuxtLink>
    <!-- <NuxtWelcome /> -->
    <h1>This is the root of our application that should be deleted</h1>
    <p><b>app.vue </b>is not gonna work, we should use pages to navigate to our routes</p>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
h1{
    background-color: $primary;
    color: $white;
}
</style>
