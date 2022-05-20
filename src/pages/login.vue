<script setup lang="ts">
// const { t } = useI18n()
</script>

<template>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 dark:bg-gray-900 bg-opacity-50 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
      <div class="mb-4">
        <label for="full-name" class="leading-7 text-sm text-left">Full Name</label>
        <input id="full-name" type="text" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm">Email</label>
        <input id="email" type="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Log In
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
