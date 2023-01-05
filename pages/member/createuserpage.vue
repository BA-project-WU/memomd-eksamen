<template>
  <div class="createuser-page">
    <TheHeader class="heading" heading="Opret bruger"></TheHeader>
    <!-- <progress value="50" max="100"></progress> -->
    <form @submit.prevent="createMember">
      <label for="name-input">Navn</label>
      <input type="text" autocomplete="on" name="name-input" placeholder="Dit fulde navn" required v-model="name" />
      <label for="username-input">Brugernavn (minimum 5 tegn)</label>
      <input type="text" minlength="5" name="username-input" placeholder="Vælg et bugernavn" required
        v-model="username" />
      <label for="email-input">Email-addresse</label>
      <input type="email" autocomplete="on" name="email-input" placeholder="Din email-addresse" required
        v-model="email" />
      <label for="password-input">Adgangskode (minimum 10 tegn)</label>
      <input type="password" autocomplete="no" minlength="10" name="password-input" placeholder="Din adgangskode"
        required v-model="password" />
      <!-- <input type="file" name="memberPicture" v-on:change="memberPicture" /> -->
      <label for="memberEducationInstitution">Uddannelsesinstution</label>
      <select name="memberEducationInstitution" required v-model="memberEducationInstitution">
        <option disabled hidden value="">Din uddannelsesinstution</option>
        <option value="Aalborg Universitet (AAU)">Aalborg Universitet (AAU)</option>
        <option value="Aarhus Universitet (AU)">Aarhus Universitet (AU)</option>
        <option value="Københavns Universitet, Nørre Campus">Københavns Universitet, Nørre Campus</option>
        <option value="Syddansk Universitet, Esbjerg">Syddansk Universitet, Esbjerg</option>
        <option value="Syddansk Universitet, Odense">Syddansk Universitet, Odense</option>
      </select>
      <input type="submit" value="Opret" v-on:click="createMember()" />
    </form>
    <div class="cancel-createmember">
      <p onclick="history.back()" style="color:#4ED2CA;cursor:pointer">Annuller</p>
    </div>
  </div>
</template>

<script setup>
// const { status, data, signIn } = useSession()
// definePageMeta({ auth: false });
const { umbracoProjectAlias } = useRuntimeConfig();
const { umbracoApiKey } = useRuntimeConfig();
const comments = ref("");
const email = ref("");
// const memberEducationInstitution = [""];
// const memberEducationInstitution = ["Syddansk Universitet, Odense"];
const memberEducationInstitution = ref("");
// const memberPicture = ref("");
const name = ref("");
const password = ref("");
const username = ref("");

async function createMember() {
  if (name.value != "" && username.value != "" && email.value != "" && password.value != "" && memberEducationInstitution.value != "" ) {

  await navigateTo({ path: 'loginpage' })

  await useFetch("https://api.umbraco.io/member", {
    method: "POST",
    headers: {
      "umb-project-alias": umbracoProjectAlias,
      "api-key": umbracoApiKey,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: {
      comments: comments,
      email: email,
      isApproved: true,
      isLockedOut: false,
      memberEducationInstitution: memberEducationInstitution,
      // memberPicture: memberPicture,
      memberTypeAlias: "Member",
      name: name,
      password: password,
      username: username,
    },
    onResponse({ request, response, options }) {
      if (response._data.error) {
        Object.keys(response._data.error.details.errors).forEach(key => {
          alert(response._data.error.details.errors[key]);
        });

       
      } else {
        alert("Brugeren er oprettet");
      }
    }
  });
  // if (this.name && this.username && this.email && this.password && this.memberEducationInstitution != 0) {
  //   await navigateTo({ path: 'loginpage' })
  //   }
  }else{
    alert("Udfyld alle felter før du sender.")
  }
}
</script>

<style scoped>
.createuser-page {
  width: 100%;
  height: 100%;
}

form {
  display: table-cell;
  width: 100%;
  padding: 20px;
}

input,
select {
  background: var(--secondary-color);
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 12px;
  width: 100%;
}

input[type=submit] {
  width: 100%;
  background-color: var(--primary-color);
  padding: 14px 20px;
  margin: 25px 0 0 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: var(--darker-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.cancel-createmember {
  text-align: center;
  margin-top: 20px;
  padding: 20px;
}
</style>