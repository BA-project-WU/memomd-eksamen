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

      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

</style>
