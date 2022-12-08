<template>
  <div class="reset-password">
    <form @submit.prevent="submitForm">
      <input
        type="password"
        placeholder="Ny Adgangskode"
        v-model="password"
        class="password"
      />
      <input
        type="reset password"
        placeholder="Gentag Adgangskode"
        v-model="password"
        class="password"
      />
    </form>
  </div>
</template>

<script setup></script>

<style scoped></style>
