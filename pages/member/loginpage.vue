<template>
  <div>
    <form @submit.prevent="memberLogin">
      <label for="fname">Brugernavn</label>
      <input type="text"  v-model="username"  placeholder="Dit brugernavn.." />

      <label for="lname">Adgangskode</label>
      <input type="password" v-model="password" placeholder="Dit adgangskode.." />
      <input type="submit" value="Submit" @click="login()" />
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

input[type=submit] {
  width: 100%;
  background-color: var(--primary-color);
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: var(--secondary-color);
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>