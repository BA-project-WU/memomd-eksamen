<template>
  <div>
    <footer>
      <div class="start-the-game">
        <button class="btn-start-spil">
          <NuxtLink to="/flashcards/">Start Spil</NuxtLink>
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

<script setup></script>

<style scoped>
footer {
  background: rgb(168, 228, 192);
  /* background: radial-gradient(circle, rgba(168, 228, 192, 1) 35%, rgba(78, 210, 202, 1) 100%); */
  background: radial-gradient(61.03% 208.76% at 9.36% 100%, #A8E4C0 0%, #47BDB5 100%);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  bottom: 0;
  display: flex;
  /* Height of the footer */
  flex-direction: column;
  margin: 0 auto;
  min-width: 280px;
  position: fixed;
  width: 100%;
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
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
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
</style>