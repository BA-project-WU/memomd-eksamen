<template>
  <footer>
    <div class="start-the-game">
      <NuxtLink to="/flashcards/">
        <button class="btn-start-spil">
          <font-awesome-icon icon="fa-solid fa-home" />
        </button>
      </NuxtLink>
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
  /* transform: translateY(-50%); */
}

.footer-list {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  position: relative;
  text-decoration: none;
  top: -50%;
  transform: translateY(-50%);
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

.svg-inline--fa {
  text-align: left;
}
</style>