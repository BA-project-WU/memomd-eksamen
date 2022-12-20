<template>
</template>

<script setup>
const { status, data, signIn, signOut } = useSession()
status.value
data.value
await signIn()
// await signOut()
definePageMeta({
    auth: false
});
</script>