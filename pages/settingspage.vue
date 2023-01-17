<template>
  <div>
    <TheHeader heading="Indstillinger"></TheHeader>
    <div class="settings-box">
      <div class="setting lyd">
        <h4>Lydeffekter</h4>
        <input type="checkbox" id="switch1" /><label for="switch1"></label>
      </div>
      <div class="setting notification">
        <h4>Notifikationer</h4>
        <input type="checkbox" id="switch2" /><label for="switch2"></label>
      </div>
      <div class="setting policy">
        <NuxtLink class="policy" to="/policypage">
          <h4>Privatlivspolitik</h4>
        </NuxtLink>
      </div>
      <div class="setting report">
        <NuxtLink class="report" to="/reportpage">
          <h4>Rapportér et problem</h4>
        </NuxtLink>
      </div>
      <div class="setting delete">
        <h4 @click="deleteMember()">Slet profilen</h4>
      </div>
      <div class="logout">
        <button @click="logout()">Log af</button>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
definePageMeta({ layout: "false" });

// dette er tilgængelige til brugeren der er logge på
const token = useCookie("token").value;
if (!token) {
  navigateTo("/member/loginpage");
}

let username = useCookie("username").value
const { umbracoProjectAlias } = useRuntimeConfig();
const { umbracoApiKey } = useRuntimeConfig();

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
    navigateTo('/')
  } else {
  }
}
// 

// function til log ud og tilbage til login side
function logout() {
  useCookie("token").value = "";
  useCookie("username").value = "";
  navigateTo("/member/loginpage");
}
</script>

<style scoped>
.settings-box {
  align-items: center;
  background: var(--grey-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  left: 50%;
  margin: 20px 0;
  padding: 20px 0 40px 0;
  position: relative;
  transform: translateX(-50%);
  width: 75%;
}

.setting {
  line-height: 50px;
  max-width: 300px;
  padding: 0 20px;
  width: 100%;
}

.lyd,
.notification {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

input {
  height: 0;
  margin: 0;
  visibility: hidden;
  width: 0;
}

label {
  background: var(--turquoise-light-color);
  border-radius: 20px;
  cursor: pointer;
  display: block;
  height: 20px;
  position: relative;
  text-indent: -9999px;
  width: 40px;
}

input:checked+label {
  background: var(--primary-color);
}

input:checked+label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label:active:after {
  width: 10px;
}

label:after {
  background: var(--white-color);
  border-radius: 10px;
  content: "";
  height: 14px;
  left: 3px;
  position: absolute;
  top: 3px;
  transition: 0.3s;
  width: 15px;
}

.policy,
.report {
  display: flex;
  font-family: var(--fonts);
  font-size: var(--text-size);
  font-weight: var(--bold-text);
}

.logout {
  bottom: -20px;
  position: absolute;
}
</style>