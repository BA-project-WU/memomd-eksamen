<template>
  <div class="profile-page">
    <TheHeader heading="Min profil"></TheHeader>
    <div class="profile-info">
      <div class="circle-img">
        <img class="profile-img" src="~/assets/images/member.webp" alt="member" />
      </div>
      <h3>{{ name }}</h3>
      <p>{{ email }}</p>
    </div>
    <DailyRecord />
    <div class="user-info">
      <h3>Adminintrere din konto</h3>
      <button class="btn-change-email" @click="showEmail = true">Ændre email</button>
      <div v-if="showEmail" class="modal">
        <div class="modal-overlay">
          <div class="modal-email">
            <div class="x-icon">
              <font-awesome-icon style="color: black" icon="fa-solid fa-times" @click="showEmail = false" />
            </div>
            <input type="text" v-model="email" placeholder="email" />
            <button class="btn-save" @click="showEmail = false; updateEmail();">Gem</button>
          </div>
        </div>
      </div>
      <button class="btn-change-password" @click="showPassword = true">Ændre adgangskode</button>
      <div v-if="showPassword">
        <div class="modal-overlay">
          <div class="modal-password">
            <div class="x-icon">
              <font-awesome-icon style="color: black" icon="fa-solid fa-times" @click="showPassword = false" />
            </div>
            <input type="password" v-model="currentPassword" placeholder="Indtast nuværende adgangskode" />
            <input type="newpassword" v-model="newPassword" placeholder="Indtast ny adgangskode" />
            <button class="btn-save" type="submit" @click="showPassword = false; updatePassword();">Gem</button>
          </div>
        </div>
      </div>
      <button class="btn-delete-user" @click="deleteMember()">Slet profilen</button>
    </div>
    <footer>
      <div class="start-the-game">
        <button class="btn-start-spil">
          <NuxtLink to="/flashcards/">Start</NuxtLink>
        </button>
      </div>
      <ul class="footer-list">
        <li>
          <NuxtLink to="/settingspage"><font-awesome-icon icon="fa-solid fa-cog" /></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/profilepage"><font-awesome-icon icon="fa-solid fa-user" /></NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({ layout: "false" });
const { flashcardHeading } = defineProps(["flashcardHeading"]);
// de to linier hereunder skal være pa alle sider der ønskes password beskyttet.
const token = useCookie("token").value
if (!token) { navigateTo('/member/loginpage') }
let username = useCookie("username").value
let showEmail = ref(false);
let showPassword = ref(false);
let email = "";
let currentPassword = "";
let newPassword = "";
let memberTypeAlias = "";
let name = "";
let memberEducationInstitution = "";
const { umbracoProjectAlias } = useRuntimeConfig();
const { umbracoApiKey } = useRuntimeConfig();
await useFetch("https://api.umbraco.io/member/" + username, {
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
    memberEducationInstitution = response._data.memberEducationInstitution;
  },
});
// dette er workaround for at man kunne se dataen
setTimeout(delay, 500);
async function delay() {
  await useFetch("https://api.umbraco.io/member/" + username, {
    method: "GET",
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
// function til at opdatere email
async function updateEmail() {
  // kalder api ved members username
  await useFetch("https://api.umbraco.io/member/" + username, {
    method: "PUT",
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
      isApproved: true,
      memberEducationInstitution: memberEducationInstitution,
    },
    onResponse({ request, response, options }) { },
  });
}
// function til at opdatere adgangskode
async function updatePassword() {
  await useFetch(`https://api.umbraco.io/member/${username}/password`, {
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
        alert("Password opdateret");
      }
    },
  });
}
// function til at slet member
async function deleteMember() {
  let text = "Er du sikker på at du vil slette denne bruger?\nTryk OK for at bekræfte eller Annuller hvis du har fortrudt.";
  if (confirm(text) == true) {
    alert("Brugeren er slettet");
    //if the block below is uncomment, then the user will actually be deleted.
    await useFetch("https://api.umbraco.io/member/" + username, {
      method: "DELETE",
      headers: {
        "umb-project-alias": umbracoProjectAlias,
        "api-key": umbracoApiKey,
      },
    });
  } else {
  }
}
</script>

<style scoped>
body {
  overflow-x: hidden;
}

.profile-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -25px;
}

.circle-img {
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.profile-img {
  height: auto;
  width: 100%;
}

h3,
p {
  text-align: left;
  margin-bottom: 10px;
}

.user-info {
  width: 100%;
  height: 400px;
  padding: 20px;
}

.btn-change-email,
.btn-change-password,
.btn-delete-user {
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

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000da;
}

.modal-email {
  background: var(--circle-color);
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  padding: 20px;
  position: fixed;
  top: 20%;
  width: 94%;
  width: 100%;
  z-index: 999;
}

.x-icon {
  text-align: right;
  position: relative;
  top: -20px;
  padding: 10px;
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

.btn-save {
  margin-top: 20px;
}

h3 {
  padding-top: 10px;
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

.modal-password {
  background: var(--circle-color);
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: center;
  margin-bottom: 10px;
  padding: 20px;
  position: fixed;
  top: 20%;
  width: 94%;
  width: 100%;
  z-index: 999;
}

input[type="submit"],
.btn-save,
.btn-submit {
  background: var(--primary-color);
  padding: 14px 20px;
  margin: 8px 30;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.content-container {
  margin: 5% 3%;
  height: 100vh;
}

footer {
  background: rgb(168, 228, 192);
  background: radial-gradient(circle,
      rgba(168, 228, 192, 1) 35%,
      rgba(78, 210, 202, 1) 100%);
  bottom: 0;
  /* Height of the footer */
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 280px;
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
}

.start-the-game {
  text-align: center;
  position: relative;
  top: -18px;
}

.btn-start-spil {
  padding: 10px 20px;
  border-radius: 20px;
  background-color: var(--primary-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.footer-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-decoration: none;
  list-style-type: none;
  position: relative;
  top: -20px;
}

li {
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
}

a {
  color: var(--text-color);
  text-decoration: none;
}

.check {
  width: 200px;
  height: auto;
  margin-top: 100px;
}

.edit-icon {
  position: relative;
  left: 87px;
  top: -20px;
}

.fa-home {
  background-color: var(--cta-bg-color);
  color: #fff;
}
</style>