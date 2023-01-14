<template>
  <!--inspiration fra https://www.cssscript.com/confetti-animation/-->
  <div id="confettis">
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
  </div>
</template>

<script setup></script>

<style scoped>
#confettis {
  height: 100%;
  overflow: hidden;
  position: absolute;
  /* width: 100%; */
  width: -webkit-fill-available;
  z-index: -1;
}

.confetti {
  animation: confetti 5s ease-in-out -2s infinite;
  height: 16px;
  left: 50%;
  position: absolute;
  transform-origin: left top;
  width: 16px;
}

.confetti:nth-child(1) {
  animation-delay: 0;
  background-color: var(--green-color);
  left: 10%;
}

.confetti:nth-child(2) {
  animation-delay: -5s;
  background-color: var(--grey-color);
  left: 20%;
}

.confetti:nth-child(3) {
  animation-delay: -3s;
  background-color: var(--red-color);
  left: 30%;
}

.confetti:nth-child(4) {
  animation-delay: -2.5s;
  background-color: var(--turquoise-color);
  left: 40%;
}

.confetti:nth-child(5) {
  animation-delay: -4s;
  background-color: var(--turquoise-light-color);
  left: 50%;
}

.confetti:nth-child(6) {
  animation-delay: -6s;
  background-color: var(--green-color);
  left: 60%;
}

.confetti:nth-child(7) {
  animation-delay: -1.5s;
  background-color: var(--grey-color);
  left: 70%;
}

.confetti:nth-child(8) {
  animation-delay: -2s;
  background-color: var(--red-color);
  left: 80%;
}

.confetti:nth-child(9) {
  animation-delay: -3.5s;
  background-color: var(--turquoise-color);
  left: 90%;
}

.confetti:nth-child(10) {
  animation-delay: -2.5s;
  background-color: var(--turquoise-light-color);
  left: 100%;
}

@keyframes confetti {
  0% {
    transform: rotateZ(15deg) rotateY(0deg) translate(0, 0);
  }

  25% {
    transform: rotateZ(5deg) rotateY(360deg) translate(-5vw, 20vh);
  }

  50% {
    transform: rotateZ(15deg) rotateY(720deg) translate(5vw, 60vh);
  }

  75% {
    transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw, 80vh);
  }

  100% {
    transform: rotateZ(15deg) rotateY(1440deg) translate(10vw, 110vh);
  }
}
</style>