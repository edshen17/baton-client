<script setup lang="ts">
import { ref } from 'vue'
const audioPlayer = ref(null)
const audioRange = ref(null)
const rangeSlider = ref(0);
let isPaused = ref(true);
// const props = defineProps<{ _id: string }>()
// const router = useRouter()
// const { t } = useI18n()
const toggleAudio = () => {
  const audio = audioPlayer.value;
  if (audio.paused) {
    audioPlayer.value.play();
    isPaused.value = false;
  } else {
    audio.pause();
    isPaused.value = true;
  }
}

const onTimeUpdate = () => {
  const audio = audioPlayer.value;
  const percentagePosition = (100 * audio.currentTime) / audio.duration;
  rangeSlider.value = percentagePosition;
}

const onRangeChange = () => {
  const audio = audioPlayer.value;
  const time = (rangeSlider.value * audio.duration) / 100;
  audio.currentTime = time;
}
</script>

<template>
  <div class="w-full my-8 h-screen-sm md:my-0">
    <div class="flex items-center justify-center md:h-screen">
      <div class="w-11/12 mx-6 md:w-1/4">
        <img class="aspect-auto w-full h-80 md:w-52 md:h-52 object-cover"
          src="https://source.unsplash.com/random/900×900/?nature" alt="Song Picture">
        <div class="flex-wrap">
          <div class="w-full my-8">
            <div class="flex justify-between">
              <div>
                <h3 class="text-xl text-gray-300 font-medium">A Sky Full of Stars</h3>
                <p>artist name</p>
              </div>
              <div>
                <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                </svg>
              </div>
            </div>
            <div class="audio-player">
              <audio ref="audioPlayer" @timeupdate='onTimeUpdate'
                src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1"></audio>
              <div class=" flex controls justify-center items-center mx-auto">
                <input type="range" ref="audioRange" class="time-slider bg-gray-200 rounded w-full h-1 rounded-2"
                  max="100" :style="{ 'background-size': `${rangeSlider}% 100%` }" @change="onRangeChange"
                  v-model="rangeSlider">
              </div>
            </div>
            <div class="flex justify-center items-center mt-8">
              <button class="text-black dark:text-white p-8 rounded-full border-3 border-gray-500 dark:border-gray-400"
                @click="toggleAudio">
                <div class="w-8 h-8"
                  :class="{ 'i-carbon-play-filled-alt': isPaused, 'i-carbon-pause-filled': !isPaused }"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.time-slider {
  -webkit-appearance: none;
  background-image: linear-gradient(rgb(165 180 252), rgb(165 180 252));
  background-repeat: no-repeat;
}

.time-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  cursor: pointer;
  transition: all .1s;
  background-color: rgb(129 140 248);
}

.time-slider::-webkit-slider-thumb:hover {
  background-color: rgb(99 102 241);
}

.time-slider:hover::-webkit-slider-thumb {
  opacity: 1;
}

.time-slider::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}
</style>