<template>
    <div>
    <header>
      <h1 :data-text="text">{{ heading1 }}</h1>
    </header>     
    </div>
</template>

<script>
import { defineProps } from 'vue'
const props = defineProps({
  heading1: String,
  subHeading: String,
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