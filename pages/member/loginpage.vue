<template>
  <!-- <div v-for="post in posts">
    <h2>{{ post.title }}</h2>
    <p>{{ post.id }}</p>
    <p>{{ post.description }}</p>
    <p>{{ post.countries }}</p>
  </div> -->

</template>

<script setup>
// const { data: posts } = await useFetch('https://api.nuxtjs.dev/posts')
// file: e.g ~/pages/login.vue
const { status, data, signIn, signOut } = useSession()
status.value // Session status: `unauthenticated`, `loading`, `authenticated`
data.value // Session data, e.g., expiration, user.email, ...
await signIn() // Sign in the user
await signOut() // Sign out the user
</script>