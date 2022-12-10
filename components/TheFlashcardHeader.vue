<template>
  <nav class="heading-overview">
    <header>
      <h1 :data-text="text">{{ flashcardHeading }}</h1>
    </header>
  </nav>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  flashcardHeading: String,
  text: String,
});
</script>

<style scoped>
header {
  margin-bottom: 10px;
}
</style>
