<template>
  <div class="login-page">
    <TheHeader class="heading" heading="Log ind"></TheHeader>
    <form @submit.prevent="memberLogin">
      <label for="username">Brugernavn</label>
      <input autocomplete="on" type="text" v-model="username" placeholder="Dit brugernavn.." />
      <label autocomplete="on" id="password" for="password">Adgangskode</label>
      <input type="password" v-model="password" placeholder="Dit adgangskode.." />
      <input type="submit" value="Log ind" @click="login()" />
    </form>
    <div class="remember-me">
      <input type="checkbox" v-model="remember" value="1">
      <label for="check">Husk mig</label>
    </div>
    <div class="forgot-password">
      <p @click="forgotPassword()">Jeg har <span style="color:#4ED2CA">glemt</span> min adgangskode</p>
      <p onclick="history.back()" style="color:#4ED2CA;cursor:pointer; margin-top: 20px;">
        <font-awesome-icon style="color:black" icon="fa fa-arrow-left" />
      </p>
    </div>
  </div>
</template>

<script setup>
let username;
let password;
let remember;
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
        alert(response._data.error);
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
  height: 100%;
  width: 100%;
}

form {
  display: table-cell;
  padding: 20px;
  width: 100%;
}

input[type="text"],
input[type="password"] {
  background: var(--secondary-color);
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
  margin-top: 10px;
  padding: 12px 12px;
  width: 100%;
}

input[type="text"] {
  margin-bottom: 10px;
}

input[type="password"] {
  margin-top: 10px;
}

input[type=submit] {
  background-color: var(--primary-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 25px 0 0 0;
  padding: 14px 20px;
  width: 100%;
}

input[type=submit]:hover {
  background-color: var(--darker-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.remember-me {
  padding-left: 20px;
}

input[type="checkbox"] {
  margin-right: 10px;
}

.forgot-password {
  margin-top: 20px;
  padding: 20px;
  text-align: center;
}
</style>
