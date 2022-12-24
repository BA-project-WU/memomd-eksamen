<template>
  <div class="reset-password">
    <TheHeader class="heading" heading="Reset Adgangskode"></TheHeader>
    <form @submit.prevent="submitForm" class="reset-password-form">
      <input type="password" placeholder="Ny Adgangskode" v-model="password" class="password" />
      <input type="reset-password" placeholder="Gentag Adgangskode" v-model="password" class="password" />
      <button class="save-and-login">Gem og log ind</button>
    </form>
  </div>
</template>

<script setup>


</script>

<style scoped>
.reset-password-form {
  width: 300px;
  margin: 0 auto;
}

.email {
  background-color: var(--secondary-color);
  border: none;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px;
  outline: 0;
  text-align: center;
}

.save-and-login {
  background: var(--cta-bg-color);
  width: 100%;
  border: none;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px;
  outline: 0;
  text-align: center;
}

button {
  background-color: var(--cta-bg-color);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-weight: var(--bold-text);
  padding: 10px;
  width: 300px;
}
</style>
