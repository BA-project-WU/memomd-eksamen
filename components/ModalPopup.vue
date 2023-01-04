<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <img class="check" src="~/assets/images/check-img.png" alt="check img" width="200px" height="auto" />
        <h6>Sendt</h6>
        <p>Din rapportering er blevet afsendt.</p>
        <p>Tak for din hjælp.</p>
        <button>
          <NuxtLink to="/settingspage">Tilbage til indstillinger</NuxtLink>
        </button>
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
  width: 500px;
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
  width: 180px;
  height: 40px;
  color: #000000;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
  border: none;
  background-color: var(--primary-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.check {
  width: 200;
  height: auto;
}
</style>
