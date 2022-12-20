<template>
</template>

<script setup>
const { signIn } = useSession()
// await signIn()
await signIn(undefined, { callbackUrl: '/' })

definePageMeta({
    auth: false
});
</script>