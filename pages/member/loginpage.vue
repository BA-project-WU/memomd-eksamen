<template>
</template>

<script setup>
const { signIn } = useSession()
// await signIn()
// await signIn("Credentials", { callbackUrl: '/flashcards/' })
await signIn(undefined, { callbackUrl: '/settingspage' })


// definePageMeta({
//     auth: false
// });
</script>
