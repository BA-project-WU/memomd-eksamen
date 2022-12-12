<template>
  <div>
  <h3>Adminintrere din konto</h3>
    <form @submit.prevent="submitForm">
      <button>Ændre Email</button>
      <button>Ændre Adgangskode</button>
      <button>Slet Bruger</button>
      <!-- <div class="save-btn">
                <button @click="showModal = true">Save</button>
            </div> -->
      <!-- <ModalPopup v-show="showModal" @close-modal="showModal = false" /> -->
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
h3{
  padding: 10px 0px 0px 20px;
}
button{
  background-color: var(--secondary-color);
  border: none;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px;
  outline: 0;
  text-align: center;
  min-width: 300px;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>
