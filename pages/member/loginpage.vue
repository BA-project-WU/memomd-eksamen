<template>
</template>

<script setup>
const { signIn } = useSession()
await signIn(undefined, { callbackUrl: '/flashcards/' })


definePageMeta({
    auth: false
});
</script>