<template>
  <div class="login-page">
    <div class="section1">
      <img class="logo" src="~/assets/images/logo.png" alt="this is the memomd logo" />
    </div>
    <div class="login-form">
      <form @submit.prevent="submitForm">
        <input type="email" placeholder="Email" v-model="email" class="email" />
        <input
          type="password"
          placeholder="Adgangskode"
          v-model="password"
          class="password"
        />
        <NuxtLink to="/flashcards/">
          <button type="submit" class="btn-login">
            <!-- <span v-if="isSignUp"> Sign up </span>  -->
            Log in
          </button>
        </NuxtLink>
        <!-- <div class="save-btn">
              <button @click="showModal = true">Save</button>
          </div> -->
        <!-- <ModalPopup v-show="showModal" @close-modal="showModal = false" /> -->
      </form>
    </div>
    <div class="remember-me">
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
    </div>
    <div class="forgot-pw">
      <NuxtLink to="/account/forgotpassword" class="forgot-password">
        Jeg har <span style="color: #4ed2ca">glemt</span> min adgangskode
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "false",
});

const email = ref("");
const password = ref("");
const checked = ref(false);
</script>

<style scoped>
body, html{
  margin: 0;
}
.forgot-pw {
  text-align: center;
  max-width: 100%;
  margin-top: 10px;
}
</style>
