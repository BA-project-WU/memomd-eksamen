<template>
  <div>
    <header>
      <h1>Heading</h1>
    </header>
    <!--underneath is the page content-->
    <div>
      <slot/>
    </div>
    <footer>
      <button>Cancel</button>
    </footer>
  </div>
</template>

<script setup>

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
}
h1 {
  color: var(--text-color);
  font-weight: var(--bold-text);
  font-family: var(--fonts);
  text-align: center;
  font-size: var(--font-heading-size);
}
footer{
  text-align: center;
}
button{
  background-color: var(--cta-bg-color);
  border: none;
  padding: 10px;
  width: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}


</style>
