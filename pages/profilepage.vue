<template>
  <div class="profile-page">
    <TheHeader heading="Min profil"></TheHeader>
    <div class="profile-info">
      <div class="circle-img">
        <img class="profile-img" src="~/assets/images/member.webp" alt="member" />
      </div>
      <h3>{{ username }}</h3>
      <p>{{ name }}</p>
      <p>{{ email }}</p>
      <p>{{ memberEducationInstitution }}</p>
    </div>
    <DailyRecord />
    <div class="user-info">
      <h3>Administrere din konto</h3>
      <button class="btn-change-email" @click="showEmail = true">Ændre email</button>
      <div v-if="showEmail" class="modal">
        <div class="modal-overlay">
          <div class="modal-email">
            <div class="x-icon">
              <font-awesome-icon style="color: white" icon="fa-solid fa-times" @click="showEmail = false" />
            </div>
            <p style="color:red">{{ errorMessage }}</p><br />
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
              <font-awesome-icon style="color: white" icon="fa-solid fa-times" @click="showPassword = false" />
            </div>
            <p style="color:red">{{ errorMessage }}</p><br />
            <input type="password" v-model="currentPassword" placeholder="Indtast nuværende adgangskode" />
            <input type="newpassword" v-model="newPassword" placeholder="Indtast ny adgangskode" />
            <button class="btn-save" type="submit" @click="updatePassword();">Gem</button>
          </div>
        </div>
      </div>
      <button class="btn-delete-user" @click="deleteMember()">Slet profilen</button>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
definePageMeta({ layout: "false" });

// de to linier hereunder skal være pa alle sider der ønskes password beskyttet.
const token = useCookie("token").value
if (!token) { navigateTo('/member/loginpage') }

// declaring and initialising constant variables
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
const errorMessage = ref("");

// fetching data from umbraco api using username
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
    memberEducationInstitution = response._data.memberEducationInstitution;
  },
});
// dette er workaround for at man kunne se dataen i input feltet
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
  if (currentPassword != "" && newPassword != "") {
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
          // alert(response._data.error.details.errors[0]);
          errorMessage.value = response._data.error.details.errors[0]
        } else {
          alert("Password opdateret");
        }
      },
    });
  } else {
    errorMessage.value = "Husk at udfylde begge felter før du gemmer."
  }
}
// function til at slet member
async function deleteMember() {
  let text = "Er du sikker på at du vil slette denne bruger?\nTryk OK for at bekræfte eller Annuller hvis du har fortrudt.";
  if (confirm(text) == true) {
    //if the block below is uncomment, then the user will actually be deleted.
    await useFetch("https://api.umbraco.io/member/" + username, {
      method: "DELETE",
      headers: {
        "umb-project-alias": umbracoProjectAlias,
        "api-key": umbracoApiKey,
      },
    });
    navigateTo('/member/loginpage')
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
</style>