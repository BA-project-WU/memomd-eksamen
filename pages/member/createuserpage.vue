<template>
  <div class="createuser-page">
    <TheHeader class="heading" heading="Opret bruger"></TheHeader>
    <!-- <progress value="50" max="100"></progress> -->
    <form @submit.prevent="createMember">
      <p style="color:red">{{ errorMessage }}</p><br />
      <label for="name-input">Navn</label>
      <input type="text"  name="name-input" placeholder="Dit fulde navn" required v-model="name" />
      <label for="username-input">Brugernavn (minimum 5 tegn)</label>
      <input type="text" minlength="5" name="username-input" placeholder="Vælg et brugernavn" required
        v-model="username" />
      <label for="email-input">Email-addresse</label>
      <input type="email"  name="email-input" placeholder="Din email-addresse" required
        v-model="email" />
      <label for="password-input">Adgangskode (minimum 10 tegn)</label>
      <input type="password" minlength="10" name="password-input" placeholder="Din adgangskode"
        required v-model="password" />
      <label for="password-input1">Gentag adgangskode</label>
      <input type="password" minlength="10" name="password-input1" placeholder="Gentag adgangskode"
        required v-model="password1" />
      <!-- <input type="file" name="membe
      rPicture" v-on:change="memberPicture" /> -->
      <label for="memberEducationInstitution">Uddannelsesinstution</label>
      <select name="memberEducationInstitution" required v-model="memberEducationInstitution">
        <option disabled hidden value="">Din uddannelsesinstution</option>
        <option value="Aalborg Universitet (AAU)">Aalborg Universitet (AAU)</option>
        <option value="Aarhus Universitet (AU)">Aarhus Universitet (AU)</option>
        <option value="Københavns Universitet, Nørre Campus">Københavns Universitet, Nørre Campus</option>
        <option value="Syddansk Universitet, Esbjerg">Syddansk Universitet, Esbjerg</option>
        <option value="Syddansk Universitet, Odense">Syddansk Universitet, Odense</option>
      </select>
      <!--function til at oprette member-->
      <input type="button" value="Opret" @click="createMember()" />
    </form>
    <div class="cancel-createmember">
      <p onclick="history.back()" style="color:#4ED2CA;cursor:pointer">Annuller</p>
    </div>
  </div>
</template>

<script setup>
const { umbracoProjectAlias } = useRuntimeConfig();
const { umbracoApiKey } = useRuntimeConfig();
const comments = ref("");
const email = ref("");
const memberEducationInstitution = ref("");
const name = ref("");
const password = ref("");
const password1 = ref("");
const username = ref("");
const errorMessage = ref("");

// function til createMember for at kunne oprette member til umbraco
async function createMember() {
  // hvis name, username, email password, instituion value er ikke lig med en tom streng så udføre det stykke kode
  if (name.value != "" && username.value != "" && email.value != "" && password.value != "" && memberEducationInstitution.value != "" ) {
    if(username.value.length  > 4){
      if(password.value == password1.value){
        await useFetch("https://api.umbraco.io/member", {
          method: "POST",
          headers: {
            "umb-project-alias": umbracoProjectAlias,
            "api-key": umbracoApiKey,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: {
            comments: comments.value,
            email: email.value,
            isApproved: true,
            isLockedOut: false,
            memberEducationInstitution: memberEducationInstitution.value,
            // memberPicture: memberPicture,
            memberTypeAlias: "Member",
            name: name.value,
            password: password.value,
            username: username.value,
          },
          // It returns a Promise that resolves to a Response from the server.
          // den håndtere fejl
          onResponse({ request, response, options }) {
            // hvis der er nogle fejl
            if (response._data.error) {
              Object.keys(response._data.error.details.errors).forEach( key => {
              // skriver hvad er fejlen 
              errorMessage.value = response._data.error.details.errors[key]
              });          
            } else {
              // ellers brugeren bliver oprettet
              alert("Brugeren er oprettet"),
              // efter oprettelse kom direkte til loginpage
              navigateTo({ path: 'loginpage' })
            }
          },
        });
      }else{
        errorMessage.value = "Adgangskoden skal være ens i de to felter."
      }
    }else{
      errorMessage.value = "Brugernavn skal være mindst 5 tegn."
    }
  }else{
    // brugeren skal udfyld felterne 
    errorMessage.value = "Udfyld alle felter før du opretter."
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

input[type=button] {
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