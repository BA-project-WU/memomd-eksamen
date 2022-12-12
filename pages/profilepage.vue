<template>
  <div class="login-form">
    <div>
      <ProfileInfo/>
    </div>
    <div>
      <DailyRecord />
    </div>
    <div>
      <ProfileEdit />
    </div>
    <div>
      <NuxtLink to="/flashcards/">
        <button type="submit" class="btn-login">
          <!-- <span v-if="isSignUp"> Sign up </span>  -->
          Overview
        </button>
      </NuxtLink>
    </div>

    <!-- <div class="save-btn">
              <button @click="showModal = true">Save</button>
          </div> -->
    <!-- <ModalPopup v-show="showModal" @close-modal="showModal = false" /> -->
  </div>
</template>

<script setup></script>

<style></style>
