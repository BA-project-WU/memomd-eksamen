<template>
  <nav>
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

<style lang="scss" scoped></style>
