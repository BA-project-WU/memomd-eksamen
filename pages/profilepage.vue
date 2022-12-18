<template>
  <div class="profile-page">
    <NuxtLayout>
      <div class="profile-info">
        <img src="~/assets/images/soccer-ball.jpg" alt=" just a soccer ball" />
        <h3>{{ name }}</h3>
        <p>{{ email }}</p>
        <div class="edit-icon"><font-awesome-icon icon="fa-solid fa-edit" /></div>
      </div>
      <DailyRecord />
      <div class="user-info">
        <h3>Adminintrere din konto</h3>

        <button @click="showEmail = true">Ændre email</button>
        <div v-if="showEmail">
          <div class="modal-overlay">
            <div class="modal-email">
              <input type="text" v-model="email" placeholder="email" />
              <button
                @click="
                  showEmail = false;
                  updateEmail();
                "
              >
                Gem
              </button>
            </div>
          </div>
        </div>
        <button @click="showPassword = true">Ændre adgangskode</button>
        <div v-if="showPassword">
          <div class="modal-overlay">
            <div class="modal-password">
              <input
                type="password"
                v-model="currentPassword"
                placeholder="Indtast nuværende adgangskode"
              />
              <input
                type="newpassword"
                v-model="newPassword"
                placeholder="Indtast ny adgangskode"
              />
              <button
                type="submit"
                @click="
                  showPassword = false;
                  updatePassword();
                "
              >
                Gem
              </button>
            </div>
          </div>
        </div>
        <button @click="deleteMemeber()">Slet bruger</button>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
//https://medium.com/@shahriarrahi/create-api-with-nuxt3-adcb7b6a17dd
definePageMeta({
  layout: "flashcards",
});
let showEmail = ref(false);
let showPassword = ref(false);


let email = "";
let currentPassword = "";
let newPassword = "";

let memberTypeAlias = "";
let username = "";
let name = "";
let memberEducationInstitution = "";

const { umbracoProjectAlias } = useRuntimeConfig();
const { umbracoApiKey } = useRuntimeConfig();
await useFetch("https://api.umbraco.io/member/Emma", {
  method: "get",
  headers: {
    "umb-project-alias": umbracoProjectAlias,
    "api-key": umbracoApiKey,
  },

  onResponse({ request, response, options }) {
    email = response._data.email;
    memberTypeAlias = response._data.memberTypeAlias;
    username = response._data.username;
    name = response._data.name;
    memberEducationInstitution = response._data.name;
  },
});
setTimeout(delay, 500);
async function delay() {
  await useFetch("https://api.umbraco.io/member/Emma", {
    method: "get",
    headers: {
      "umb-project-alias": umbracoProjectAlias,
      "api-key": umbracoApiKey,
    },

    onResponse({ request, response, options }) {
      email = response._data.email;
      memberTypeAlias = response._data.memberTypeAlias;
      username = response._data.username;
      name = response._data.name;
      memberEducationInstitution = response._data.name;
    },
  });
}

async function updateEmail() {
  await useFetch("https://api.umbraco.io/member/Emma", {
    method: "put",
    headers: {
      "umb-project-alias": umbracoProjectAlias,
      "api-key": umbracoApiKey,
      "Content-Type": "application/json",
    },
    body: {
      email: email,
      memberTypeAlias: memberTypeAlias,
      username: username,
      name: name,
      memberEducationInstitution: memberEducationInstitution,
    },
    onResponse({ request, response, options }) {},
  });
}

async function updatePassword() {
  await useFetch("https://api.umbraco.io/member/Emma/password", {
    method: "POST",
    headers: {
      "umb-project-alias": umbracoProjectAlias,
      "api-key": umbracoApiKey,
      "Content-Type": "application/json",
    },
    body: {
      currentPassword: currentPassword,
      newPassword: newPassword,
    },
    onResponse({ request, response, options }) {
      if (response._data.error) {
        alert(response._data.error.details.errors[0]);
      } else {
        alert("password opdateret");
      }
    },
  });
}

async function deleteMemeber() {
  let text =
    "Er du sikker på at du vil slette denne bruger?\nTryk OK for at bekræfte eller Annuller hvis du har fortrudt.";
  if (confirm(text) == true) {
    alert("Brugeren er slettet");
    //if the block below is uncomment, then the user will actually be deleted.
    /*
    await useFetch("https://api.umbraco.io/member/Emma", {
      method: "DELETE",
      headers: {
        "umb-project-alias": umbracoProjectAlias,
        "api-key": umbracoApiKey,
      }
    });
    */
  } else {

  }
}
</script>

<style>
.profile-page {
  height: 100vh;
}

.profile-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -60px;
}
img {
  height: 200px;
  width: 200px;
  border-radius: 20px;
}
h3,
p {
  text-align: left;
  margin-bottom: 10px 10px;
}
.edit-icon {
  position: relative;
  left: 87px;
  top: -20px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000da;
}
.user-info {
  width: 100%;
  height: 400px;
}
.modal-email {
  position: fixed;
  z-index: 999;
  top: 20%;
  background: var(--circle-color);
  height: 200px;
  padding: 20px;
  width: 94%;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.modal-password {
  position: fixed;
  z-index: 999;
  top: 20%;
  background: var(--circle-color);
  height: 250px;
  padding: 20px;
  width: 94%;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
}
h3 {
  padding: 10px 0px 0px 20px;
}
button {
  border: none;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px;
  outline: 0;
  text-align: center;
  background: var(--primary-color);
  width: 100%;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
input[type="text"],
input[type="newpassword"] {
  padding: 12px 12px;
  width: 100%;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background: var(--secondary-color);
}

input[type="password"] {
  padding: 12px 12px;
  width: 100%;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background: var(--secondary-color);
  margin-bottom: 10px;
}
input[type="submit"] {
  background: var(--primary-color);
  padding: 14px 20px;
  margin: 8px 30;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}
</style>
