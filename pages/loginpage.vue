<template>
  <div class="login-page">
    <div class="section1">
      <img class="logo" src="~/assets/images/logo.png" alt="this is the memomd logo" />
    </div>
    <div class="login-input">
      <button class="email">Email</button>
      <button class="adgangskode">Adgangskode</button>
      <button>Log ind</button>
    </div>
    <div class="remember-me">
      <input type="checkbox" id="checkbox" v-model="checked" value="Husk Mig" />
      <label for="checkbox" value="Husk Mig">{{ checked }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
definePageMeta({
  layout: "false",
});

const checked = ref(true);
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  min-width: 280px;
}
.section1 {
  text-align: center;
  min-width: 280px;
  margin-bottom: 20px;
}
.logo {
  background: rgb(168, 228, 192);
  background: radial-gradient(
    circle,
    rgba(168, 228, 192, 1) 35%,
    rgba(78, 210, 202, 1) 100%
  );
  padding: 100px 100px;
  margin-top: -18px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}
.login-input{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}
.email,
.adgangskode {
  background-color: var(--secondary-color);
  border: none;
  margin: 10px;
  padding: 10px;
  width: 280px;
}
button {
  background-color: var(--cta-bg-color);
  border: none;
  padding: 10px;
  width: 280px;
  margin: 10px;
}
.remember-me {
  text-align: left;
  margin-left: 28px;
}
</style>
