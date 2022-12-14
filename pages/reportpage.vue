<template>
  <div>
    <TheFlashcardHeader flashcard-heading="Rapporter Et Problem"></TheFlashcardHeader>
    <div class="settings-box">
      <h1>Form</h1>
    </div>
    <footer>
      <div class="start-the-game">
        <button>
          <NuxtLink to="/">
            <font-awesome-icon style="color: white" icon="fa-solid fa-home" />
          </NuxtLink>
        </button>
      </div>
      <ul class="footer-list">
        <li>
          <NuxtLink to="/settingspage"
            ><font-awesome-icon icon="fa-solid fa-cog"
          /></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/profilepage"
            ><font-awesome-icon icon="fa-solid fa-user"
          /></NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
//https://caleb-smith.dev/blog/adding-font-awesome-to-nuxt-3
definePageMeta({
  layout: "false",
});
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
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 150px;
  min-width: -webkit-fill-available;
}
.logud {
  text-align: center;
  position: relative;
  top: 46px;
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
</style>
