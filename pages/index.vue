<template>
  <main class="start-page">
    <header class="header">
      <img class="logo-start" src="~/assets/images/logo.png" alt="MemoMD logo" style="height: inherit; width: auto" />
    </header>
    <section class="start-options">
      <NuxtLink to="member/loginpage">
        <button>Log ind</button>
      </NuxtLink>
      <NuxtLink to="member/createuserpage">
        <button>Opret bruger</button>
      </NuxtLink>
    </section>
  </main>
</template>

<script setup>
definePageMeta({ layout: "false" });
</script>

<style scoped>
.start-page {
  min-height: 100vh;
}

.header {
  /* background: rgb(168, 228, 192); */
  background: radial-gradient(75.32% 93.55% at 86.67% 96.31%, #A8E4C0 0%, #47BDB5 100%);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  height: 150px;
  max-width: 100%;
  text-align: center;
  vertical-align: middle;
}

.start-options {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 50vh;
}

/* Extra small devices (phones, 600px and down) */
/* @media only screen and (max-width: 600px) {
  .logo-start {
    height: auto;
    width: 100vw;
  }
} */
</style>