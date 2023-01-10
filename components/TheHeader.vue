<template>
  <header> <!--dynamic props-->
    <h1 :data-text="text">{{ heading }}</h1>
  </header>
</template>

<script setup>
const props = defineProps({
  heading: String,
  text: String,
});
</script>

<style scoped>
header {
  background: rgb(168, 228, 192);
  background: radial-gradient(circle, rgba(168, 228, 192, 1) 35%, rgba(78, 210, 202, 1) 100%);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  margin-bottom: 10px;
  text-align: center;
}
</style>