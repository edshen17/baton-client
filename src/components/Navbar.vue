<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref(false)
const { t } = useI18n()
const routerLinks = computed(() => {
  return [
    {
      title: t('nav.sign-up'),
      path: '/signup',
      isShowing: true,
    },
    {
      title: t('nav.login'),
      path: '/login',
      isShowing: true,
    },
  ]
})
</script>

<template>
  <header class="shadow-md sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center dark:bg-slate-800">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-white w-10 h-10  p-2 bg-teal-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <RouterLink to="/" class="text-2xl px-3 dark:text-white" tag="button">
          Reader
        </RouterLink>
      </div>
      <div class="sm:hidden">
        <button type="button" class="block " @click="isOpen = !isOpen">
          <div v-if="!isOpen" i-carbon-menu class="text-xl" />
          <div v-else i-carbon-close class="text-2xl" />
        </button>
      </div>
    </div>
    <div class="px-3 pt-2 pb-4 sm:p-4 sm:flex" :class="isOpen ? 'block' : 'hidden'">
      <div
        v-for="routerLink in routerLinks"
        :key="routerLink.title"
      >
        <RouterLink
          v-show="routerLink.isShowing"
          :to="routerLink.path"
          class="py-3 sm:mt-0 sm:ml-2 block sm:py-0 rounded px-2 dark:hover:text-gray-300 hover:text-gray-800"
        >
          {{ routerLink.title }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>
