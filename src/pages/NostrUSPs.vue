<template>
  <div class="nostr-fosdem-bg">
    <img src="@/assets/nostr-fosdem2025.jpeg" />
  </div>
  <SwiperNostrSlides />
</template>

<script setup>
import SwiperNostrSlides from '../components/SwiperNostrSlides.vue'
</script>

<style scoped>
:root {
  --swiper-theme-color: #FFF;
  --swiper-navigation-color: #FFF;
}
body {
  height: 100vh;
}
div {
  font-family: 'Ubuntu', open-sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  height: 100vh;
  /* See https://codepen.io/quadbaup/full/ZEQqzqM */
  animation: animateBg 60s linear infinite;
  background-image: linear-gradient(0deg,#ff00bb,#4242b8,#ff33ff,#83259d,#2e85d6,#ff00bb,#4242b8);
  background-size: 100% 600%;
}
.nostr-fosdem-bg {
  position: absolute;
  bottom: -25px;
  right: 100px;
  z-index: 999;
  width: 250px;
  height: 250px;
  img {
    opacity: .7;
    width: inherit;
    height: inherit;
  }
}
@keyframes animateBg {
  0% { background-position: 0% 0%; }
  100% { background-position: 0% 100%; }
}
</style>