<template>
  <div>
    <header>
      <h1>Heading</h1>
    </header>
    <!--this is the page content-->
    <div>
      <slot/>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
h1 {
  color: var(--heading-color);
  font-weight: var(--bold-text);
  font-family: var(--fonts)
}

</style>
