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
  position: fixed;
  width: 100%;
  min-width: 280px;
}
.startsection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  position: relative;
  margin: auto;
  top: 100px;
  right: 0;
  width: 480px;
}
.section1 {
  text-align: center;
  width: 480px;
}
.logo{
  background-color: var(--primary-color); 
  padding: 100px 100px;
}
.section2 {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
button{
  background-color: var(--primary-color);
  border: none;
  padding: 10px;
  margin: 40px 0px 0px 64px; 
  width: 350px;
}
a{
  text-decoration: none;
  color: var(--text-color);
  font-weight: var(--bold-text);
}
</style>
