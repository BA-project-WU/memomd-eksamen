<template>
</template>

<script setup>
const { signIn } = useSession()
// await signIn()
await signIn(undefined, { callbackUrl: '/settingspage' })

definePageMeta({
    auth: false
});
</script>
