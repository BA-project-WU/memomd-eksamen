<template>
  <div class="profile-page">
    <TheHeader heading="Min profil"></TheHeader>
    <section class="profile-info">
      <div class="circle-img">
        <img class="profile-img" src="~/assets/images/member.webp" alt="member" />
      </div>
      <h3>{{ username }}</h3>
      <p>{{ name }}</p>
      <p>{{ email }}</p>
      <p>{{ memberEducationInstitution }}</p>
    </section>
    <DailyRecord />
    <section class="user-info">
      <h3>Administrer din konto</h3>
      <button class="btn-change-email" @click="showEmail = true">Ændre din email</button>
      <div v-if="showEmail" class="modal">
        <div class="modal-overlay">
          <div class="modal-email">
            <div class="x-icon">
              <font-awesome-icon style="color: white" icon="fa-solid fa-times" @click="showEmail = false" />
            </div>
            <p class="error-message">{{ errorMessage }}</p><br />
            <input type="email" v-model="email" placeholder="email" />
            <button class="btn-save" @click="showEmail = false; updateEmail();">Gem</button>
          </div>
        </div>
      </div>
      <button class="btn-change-password" @click="showPassword = true">Ændre din adgangskode</button>
      <div v-if="showPassword">
        <div class="modal-overlay">
          <div class="modal-password">
            <div class="x-icon">
              <font-awesome-icon style="color: white" icon="fa-solid fa-times" @click="showPassword = false" />
            </div>
            <p class="error-message">{{ errorMessage }}</p><br />
            <input type="password" v-model="currentPassword" placeholder="Indtast nuværende adgangskode" />
            <input type="newpassword" v-model="newPassword" placeholder="Indtast ny adgangskode" />
            <label for="newpassword">Adgangskode (minimum 10 tegn)</label>
            <button class="btn-save" type="submit" @click="updatePassword();">Gem</button>
          </div>
        </div>
      </div>
      <!-- <button class="btn-delete-user" @click="deleteMember()">Slet profilen</button> -->
    </section>
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
          alert("Adgangskoden er blevet opdateret");
        }
      },
    });
  } else {
    errorMessage.value = "Udfylde begge felter."
  }
}
// function til at slet member
// async function deleteMember() {
//   let text = "Er du sikker på at du vil slette denne bruger?\nTryk OK for at bekræfte eller Annuller hvis du har fortrudt.";
//   if (confirm(text) == true) {
//     //if the block below is uncomment, then the user will actually be deleted.
//     await useFetch("https://api.umbraco.io/member/" + username, {
//       method: "DELETE",
//       headers: {
//         "umb-project-alias": umbracoProjectAlias,
//         "api-key": umbracoApiKey,
//       },
//     });
//     navigateTo('/member/loginpage')
//   } else {
//   }
// }
</script>

<style scoped>
.profile-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -25px;
}

.circle-img {
  border-radius: 50%;
  height: 200px;
  overflow: hidden;
  position: relative;
  width: 200px;
}

.profile-img {
  height: auto;
  width: 100%;
}

.user-info {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0 100px 0;
  padding: 0 0 40px 0;
}

.modal-overlay {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5), 0 5px 20px 0 rgba(0, 0, 0, 0.20);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  /* background-color: var(--primary-color); */
}

.modal-email,
.modal-password {
  align-items: center;
  background: var(--grey-color);
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5), 0 5px 20px 0 rgba(0, 0, 0, 0.20);
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 50%;
  padding: 20px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  z-index: 999;
}

.x-icon {
  text-align: right;
  position: relative;
  top: -20px;
  padding: 10px;
}

input[type="email"],
input[type="newpassword"] {
  padding: 12px 12px;
  width: 100%;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background: var(--secondary-color);
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