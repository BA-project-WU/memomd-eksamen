<template>
  <div v-for="post in posts">
    <h2>{{ post.title }}</h2>
    <p>{{ post.id }}</p>
    <p>{{ post.description }}</p>
    <p>{{ post.countries }}</p>
  </div>
</template>

<script setup>
const { status, data, signIn, signOut } = useSession()
status.value
data.value
await signIn()
await signOut()
</script>