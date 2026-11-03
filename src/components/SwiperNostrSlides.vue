<template>
  <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{ delay: 10000, disableOnInteraction: false, }"
    :pagination="{ clickable: true }" :navigation="true" :keyboard="{ enabled: true }" :modules="modules" :loop="true"
    @autoplayTimeLeft="onAutoplayTimeLeft" @slideChange="onSlideChange" class="mySwiper">

    <swiper-slide v-for="(slide, index) in slides" :key="index" :style="{
      backgroundImage: slide.background ? `url(${slide.background})` : 'none',
      backgroundColor: slide.image ? 'black' : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }">
      <div v-html="slide.text"></div>

      <!-- show some artist images -->
      <img class="artist" v-if="slide.image" :src=slide.image />
    </swiper-slide>

    <template #container-end>
      <div class="autoplay-progress">
        <svg viewBox="0 0 48 48" ref="progressCircle">
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref="progressContent"></span>
      </div>

      <!-- fixed decorative image, not tied to any slide (rendered outside the transformed wrapper) -->
      <div v-if="showOstrich" class="nostr-fosdem-bg" :style="{
        '--walk-duration': walkDuration + 's',
        '--walk-distance': walkDistance + 'vw',
        '--walk-scale': walkScale
      }" @animationiteration="onWalkIteration">
        <img src="@/assets/fosdem_ostrich_avatar.png" />
      </div>
    </template>
  </swiper>
</template>

<script>
import { ref, computed } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper/modules';

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
  setup(props) {
    const progressCircle = ref(null);
    const progressContent = ref(null);
    const activeIndex = ref(0);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty('--progress', 1 - progress);
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const onSlideChange = (swiper) => {
      activeIndex.value = swiper.realIndex;
    };
    const showOstrich = computed(() => {
      const slide = props.slides[activeIndex.value];
      return !!slide && !slide.background && !slide.image;
    });

    // Random slow "walk": duration, travel distance and a subtle size change.
    const randomWalkDuration = () => 24 + Math.random() * 20; // 24-50s (slow)
    const randomWalkDistance = () => 45 + Math.random() * 45; // 45-80vw
    const randomWalkScale = () => 1.09 + Math.random() * 0.75; // 1.04-1.14

    const walkDuration = ref(randomWalkDuration());
    const walkDistance = ref(randomWalkDistance());
    const walkScale = ref(randomWalkScale());

    // New random velocity / size for every crossing.
    const onWalkIteration = () => {
      walkDuration.value = randomWalkDuration();
      walkDistance.value = randomWalkDistance();
      walkScale.value = randomWalkScale();
    };

    return {
      onAutoplayTimeLeft,
      onSlideChange,
      showOstrich,
      walkDuration,
      walkDistance,
      walkScale,
      onWalkIteration,
      progressCircle,
      progressContent,
      modules: [Autoplay, Pagination, Keyboard],
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
  position: fixed;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  width: 15vw;
  height: 15vw;
  opacity: 0.75;
  /* bottom stays glued to the viewport bottom while scaling */
  transform-origin: bottom center;
  will-change: transform;
  animation: ostrich-walk var(--walk-duration, 30s) linear infinite;
}

@keyframes ostrich-walk {
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(var(--walk-distance, 60vw)) scale(var(--walk-scale, 1.08));
  }
  100% {
    transform: translateX(0) scale(1);
  }
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
