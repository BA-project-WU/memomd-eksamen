<template>
  <nav class="heading-overview">
    <header>
      <h1 :data-text="text">{{ flashcardHeading }}</h1>
    </header>
  </nav>
</template>

<script setup>
const props = defineProps({
  flashcardHeading: String,
  text: String,
});
</script>

<style scoped>

</style>
