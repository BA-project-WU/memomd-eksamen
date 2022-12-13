<template>
  <div class="profile-info">
    <div class="profile-image">
      <img src="~/assets/images/soccer-ball.jpg" alt="" />
      <h3>Emma</h3>
    </div>
    <div class="profile-email">
      <!--profile info-->
      <p>emma@gmail.com</p>
      <p>SDU</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.profile-info{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 30px;
  align-items: center;
}
.profile-image{
  margin-top: -95px;
}
img{
  height: 200px;
  width: 200px;
  border-radius: 20px;
}
h3{
  text-align: center;
  margin-bottom: 10px;
}
</style>
