<script setup lang="ts">
import { makeAudioUploadRepository } from '~/repositories/audio-upload';
import { ref } from 'vue'
import { makeGoogleCloudStorageRepository } from '~/repositories/google-cloud-storage';
const { t } = useI18n()
const file = ref(null)
const audioUploadRepository = makeAudioUploadRepository
const googleStorageRepository = makeGoogleCloudStorageRepository;

const selectFile = async () => {
  file.value.click();
}

const uploadFile = async (event: any) => {
  const file = event.target.files[0]
  const { downloadUrl } = await googleStorageRepository.create({
    file,
    metaData: { contentType: file.type },
    cloudFilePath: 'test/test.mp3',
  })
  const { data } = await audioUploadRepository.create({
    payload: {
      userId: '',
      sourceUrl: downloadUrl
    },
  });
}
</script>

<template>
  <main class="text-lg">
    <section class="pt-8 pb-5 md:py-20">
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4 pb-2">
            <img alt="..." class="max-w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1526394931762-90052e97b376?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287">
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4 pt-8 pb-3">
            <div class="md:pr-12">
              <h3 class="text-3xl font-semibold text-gray-600 dark:text-gray-300">
                {{ t('home.trackMedia.title') }}
              </h3>
              <p class="mt-4 text-lg leading-relaxed">
                {{ t('home.trackMedia.subTitle') }}
              </p>
              <ul class="list-none mt-4">
                <li class="py-2" v-for="n in 3">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"></span>
                    </div>
                    <div>
                      <h4>
                        {{ t(`home.features.${n - 1}`) }}
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-0 md:pt-20 md:pb-48">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center md:text-center mb-24">
          <div class="w-full lg:w-7/12 px-4">
            <h2 class="text-3xl font-semibold text-gray-600 dark:text-gray-300">
              {{ t('home.cta.title') }}
            </h2>
            <input ref="file" type="file" hidden name="audio" accept=".mp3" @change="uploadFile">
            <button
              class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 hover:bg-indigo-600 rounded mt-8 mb-6"
              @click="selectFile">
              {{ t('button.tryNow') }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

  <route lang="yaml">
  meta:
    layout: default
  </route>