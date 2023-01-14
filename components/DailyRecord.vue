<template>
  <div class="record">
    <div class="day-strike">
      <h3>Dage i streg</h3>
    </div>
    <div class="boxes">
      <div class="box-left">
        <h4>Nuværende</h4>
      </div>
      <div class="box-right">
        <h4>Højeste</h4>
      </div>
    </div>
  </div>
</template>

<!-- <script setup></script> -->

<style scoped>
.record {
  display: flex;
  flex-direction: column;
  margin: 40px 0 20px 0;
  text-align: center;
  width: 100%;
}

.boxes {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
}

.box-left,
.box-right {
  background-color: var(--secondary-color);
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5), 0 5px 20px 0 rgba(0, 0, 0, 0.20);
  height: 200px;
  margin: 20px;
  padding: 20px 0;
  width: 50%;
}
</style>