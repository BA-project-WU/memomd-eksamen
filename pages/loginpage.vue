<template>
  <div class="loginpage">
    <button class="email">Email</button>
    <button class="adgangskode">Adgangskode</button>
    <button>Log ind</button>
    <div class="rememberme">
      <!-- <button class="btn-rememberme">Husk Mig</button>
      <p>Jeg har glemt min adgangskode</p> -->
      <input type="checkbox" id="checkbox" v-model="checked" value="Husk Mig"/>
	    <label for="checkbox">{{ checked }}</label>
    </div> 
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(true)
</script>

<style scoped>
.loginpage{
  flex: 1 0 auto;
  padding: 2rem;
  width: 350px;
  margin: 0 auto;
}
.email, .adgangskode {
  background-color: var(--secondary-color);
  border: none;
  margin: 10px;
  padding: 10px;
  width: 350px;
}
button{
  background-color: var(--cta-bg-color);
  border: none;
  padding: 10px;
  width: 350px;
  margin: 10px;
}
.rememberme{
  text-align: left;
}
</style>
