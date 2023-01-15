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
  background: radial-gradient(75.32% 93.55% at 86.67% 96.31%, #A8E4C0 0%, #47BDB5 100%);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
}
</style>