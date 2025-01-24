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
      :navigation="true"
      :modules="modules"
      :loop="true"
      @autoplayTimeLeft="onAutoplayTimeLeft"
      class="mySwiper"
  >
    <swiper-slide>
      NOSTR
    </swiper-slide>
    <swiper-slide>
      It's a protocol, <br />
      not a platform
    </swiper-slide>
    <swiper-slide>
      Notes and Other Stuff Transmitted by Relays
    </swiper-slide>
    <swiper-slide>
      Foster freedom and social cohesion
    </swiper-slide>
    <swiper-slide>
      A libre protocol for communication using websockets
    </swiper-slide>
    <swiper-slide>
      Key signed events with data (JSON),<br />
      broadcasted between clients and relays
    </swiper-slide>
    <swiper-slide>
      Not a crypto, blockchain or web3 project
    </swiper-slide>
    <swiper-slide>
      A grassroots project
      started in 2019
      by Fiatjaf
    </swiper-slide>
    <swiper-slide>
      Not owned by anyone, no company, not even a foundation
    </swiper-slide>
    <swiper-slide>
      You are free to build anything, <br />
      but also embrace the chaos ;-)
    </swiper-slide>
    <swiper-slide>
      The database for your local-first application
    </swiper-slide>
    <swiper-slide>
      Rich development ecosystem with many libraries and SDKs
    </swiper-slide>
    <swiper-slide>
      It's serving the freedom of choice
    </swiper-slide>
    <swiper-slide>
      Zero switching costs
    </swiper-slide>
    <swiper-slide>
      Your profile is not tied to a domain
    </swiper-slide>
    <swiper-slide>
      The only decentralized protocol that has a chance of working
    </swiper-slide>
    <swiper-slide>
      Stop studying protocols, <br />
      just start building
    </swiper-slide>
    <swiper-slide>
      A movement endorsing digital autonomy
    </swiper-slide>
    <swiper-slide>
      Standardization and interoperability for every sub-protocol
    </swiper-slide>
    <swiper-slide>
      Use and build social apps for friends,
      not for billionaires
    </swiper-slide>
    <swiper-slide>
      The protocol is the API, <br />
      the API is on the protocol level
    </swiper-slide>
    <swiper-slide>
      Jack Dorsey, Edward Snowden and Stella Assange love it <br />
      #freedomtech
    </swiper-slide>
    <swiper-slide>
      Each relay is free to have any policy
    </swiper-slide>
    <swiper-slide>
      A local-first internet identity
    </swiper-slide>
    <swiper-slide>
      The most open network with digital signed and verifiable data
    </swiper-slide>
    <swiper-slide>
      Natural communities can form around any relay
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
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
      modules: [Autoplay, Pagination, Navigation],
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
  font-size: 8vw;
  font-weight: bold;
  text-shadow: 3px 3px 0px #262687, -3px 3px 0 #9f0279;
  box-sizing: border-box;
  padding: 0 10%;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  filter: invert(.1);
  small {
    font-size: 4vw;
  }
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
  top: 0;
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
