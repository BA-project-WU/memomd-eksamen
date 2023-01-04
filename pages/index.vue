<template>
  <main class="startpage">
    <section class="startsection">
      <section class="section1">
        <img
          class="logo-start"
          src="~/assets/images/logo.png"
          alt="this is the memomd logo"
        />
      </section>
      <section class="section2">
        <button>
          <NuxtLink to="member/loginpage">Log ind</NuxtLink>
        </button>
        <button>
          <NuxtLink to="member/createuserpage">Opret bruger</NuxtLink>
        </button>
      </section>
    </section>
  </main>
</template>

<script setup>
// const countStore = useCountStore();

//This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "false",
});

const runtimeConfig = useRuntimeConfig();
</script>

<style scoped>
.startsection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  min-width: 280px;
}

.section2 {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-self: center;
}
.section1 {
  width: 100%;
}
button {
  background-color: var(--primary-color);
  border: none;
  font-size: var(--font-text-size);
  padding: 20px;
  margin: 30px 0px 0px 12px;
  width: 200px;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: var(--bold-text);
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .logo-start {
    width: 100vw;
    height: auto;
  }
}
</style>
