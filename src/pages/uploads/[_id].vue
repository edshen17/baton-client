<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { makeAudioUploadRepository } from '~/repositories/audio-upload';
const audioUploadRepository = makeAudioUploadRepository;
const audioPlayer = ref(null)
const isLoading = ref(true)
const seekSliderData = ref({
  max: 100,
  currentTime: 0,
})
const audioUpload = ref(null);
const isPaused = ref(true);
const props = defineProps<{ _id: string }>()
let raf = null;

onMounted(async () => {
  const { data } = await audioUploadRepository.getById({ _id: props._id })
  audioUpload.value = data.audioUpload;
  isLoading.value = false;
})

const toggleAudio = () => {
  const audio = audioPlayer.value;
  if (audio.paused) {
    audio.play();
    isPaused.value = false;
  } else {
    audio.pause();
    isPaused.value = true;
  }
}

const whilePlaying = () => {
  const audio = audioPlayer.value;
  seekSliderData.value.currentTime = Math.floor(audio.currentTime);
  raf = requestAnimationFrame(whilePlaying);
}

const onSeekSliderChange = () => {
  const audio = audioPlayer.value;
  audio.currentTime = Math.floor(seekSliderData.value.currentTime);
  if (!audio.paused) {
    requestAnimationFrame(whilePlaying);
  }
}

const onSeekSliderInput = () => {
  const audio = audioPlayer.value;
  if (!audio.paused) {
    cancelAnimationFrame(raf);
  }
}

const onLoadedMetaData = () => {
  const audio = audioPlayer.value;
  seekSliderData.value.max = Math.floor(audio.duration);
}
</script>

<template>
  <Suspense>
    <template #default>
      <div class="w-full h-screen my-4 md:my-12" v-if="!isLoading">
        <div class="flex items-center justify-center">
          <div class="w-11/12 mx-6 md:w-8/12 xl:w-4/12">
            <img class="aspect-auto w-full h-72 md:w-full md:h-96 object-cover"
              src="https://source.unsplash.com/random/900×900/?nature" alt="Song Picture">
            <div class="flex-wrap">
              <div class="w-full my-5 md:my-8">
                <div class="flex justify-between">
                  <div>
                    <h3 class="text-xl font-medium pr-4 break-all">{{ audioUpload.fileName }}</h3>
                  </div>
                  <a :href="audioUpload.sourceUrl">
                    <div class="i-carbon-download h-6"></div>
                  </a>
                </div>
                <div class="audio-player">
                  <div class=" flex justify-center items-center mx-auto py-8">
                    <audio ref="audioPlayer" :src="audioUpload.sourceUrl" @loadedmetadata="onLoadedMetaData"></audio>
                    <input type="range" @change="onSeekSliderChange" @input="onSeekSliderInput"
                      class="time-slider bg-gray-200 rounded w-full h-2"
                      :style="{ 'background-size': `${seekSliderData.currentTime}% 100%` }"
                      v-model="seekSliderData.currentTime">
                  </div>
                </div>
                <div class="flex justify-center items-center">
                  <button
                    class="text-black dark:text-white p-8 rounded-full border-3 border-gray-500 dark:border-gray-400"
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
    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>

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