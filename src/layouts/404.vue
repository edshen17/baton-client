<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div class="text-gray-700 dark:text-gray-400 flex flex-col h-screen">
    <NavBar />
    <main p="x4 y10" text="center teal-700 dark:gray-200" class="flex-grow">
      <div text-4xl>
        <div i-carbon-warning inline-block />
      </div>
      <RouterView />
      <div>
        <button btn text-sm m="3 t8" @click="router.back()">
          {{ t("button.back") }}
        </button>
      </div>
    </main>
    <Footer />
  </div>
  <!--  -->
</template>
