<template>
  <div>
    <TheFlashcardHeader />
    <!--this is the page content-->
    <div class="content-container">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
// const { flashcardHeading } = defineProps(["flashcardHeading"]);
</script>

<style scoped>
body {
  overflow-x: hidden;
}

.content-container {
  min-height: 100vh;
  margin: 5% 3%;
}

.start-the-game {
  /* position: relative; */
  text-align: center;
  /* top: -50%; */
}

li {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 10px;
}

a {
  color: var(--text-color);
  text-decoration: none;
}
</style>