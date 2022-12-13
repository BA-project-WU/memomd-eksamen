<template>
  <div class="login-form"> 
    <NuxtLayout>
      <ProfileInfo/>
      <DailyRecord />
      <ProfileEdit />  
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
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "flashcards",
});
</script>

<style></style>
