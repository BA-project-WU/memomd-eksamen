<template>
  <div class="login-page">
    <TheHeader  class="heading"
    heading="Login"></TheHeader>
    <form @submit.prevent="memberLogin">
      <label for="username">Brugernavn</label>
      <input type="text"  v-model="username"  placeholder="Dit brugernavn.." />

      <label id="password" for="password">Adgangskode</label>
      <input type="password" v-model="password" placeholder="Dit adgangskode.." />
      <input type="submit" value="Log ind" @click="login()" />
    </form>
  </div>
</template>

<script setup>
let username;
let password;
const { umbracoProjectAlias } = useRuntimeConfig();

async function login() {
  await useFetch(`https://cdn.umbraco.io/member/oauth/token`, {
    method: "POST",
    headers: {
      "umb-project-alias": umbracoProjectAlias,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:"grant_type=password&username=" + username + "&password=" + password
    ,
    onResponse({ request, response, options }) {
      if (response._data.error) {
        alert(response._data.error);
      } else {
        const token = useCookie("token")
        token.value = response._data.access_token
        useCookie("username").value = username;
        navigateTo('/profilepage')
      }
    },
  });
}
</script>


<style scoped>
.login-page {
  width: 100%;
  height: 100%;
}

input[type="text"],input[type="password"] {
  padding: 12px 12px;
  width: 100%;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background: var(--secondary-color);
  margin-top: 10px;
}
form {
  display: table-cell;
  width: 100%;
}
input[type="password"] {
  margin-top: 10px;
}
input[type=submit] {
  width: 100%;
  background-color: var(--primary-color);
  padding: 14px 20px;
  margin: 20px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: var(--darker-color);
}

input[type="text"]{
  margin-bottom: 10px;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>