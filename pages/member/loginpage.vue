<template>
  <div class="login-page">
    <TheHeader class="heading" heading="Log ind"></TheHeader>
    <form @submit.prevent="memberLogin">
      <!-- <p style="color:red">{{ errorMessage }}</p><br /> -->
      <label for="username">Brugernavn</label>
      <input autocomplete="on" type="text" v-model="username" placeholder="Dit brugernavn..." />
      <label autocomplete="on" id="password" for="password">Adgangskode</label>
      <input type="password" v-model="password" placeholder="Din adgangskode..." />
      <p class="error-message">{{ errorMessage }}</p>
      <input type="submit" class="button" value="Log ind" @click="login()" />
    </form>
    <div class="remember-me">
      <label for="check">Husk mig</label>
      <input type="checkbox" v-model="remember" value="1">
    </div>
    <p class="forgot-password" @click="forgotPassword()">Jeg har
      <span style="color:var(--primary-color);">glemt</span>
      min adgangskode
    </p>
    <NuxtLink to="/" class="goback-arrow">
      <font-awesome-icon icon="fa fa-arrow-left" />
    </NuxtLink>
  </div>
</template>

<script setup>
let username;
let password;
let remember;
const errorMessage = ref("");
const { umbracoProjectAlias } = useRuntimeConfig();
async function login() {
  await useFetch(`https://cdn.umbraco.io/member/oauth/token`, {
    method: "POST",
    headers: {
      "umb-project-alias": umbracoProjectAlias,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=password&username=" + username + "&password=" + password
    ,
    onResponse({ request, response, options }) {
      if (response._data.error) {
        errorMessage.value = response._data.error
      } else {

        if (remember) { //if checkbox remember is true
          const date = new Date(Date.now() + (3600 * 1000 * 24 * 365)) // create date one year from now.
          const token = useCookie("token", { expires: date }) // save the cookie for one year
          token.value = response._data.access_token // save the token in the cookie
          useCookie("username", { expires: date }).value = username // save the username in a cookie (for one year)
        } else {
          const token = useCookie("token") // create a session cookie (only valid for current session)
          token.value = response._data.access_token // save the token in the cookie
          useCookie("username").value = username // save the username in a cookie (for current session)
        }
        navigateTo('/flashcards/')
      }
    },
  });
}
// fix later
async function forgotPassword() {
  alert("Denne funktion virker ikke endnu")
}
</script>

<style scoped>
.login-page {
  min-height: 100%;
  max-width: 100vw;
}

.remember-me {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  /* width: 50vw; */
}

input[type="checkbox"] {
  margin: 0 0 0 20px;
  width: auto;
}

.forgot-password {
  margin-top: 20px;
  padding: 20px;
  text-align: center;
}
</style>