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
<<<<<<< Updated upstream

      <button class="btn-send-form" type="submit" value="Submit" v-on:click="sendForm()">
        Send Form
      </button>
    </form>
    <div class="arrow-left">
      <NuxtLink to="/settingspage">
        <font-awesome-icon style="color: black" icon="fa fa-arrow-left" />
=======
      <button class="btn-send-form" type="submit" value="Submit" v-on:click="sendForm()">Send Form </button>
    </form>
    <div class="arrow-left">
      <NuxtLink to="/settingspage">
        <font-awesome-icon style="color:black" icon="fa fa-arrow-left" />
>>>>>>> Stashed changes
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
<<<<<<< Updated upstream
function sendForm() {
  alert("This is not yet working, Sorry!");
}
</script>

<style scoped>
.arrow-left {
  text-align: left;
  margin-top: 20px;
}
input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
=======
function sendForm() { alert('This is not yet working, Sorry!') }
</script>

<style scoped>
div {
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 20px;
}

input[type=text],
select {
>>>>>>> Stashed changes
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
  cursor: pointer;
  color: white;
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
<<<<<<< Updated upstream
</style>
=======
</style>
>>>>>>> Stashed changes
