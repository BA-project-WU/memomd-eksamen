<template>
</template>

<script setup>
const { signIn } = useSession()
// await signIn()
await signIn("Credentials", { callbackUrl: '/flashcards/' })


definePageMeta({
    auth: false
});
</script>
