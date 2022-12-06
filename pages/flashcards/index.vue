<template>
    <div>
        <h1>This is the default frontpage of the memo game</h1>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'default',
})

//fetch the flascards memo game api from umbraco heartcore

useHead({
  title: 'MemoMD App | Flashcards',
  meta: [
    { name: 'description', content: 'MemoMD App er especiel opbygget til medicinstuderende for at effektivisere deres læring indenfor det forskellige emner.'}
  ]
})
</script>

<style scoped>

</style>