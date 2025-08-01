<script setup>
import { useTimerStore } from '@/stores/TimerStore.js'
import TimerMenu from '@/components/Timer/TimerMenu.vue'

const clock = useTimerStore()
</script>

<template>
  <main class="grid place-items-center w-full h-full">
    <div class="grid grid-cols-2 gap-x-8 w-[70%] h-[65svh] font-main text-primary">
      <div class="bg-holder rounded-[5%] flex items-center justify-center overflow-hidden">
        <p class="text-[35rem]">{{ clock.minutes }}</p>
      </div>
      <div
        class="bg-holder rounded-[5%] flex items-center justify-center overflow-hidden text-center"
      >
        <p class="text-[35rem]">{{ clock.seconds }}</p>
      </div>
    </div>
    <div class="bg-holder h-2 fixed w-full"></div>

    <TimerMenu />

    <!-- Development Notice -->
    <div class="fixed bottom-0">
      <p class="text-primary opacity-80 font-main">Under development</p>
    </div>
  </main>
</template>
