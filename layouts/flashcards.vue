<template>
  <div>
    <TheFlashcardHeader/>
    <!--this is the page content-->
    <div class="content-container">
      <slot />
    </div>
    <footer>
      <div class="start-the-game">
        <button class="btn-start-spil">
          <NuxtLink to="/flashcards/">
            Oversigt
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
// const { flashcardHeading } = defineProps(["flashcardHeading"]);

</script>

<style scoped>
body {
  overflow-x: hidden;
}

.content-container {
  margin: 5% 3%;
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
  text-align: center;
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
  margin: 0 auto;
  min-width: 280px;
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
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

.btn-start-spil {
  padding: 10px 20px;
  border-radius: 20px;
  background-color: var(--primary-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.fa-home {
  background-color: var(--cta-bg-color);
  color: #fff;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .logo{
  width: 30vw;
  height: auto;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .logo{
  width: 30vw;
  height: auto;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .logo{
  width: 30vw;
  height: auto;
  }

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .logo{
  width: 30vw;
  height: auto;
  }
}

</style>
