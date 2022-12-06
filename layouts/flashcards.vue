<template>
    <div>
      <header>
        <nav>
          <NuxtLink to="/">Back to Home</NuxtLink>
        </nav>
      </header>
      <!--this is the page content-->
      <div>
        <slot/>
      </div>
      <footer>
        <ul>
         <li><NuxtLink to="/settingspage">Settings</NuxtLink></li>
         <li><NuxtLink to="/profilepage">Profile</NuxtLink></li>
        </ul>
      </footer>
    </div>
  </template>

<script setup>

</script>

<style scoped>

</style>