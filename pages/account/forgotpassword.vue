<template>
  <div class="reset-password">
    <form @submit.prevent="submitForm">
      <input type="email" placeholder="Email" v-model="email" class="email" />
      <!-- <input
            type="password"
            placeholder="Nulstil Adgangskode"
            v-model="password"
            class="password"
          /> -->
    </form>
  </div>
</template>

<script setup></script>

<style scoped></style>
