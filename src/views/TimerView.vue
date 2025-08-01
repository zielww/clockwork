<script setup>
import { useTimerStore } from '@/stores/TimerStore.js'
import TimerMenu from '@/components/Timer/TimerMenu.vue'
import { computed } from 'vue'

const timer = useTimerStore()

// Toggle animation for the time display
const toggleClass = computed(() => {
  return timer.timeRunning ? 'animate-pulse text-[35rem]' : 'text-[35rem]';
});

// Scale wrapper for scale range slider
const scaleWrapper = computed(() => {
  return `scale: ${timer.timerScale}%`;
})
</script>

<template>
  <main class="grid place-items-center w-full h-full">
    <div class="grid grid-cols-2 gap-x-8 w-[70%] h-[65svh] font-main text-primary" :style="scaleWrapper" >
      <div class="bg-holder rounded-[5%] flex items-center justify-center overflow-hidden">
        <p :class="toggleClass">{{ timer.minutes }}</p>
      </div>
      <div
        class="bg-holder rounded-[5%] flex items-center justify-center overflow-hidden text-center"
      >
        <p :class="toggleClass">{{ timer.seconds }}</p>
      </div>
    </div>
    <div class="bg-holder h-2 fixed w-full"></div>

    <TimerMenu />
  </main>
</template>
