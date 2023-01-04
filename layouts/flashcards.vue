<template>
  <div>
    <TheFlashcardHeader />
    <!--this is the page content-->
    <div class="content-container">
      <slot />
    </div>
    <footer>
      <div class="start-the-game">
        <button class="btn-start-spil">
          <NuxtLink to="/flashcards/"> Oversigt </NuxtLink>
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
// const { flashcardHeading } = defineProps(["flashcardHeading"]);
</script>

<style scoped>
body {
  overflow-x: hidden;
}

.content-container {
  height: 100vh;
  margin: 5% 3%;
}

.start-the-game {
  position: relative;
  text-align: center;
  top: -18px;
}

.btn-start-spil {
  background-color: var(--primary-color);
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px 20px;
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

.fa-home {
  background-color: var(--cta-bg-color);
  color: #fff;
}

.heading-overview {
  background: rgb(168, 228, 192);
<<<<<<< Updated upstream
  background: radial-gradient(
    circle,
    rgba(168, 228, 192, 1) 35%,
    rgba(78, 210, 202, 1) 100%
  );
=======
  background: radial-gradient(circle, rgba(168, 228, 192, 1) 35%, rgba(78, 210, 202, 1) 100%);
>>>>>>> Stashed changes
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  text-align: center;
}

footer {
  background: rgb(168, 228, 192);
<<<<<<< Updated upstream
  background: radial-gradient(
    circle,
    rgba(168, 228, 192, 1) 35%,
    rgba(78, 210, 202, 1) 100%
  );
  bottom: 0;
  /* Height of the footer */
=======
  background: radial-gradient(circle, rgba(168, 228, 192, 1) 35%, rgba(78, 210, 202, 1) 100%);
>>>>>>> Stashed changes
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  /* Height of the footer */
  margin: 0 auto;
  min-width: 280px;
  position: fixed;
  right: 0;
  width: 100%;
}

.footer-list {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-between;
  position: relative;
  text-decoration: none;
  top: -20px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .logo {
<<<<<<< Updated upstream
    width: 30vw;
    height: auto;
=======
    height: auto;
    width: 30vw;
>>>>>>> Stashed changes
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .logo {
<<<<<<< Updated upstream
    width: 30vw;
    height: auto;
=======
    height: auto;
    width: 30vw;
>>>>>>> Stashed changes
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .logo {
<<<<<<< Updated upstream
    width: 30vw;
    height: auto;
=======
    height: auto;
    width: 30vw;
>>>>>>> Stashed changes
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .logo {
<<<<<<< Updated upstream
    width: 30vw;
    height: auto;
  }
}
</style>
=======
    height: auto;
    width: 30vw;
  }
}
</style>
>>>>>>> Stashed changes
