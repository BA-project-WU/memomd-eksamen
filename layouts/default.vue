<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">This is the logo</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home page</NuxtLink></li>
          <li><NuxtLink to="/profilepage/">Profile</NuxtLink></li>
          <li><NuxtLink to="/settingspage/">Settings</NuxtLink></li>
          <li><NuxtLink to="/flashcards/">Overview</NuxtLink></li>
          <li><NuxtLink to="/flashcards/questionpage">Question page</NuxtLink></li>     
        </ul>
      </nav>
    </header>
    <!--this is the page content-->
    <div>
      <slot/>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: var(--router-active-color);
  font-weight: var(--bold-text);
  font-family: var(--fonts)
}

</style>
