<template>
    <div>
        <h1>This is Header</h1>
        <NuxtLink to="{{ router.base }} /">Home page</NuxtLink>
        <NuxtLink to="{{ router.base }} /about">About page</NuxtLink>
        <NuxtLink to="{{ router.base }} /contact">Contact page</NuxtLink>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>