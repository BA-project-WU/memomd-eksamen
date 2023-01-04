<template>
  <div class="section-forgot-password">
    <TheHeader class="heading" heading="Heading er nu dynamic"></TheHeader>
    <form @submit.prevent="submitForm" method="post" class="forgot-password-form">
      <input type="email" placeholder="Email" v-model="email" class="email" />
      <!-- <input
            type="password"
            placeholder="Nulstil Adgangskode"
            v-model="password"
            class="password"
          /> -->
      <button class="forgot-password">Nulstil Adgangskode</button>
    </form>
  </div>
</template>


<script setup>
// definePageMeta({ auth: false });
</script>

<style scoped>
.email {
  background-color: var(--secondary-color);
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

.forgot-password {
  background: var(--cta-bg-color);
  width: 100%;
  border: none;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px;
  outline: 0;
  text-align: center;
}
</style>
