<template>
  <div>
    <h2>Kontakt Os</h2>
  </div>
  <div>
    <form @submit.prevent="sendForm">
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Dit navn.." />
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Dit efternavn.." />
      <label for="school">Institution</label>
      <select id="school" name="School">
        <option value="sdu">SDU</option>
        <option value="aau">AAU</option>
        <option value="ku">KU</option>
      </select>
      <button class="btn-send-form" type="submit" value="Submit" v-on:click="sendForm()">Send Form</button>
    </form>
    <div class="arrow-left">
      <NuxtLink to="/settingspage">
        <font-awesome-icon style="color: black" icon="fa fa-arrow-left" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
function sendForm() { alert("Denne funktion virker ikke endnu"); }
</script>

<style scoped>
div {
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 20px;
}

input[type=text],
select {
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
  margin: 8px 0;
  padding: 12px 20px;
  width: 100%;
}

.btn-send-form {
  background-color: var(--primary-color);
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin: 8px 0;
  padding: 14px 20px;
  width: 100%;
}

.btn-send-form:hover {
  background-color: #4ed2ca;
}

.arrow-left {
  margin-top: 20px;
  text-align: left;
}
</style>