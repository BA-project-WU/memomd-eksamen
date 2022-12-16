<template>
  <div class="profile-info">
      <img src="~/assets/images/soccer-ball.jpg" alt=" just a soccer ball" />
      <h3>Emma</h3>
      <p>emma@gmail.com</p>
      <p>SDU</p> 
      <div class="edit-icon"><font-awesome-icon icon="fa-solid fa-edit" /></div>
  </div>
</template>

<script setup></script>

<style scoped>
.profile-info{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -60px;
}
img{
  height: 200px;
  width: 200px;
  border-radius: 20px;
}
h3, p{
  text-align: left;
  margin-bottom: 10px 10px;
}
.edit-icon{
  position: relative;
  left: 87px;
    top: -20px;
}
</style>
