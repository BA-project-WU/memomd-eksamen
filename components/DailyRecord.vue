<template>
  <div class="record">
    <div class="day-strike">
      <h3>Dage i stribe</h3>
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
  width: 100%;
}

h3 {
  padding-left: 20px;
}

.boxes {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.box-left,
.box-right {
  background-color: var(--secondary-color);
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 200px;
  margin: 20px;
  width: 50%;
}

h4 {
  padding: 10px 0px 0px 10px;
}
</style>