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
  min-height: 100vh;
}
header{
  margin-top: 100px;
}
h1 {
  color: var(--text-color);
  font-weight: var(--bold-text);
  font-family: var(--fonts);
  text-align: center;
}
footer{
  text-align: center;
}
button{
  background-color: var(--cta-bg-color);
  border: none;
  padding: 10px;
  width: 350px;
}


</style>
