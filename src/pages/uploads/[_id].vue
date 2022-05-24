<script setup lang="ts">
import { ref, onMounted } from 'vue'
const audioPlayer = ref(null)
const audioRange = ref(null)
const rangeSlider = ref(0);
let isPaused = ref(true);
const props = defineProps<{ _id: string }>()

onMounted(() => {
})

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
  <div class="w-full h-screen my-4 md:my-12">
    <div class="flex items-center justify-center">
      <div class="w-11/12 mx-6 md:w-8/12 xl:w-4/12">
        <img class="aspect-auto w-full h-72 md:w-full md:h-96 object-cover"
          src="https://source.unsplash.com/random/900×900/?nature" alt="Song Picture">
        <div class="flex-wrap">
          <div class="w-full my-4 md:my-8">
            <div class="flex justify-between">
              <div>
                <h3 class="text-xl font-medium">A Sky Full of Stars</h3>
              </div>
              <a
                href="https://storage.cloud.google.com/japanese-221819.appspot.com/186b6f97-203e-4cbc-bad8-9885af0f62d7-baton/media/sample-3s.mp3">
                <div class="i-carbon-download h-6"></div>
              </a>
            </div>
            <div class="audio-player">
              <audio ref="audioPlayer" @timeupdate='onTimeUpdate' controlsList="download"
                src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1"></audio>
              <div class=" flex justify-center items-center mx-auto py-8">
                <input type="range" ref="audioRange" class="time-slider bg-gray-200 rounded w-full h-1 rounded-2"
                  max="100" :style="{ 'background-size': `${rangeSlider}% 100%` }" @change="onRangeChange"
                  v-model="rangeSlider">
              </div>
            </div>
            <div class="flex justify-center items-center">
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