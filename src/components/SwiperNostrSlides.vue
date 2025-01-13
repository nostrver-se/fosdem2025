<template>
  <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 10000,
        disableOnInteraction: true,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="false"
      :modules="modules"
      :loop="true"
      @autoplayTimeLeft="onAutoplayTimeLeft"
      class="mySwiper"
  >
    <swiper-slide>
      A protocol, not a platform
    </swiper-slide>
    <swiper-slide>
      a libre protocol for communication using websockets
    </swiper-slide>
    <swiper-slide>
      Foster Freedom and social cohesion
    </swiper-slide>
    <swiper-slide>
      Notes and Other Stuff Transmitted by Relays
    </swiper-slide>
    <swiper-slide>
      key signed events with data,<br />
      broadcasted between clients and relays
    </swiper-slide>
    <swiper-slide>
      Not a platform, blockchain, web3 or a single entity owned project
    </swiper-slide>
    <swiper-slide>
      a grassroots project started in november 2019 by Fiatjaf
    </swiper-slide>
    <swiper-slide>
      Easy to implement, simplicity is winning
    </swiper-slide>
    <swiper-slide>
      Simple and flexible, so you are free to build anything<br />
      But you have to embrace the chaos ;-)
    </swiper-slide>
    <swiper-slide>
      the database for your Local-first application
    </swiper-slide>
    <swiper-slide>
      rich development environment with many libraries and SDKs
    </swiper-slide>
    <swiper-slide>
      serving freedom of choice
    </swiper-slide>
    <swiper-slide>
      not perfect and it will never be<br />
      worse is better (Richard P. Gabriel 1989)
    </swiper-slide>
    <swiper-slide>
      With Nostr you can stop studying protocols, but just start building
    </swiper-slide>
    <swiper-slide>
      a movement endorsing digital autonomy
    </swiper-slide>
    <swiper-slide>
      not for billionaires
    </swiper-slide>
    <swiper-slide>
      the protocol is the API / the API is on the protocol level
    </swiper-slide>
    <swiper-slide>
      Jack Dorsey and Edward Snowden loves Nostr
    </swiper-slide>
    <template #container-end>
      <div class="autoplay-progress">
        <svg viewBox="0 0 48 48" ref="progressCircle">
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref="progressContent"></span>
      </div>
    </template>
  </swiper>
</template>

<script>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const progressCircle = ref(null);
    const progressContent = ref(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty('--progress', 1 - progress);
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return {
      onAutoplayTimeLeft,
      progressCircle,
      progressContent,
      modules: [Autoplay, Pagination],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper {
  width: 100%;
  height: 100vh;
}

.swiper-slide {
  font-family: 'Ubuntu Mono';
  text-align: center;
  font-size: 6vw;
  font-weight: bold;
  text-shadow: 4px 3px 0px #4242b8, -4px 3px 0 #ff00bb;
  text-transform: lowercase;
  box-sizing: border-box;
  padding: 0 10%;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  filter: invert(.2);
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #FFF;
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: #FFF;
  fill: none;
  stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>
