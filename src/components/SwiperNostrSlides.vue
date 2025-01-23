<template>
  <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{ delay: 10000, disableOnInteraction: true, }"
    :pagination="{ clickable: true }" :navigation="true" :modules="modules" :loop="true"
    @autoplayTimeLeft="onAutoplayTimeLeft" class="mySwiper">

    <swiper-slide v-for="(slide, index) in slides" :key="index" :style="{
      backgroundImage: slide.background ? `url(${slide.background})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }">
      <div v-html="slide.text"></div>

      <!-- show some artist images -->
      <img class="artist" v-if="slide.image" :src=slide.image />

      <!-- if we have no background we show gradient with the image in bottom right -->
      <div v-if="!slide.background" class="nostr-fosdem-bg">
        <img src="@/assets/fosdem_ostrich_avatar.png" />
      </div>
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
  props: {
    slides: {
      type: Array,
      required: true,
    },
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

.nostr-fosdem-bg {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 999;
  width: 20vw;
  height: 20vw;
  opacity: 0.95;
}

.nostr-fosdem-bg img {
  opacity: 1;
  width: inherit;
  height: inherit;
}

img.artist {
  width: auto !important
}
</style>
