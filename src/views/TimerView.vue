<script setup>
import { useTimerStore } from '@/stores/TimerStore.js'

const timer = useTimerStore()

timer.fill();

function buttonLabel() {
  return timer.timeRunning ? 'Stop' : 'Start';
}

function buttonAction() {
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
      <button  @click="buttonAction" class="cursor-pointer bg-holder py-2 px-4 rounded-md hover:opacity-80"> {{ buttonLabel() }}</button>
      <button @click="timer.resetTimer()" class="cursor-pointer bg-holder py-2 px-4 rounded-md hover:opacity-80">Reset</button>
    </div>
  </main>
</template>
