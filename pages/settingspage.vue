<template>
  <div>
    <TheFlashcardHeader flashcard-heading="Indstillinger"></TheFlashcardHeader>
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
        <!-- <button @click="signOut({ callbackUrl: '/signout' })">Log ud</button> -->
      </div>
    </div>
    <footer>
      <div class="start-the-game">
        <button>
          <NuxtLink to="/flashcards/">
            <font-awesome-icon style="color:white" icon="fa-solid fa-home" />
          </NuxtLink>
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
definePageMeta({
  layout: "false",
});
// dette er tilgængelige til brugeren der er logge på
const token = useCookie("token").value
if (!token) { navigateTo('/member/loginpage') }

// function til log ud og tilbage til login side
function logout() {
  useCookie("token").value = ""
  useCookie("username").value = ""
  navigateTo('/member/loginpage')
}

//https://caleb-smith.dev/blog/adding-font-awesome-to-nuxt-3
</script>

<style scoped>
body {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
}

.heading-overview {
  background: rgb(168, 228, 192);
  background: radial-gradient(circle,
      rgba(168, 228, 192, 1) 35%,
      rgba(78, 210, 202, 1) 100%);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  margin-top: -18px;
  padding: 50px 50px;
  text-align: center;
}

.settings-box {
  background: var(--secondary-color);
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 150px;
  min-width: -webkit-fill-available;
  margin: 0px 30px auto;
}

.lyd,
.notification {
  display: flex;
  justify-content: space-evenly;
}

.policy,
.report {
  display: flex;
  justify-content: space-around;
}

.policy {
  font-weight: var(--bold-text);
  font-family: var(--fonts);
  font-size: var(--text-size);
}

.report {
  font-weight: var(--bold-text);
  font-family: var(--fonts);
  font-size: var(--text-size);
}

h4 {
  margin-right: 10px;
}

input {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 40px;
  height: 20px;
  background: grey;
  display: block;
  border-radius: 20px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 15px;
  height: 14px;
  background: #fff;
  border-radius: 10px;
  transition: 0.3s;
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

a {
  text-decoration: none;
  color: var(--text-color);
}

.logout {
  text-align: center;
  position: relative;
  top: 53px;
}

.btn-logout {
  padding: 10px 50px;
  background-color: var(--primary-color);
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
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
  position: absolute;
  margin: 0 auto;
  min-width: 280px;
  width: 100%;
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

.start-the-game {
  text-align: center;
  position: relative;
  top: -18px;
}

button {
  padding: 10px 10px;
  border-radius: 20px;
  background-color: var(--primary-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.fa-home {
  background-color: var(--cta-bg-color);
  color: #fff;
}

.svg-inline--fa {
  text-align: left;
}
</style>
