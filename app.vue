<template>
  <div id="app anim-border">
    <NuxtPage/>
  </div>
</template>
<script>

</script>
<style>
#app{
  width: 100%;
}
@-webkit-keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
.anim-border {
    position: relative;
    z-index: 0;
    width: 300px;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
    padding: 2rem;
}
.anim-border::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #b7a7ff;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#2e00ff, #917af9);
    -webkit-animation: rotate 4s linear infinite;
    animation: rotate 4s linear infinite;
}
.anim-border::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 6px;
  top: 6px;
  width: calc(100% - 12px);
  height: calc(100% - 12px);
  background: white;
  border-radius: 5px;
} 
.anim-border img {
    width: 100%;
}
</style>
