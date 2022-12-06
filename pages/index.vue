<template>
  <div>
   <img src="~/assets/images/logo.png" alt="this is the memomd logo"/>
  <h1>Using Default layout</h1>
    <p>
      Nuxt is an open-source framework under MIT license for building modern and performant web applications that can be deployed on any platform running JavaScript.
    </p>
  </div>
</template>

<script setup>
// This will work in both `<script setup>` and `<script>`
// definePageMeta({
//   layout: "false",
// });
</script>

<style scoped>
h1 {
  background-color: var(--bg-color);
  color: var(--heading-color);
  padding: 100px;
}
p{
  color: var(--text-color),
}
</style>
