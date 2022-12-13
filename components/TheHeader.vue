<template>
    <nav>
    <header>
      <h1 :data-text="text">{{ heading }}</h1>
    </header>     
    </nav>
</template>

<script setup>
const props = defineProps({
  heading: String,
  text: String,
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
html, body{
  display: flex;
  flex-direction: column;
  min-width: 280px;
  margin: 0 auto;
}
header{
  margin-top: 100px;
  margin-bottom: 10px;
}
h1 {
  color: var(--text-color);
  font-weight: var(--bold-text);
  font-family: var(--fonts);
  text-align: center;
  font-size: var(--font-heading-size);
}
</style>