<template>
  <div>
    <TheFlashcardHeader
      flashcard-heading="Instillinger"
    ></TheFlashcardHeader>
      <div class="settings-box">
        <div class="lyd">
          <h4>Lyfeffekter</h4>
          <input type="checkbox" id="switch" /><label for="switch">Lydeefekter</label>
        </div>
        <div class="notification">
          <h4>Notifikationer</h4>
          <input type="checkbox" id="switch" /><label for="switch">Notifikationer</label>
        </div>
        <div class="policy-and-report">
          <NuxtLink class="policy" to="/policypage">Privatlivspolitik</NuxtLink>
          <NuxtLink class="report" to="/reportpage">Rapporter et problem</NuxtLink>
        </div>
        <div class="logud">
          <NuxtLink class="logud-btn" to="/" @click="logud">Logud</NuxtLink>
        </div>
      </div>
      <footer>
      <div class="start-the-game">
        <button>
          <NuxtLink to="/">
            <font-awesome-icon style="color:white" icon="fa-solid fa-home" />
          </NuxtLink>
        </button>

      </div>
      <ul class="footer-list">
        <li><NuxtLink to="/settingspage"><font-awesome-icon icon="fa-solid fa-cog" /></NuxtLink></li>
        <li><NuxtLink to="/profilepage"><font-awesome-icon icon="fa-solid fa-user" /></NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "false",
});
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
  background: radial-gradient(
    circle,
    rgba(168, 228, 192, 1) 35%,
    rgba(78, 210, 202, 1) 100%
  );
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
.lyd {
  display: flex;
  justify-content: space-evenly;
}
.notification {
  display: flex;
  justify-content: space-evenly;
}
.policy-and-report{
  display: flex;
  flex-direction: column;
}
.policy{
  color: var(--success-color);
  font-weight: var(--bold-text);
  font-family: var(-fonts);
  font-size: var(--text-size);
  text-align: left;
  margin-left: 40px;
}
.report{
  color: var(--router-active-color);
  font-weight: var(--bold-text);
  font-family: var(-fonts);
  font-size: var(--text-size);
  text-align: cenleftter;
  margin-left: 40px;
  margin-top: 40px;
}

h4{
  margin-right: 10px;
}
input{
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

input:checked + label {
  background: var(--primary-color);
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label:active:after {
  width: 10px;
}
a{
  text-decoration: none;
  color: var(--text-color);
}
.logud{
  text-align: center;
  position: relative;
  top: 46px;
}
.logud-btn{
  padding: 10px 50px;
  background-color: var(--primary-color);
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
}

footer {
  background: rgb(168, 228, 192);
  background: radial-gradient(
    circle,
    rgba(168, 228, 192, 1) 35%,
    rgba(78, 210, 202, 1) 100%
  );
  bottom: 0; /* Height of the footer */
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
  margin-left: 10px;
  margin-right: 10px;
}
a {
  color: var(--text-color);
  text-decoration: none;
}
.start-the-game{
  text-align: center;
  position: relative;
  top: -18px;
}
button{
  padding: 10px 10px;
  border-radius: 20px;
  background-color: var(--primary-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.fa-home{
  background-color: var(--cta-bg-color);
  color: #fff;
}
</style>
