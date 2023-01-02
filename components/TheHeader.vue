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
  height: 100px;
  margin-bottom: 10px;
  background: rgb(168, 228, 192);
    background: radial-gradient(circle,
        rgba(168, 228, 192, 1) 35%,
        rgba(78, 210, 202, 1) 100%);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
h1 {
  color: var(--text-color);
  font-weight: var(--bold-text);
  font-family: var(--fonts);
  text-align: center;
  font-size: var(--font-heading-size);
}

</style>