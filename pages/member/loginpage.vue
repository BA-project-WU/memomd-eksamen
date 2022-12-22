<template>
</template>

<script setup>
const { signIn } = useSession()
// await signIn()
await signIn("Credentials", { callbackUrl: 'https://ba-project-wu-memomd.netlify.app/flashcards' })

definePageMeta({
    auth: false
});
</script>
