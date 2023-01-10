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
        <NuxtLink class="policy" to="/policypage">Om privatlivspolitik</NuxtLink>
        <p></p>
      </div>
      <div class="report">
        <NuxtLink class="report" to="/reportpage">Rapporter et problem</NuxtLink>
        <p></p>
      </div>
      <div class="logout">
        <button class="btn-logout" @click="logout()">Log af</button>
      </div>
    </div>
    <footer>
      <div class="start-the-game">
        <button class="btn-start-spil">
          <NuxtLink to="/flashcards/"><font-awesome-icon icon="fa-solid fa-home" /></NuxtLink>
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

h4 {
  margin-right: 10px;
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
  background: #fff;
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
  justify-content: space-around;
}

.policy,
.report {
  font-family: var(--fonts);
  font-size: var(--text-size);
  font-weight: var(--bold-text);
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

.btn-logout {
  background-color: var(--primary-color);
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  padding: 10px 50px;
}

footer {
  background: rgb(168, 228, 192);
  background: radial-gradient(circle,
      rgba(168, 228, 192, 1) 35%,
      rgba(78, 210, 202, 1) 100%);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 280px;
  position: absolute;
  width: 100%;
}

.start-the-game {
  position: relative;
  text-align: center;
  top: -18px;
}

.footer-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  position: relative;
  text-decoration: none;
  top: -20px;
}

li {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 10px;
}

a {
  color: var(--text-color);
  text-decoration: none;
}

button {
  background-color: var(--primary-color);
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px 10px;
}

.fa-home {
  background-color: var(--cta-bg-color);
  color: #fff;
}

.svg-inline--fa {
  text-align: left;
}
</style>
