<template>
  <div>
    <TheHeader heading="Indstillinger"></TheHeader>
    <div class="settings-box">
      <div class="lyd">
        <h4>Lydeffekter</h4>
        <input type="checkbox" id="switch1" /><label for="switch1"></label>
      </div>
      <div class="notification">
        <h4>Notifikationer</h4>
        <input type="checkbox" id="switch2" /><label for="switch2"></label>
      </div>
      <div class="policy">
        <NuxtLink class="policy" to="/policypage">Privatlivspolitik</NuxtLink>
      </div>
      <div class="report">
        <NuxtLink class="report" to="/reportpage">Rapporter et problem</NuxtLink>
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

// function til log ud og tilbage til login side
function logout() {
  useCookie("token").value = "";
  useCookie("username").value = "";
  navigateTo("/member/loginpage");
}
</script>

<style scoped>
body {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: flex-start;
}

.settings-box {
  min-height: 50vh;
}

.lyd,
.notification {
  display: flex;
  justify-content: space-evenly;
}

input {
  height: 0;
  visibility: hidden;
  width: 0;
}

label {
  background: grey;
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
  /* justify-content: space-around; */
}

a {
  color: var(--text-color);
  text-decoration: none;
}

.logout {
  position: relative;
  text-align: center;
  top: 67px;
}
</style>