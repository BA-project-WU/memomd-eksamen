<template>
  <div>
    <TheFlashcardHeader
      flashcard-heading="This is Flashcard Header"
    ></TheFlashcardHeader>
    <!--this is the page content-->
    <div>
      <slot />
    </div>
    <div>
      <button>Start</button>
    </div>
    <footer>
      <ul class="footer-list">
        <li><NuxtLink to="/settingspage">Settings</NuxtLink></li>
        <li><NuxtLink to="/profilepage">Profile</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
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
  height: 60px;
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
}
li {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
a {
  color: var(--text-color);
  text-decoration: none;
  line-height: 50px;
}
</style>
