<script setup>
import { useTimerStore } from '@/stores/TimerStore.js';

const timer = useTimerStore();

function toggle() {
  return timer.timeRunning ? timer.stopTimer() : timer.startTimer();
}
</script>

<template>
  <main class="grid place-items-center w-full h-full">
    <div class="grid grid-cols-2 gap-x-8 w-[70%] h-[65svh] font-main text-primary">
      <div class="bg-holder rounded-[5%] flex items-center justify-center overflow-hidden">
        <p class="text-[35rem]">{{ timer.minutes }}</p>
      </div>
      <div
        class="bg-holder rounded-[5%] flex items-center justify-center overflow-hidden text-center"
      >
        <p class="text-[35rem]">{{ timer.seconds }}</p>
      </div>
    </div>
    <div class="bg-holder h-2 fixed w-full"></div>

    <div class="fixed bottom-0 pb-10 flex gap-x-5">
      <button  @click="toggle" class="cursor-pointer bg-holder p-2 rounded-lg hover:opacity-80">
        <svg v-if="!timer.timeRunning" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#b7b7b7"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>
        <svg v-if="timer.timeRunning" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#b7b7b7"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/></svg>
      </button>
      <button @click="timer.resetTimer()" class="cursor-pointer bg-holder p-2 rounded-lg hover:opacity-80">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#b7b7b7"><path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"/></svg>
      </button>
    </div>

    <!-- Development Notice -->
    <div class="fixed bottom-0">
      <p class="text-primary opacity-80">currently in development</p>
    </div>
  </main>
</template>
