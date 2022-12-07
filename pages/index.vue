<template>
  <div class="startpage">
    <section class="startsection">
      <section class="section1">
        <img 
        class="logo" 
        src="~/assets/images/logo.png" 
        alt="this is the memomd logo" 
        />
      </section>
      <section class="section2">
        <button><NuxtLink to="/loginpage">Log ind</NuxtLink></button>
        <button><NuxtLink to="createuserpage">Opret Bruger</NuxtLink></button>
      </section>
    </section>
  </div>
</template>

<script setup>
//This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "false",
});
</script>

<style scoped>
.startpage {
  max-width: 480px;
  margin: 0 auto;
}
.startsection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  min-width: 280px;
}
.section1 {
  text-align: center;
  min-width: 280px;
}
.logo{
  background: rgb(168,228,192);
  background: radial-gradient(circle, rgba(168,228,192,1) 35%, rgba(78,210,202,1) 100%);padding: 100px 100px;
  margin-top: -18px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}
.section2 {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-self: center;
}
button{
  background-color: var(--primary-color);
  border: none;
  padding: 20px;
  margin: 40px 0px 0px 12px; 
  width: 200px;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
a{
  text-decoration: none;
  color: var(--text-color);
  font-weight: var(--bold-text);
}
</style>
