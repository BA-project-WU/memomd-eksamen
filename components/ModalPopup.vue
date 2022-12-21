<template>
  <transition name="modal-fade">
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <img class="check" src="~/assets/images/check-img.png" alt="check img" />
      <h6>Gemt!!!</h6>
      <p>Din report er blevet gemt. Tak for din hjælp.</p>
      <button><NuxtLink to="/flashcards">Tilbage til Spillet</NuxtLink> </button>
    </div>
  </div>
</transition>
</template>

<script setup></script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  width: 100%;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.page-enter-active,
.page-leave-active {
  transition: transform 0.5s;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translateY(100%);
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  text-align: center;
}

button {
  background-color: #29cbd4;
  width: 150px;
  height: 40px;
  color: #000000;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
  border: none;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
