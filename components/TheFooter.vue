<template>
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
</template>

<script setup></script>

<style scoped>
footer {
  background: radial-gradient(75.32% 93.55% at 86.67% 96.31%, #A8E4C0 0%, #47BDB5 100%);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 80px;
  position: fixed;
  width: 100%;
}

.start-the-game {
  position: relative;
  text-align: center;
  top: -50%;
}

.footer-list {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  position: relative;
  text-decoration: none;
  top: -50%;
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