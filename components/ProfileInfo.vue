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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
}

img{
  height: 100px;
  width: 100px;
}
</style>
