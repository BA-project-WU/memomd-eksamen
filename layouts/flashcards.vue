<template>
  <div>
    <header>
      <h1 class="heading-overview">Dynamically Change Heading</h1>
    </header>
    <!--this is the page content-->
    <div>
      <slot />
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
* {
  margin: 0;
  padding: 0;
  border: 0;
}
html,
body {
  display: flex;
  flex-direction: column;
  min-width: 280px;
  margin: 0 auto;
}
header {
  margin-bottom: 10px;
}
.heading-overview{
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
footer{
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  min-width: 280px;
  
}
.footer-list{

}
</style>
