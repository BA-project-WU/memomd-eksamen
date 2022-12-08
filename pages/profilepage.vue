<template>
  <div class="login-form">
    <form @submit.prevent="submitForm">
      <input 
      type="email" 
      placeholder="Ændre Email" 
      v-model="email" 
      class="email" />
      <input
        type="password"
        placeholder=" Ændre Adgangskode"
        v-model="password"
        class="password"
      />
      <input
        type="delete"
        placeholder="Slet Bruger"
        v-model="input"
        class="password"
      />
      <NuxtLink to="/flashcards/">
        <button type="submit" class="btn-login">
          <!-- <span v-if="isSignUp"> Sign up </span>  -->
          Overview
        </button>
      </NuxtLink>
      <!-- <div class="save-btn">
              <button @click="showModal = true">Save</button>
          </div> -->
      <!-- <ModalPopup v-show="showModal" @close-modal="showModal = false" /> -->
    </form>
  </div>
</template>

<script setup></script>

<style scoped></style>
