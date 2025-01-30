<template>
  <NostrUSPs />
</template>

<script setup>
import NostrUSPs from '@/pages/NostrUSPs.vue';
</script>

<style>
@font-face {
  font-family: 'Ubuntu';
  src: local('Ubuntu'), url('./assets/fonts/Ubuntu-M.ttf');
}
@font-face {
  font-family: 'Ubuntu Mono';
  src: local('Ubuntu Mono'), url('./assets/fonts/UbuntuMono-B.ttf');
}
:root {
  --swiper-pagination-color: #FFF;
}
html, body {
  font-family: 'Ubuntu';
  height: 100vh;
  margin: 0;
}
</style>
