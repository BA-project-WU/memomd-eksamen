<template>
</template>

<script setup>
const { signIn } = useSession()
// await signIn()
await signIn(undefined, { callbackUrl: 'https://ba-project-wu-memomd.netlify.app/settingspage' })

definePageMeta({
    auth: false
});
</script>
