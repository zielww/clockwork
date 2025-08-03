<script setup lang="ts">
import { useTimerStore } from '@/stores/TimerStore';
import TimerModal from '@/components/Timer/TimerModal.vue'
import { onMounted, onUnmounted, ref } from 'vue'

let clock = useTimerStore();
let modalRef = ref(null);

const toggle = () => {
  return clock.timeRunning ? clock.stopTimer() : clock.startTimer();
}

const handleKeyboardShortcuts = (e) => {
  if (['r', ' ', 'm'].includes(e.key)) {
    e.preventDefault();
  }
  switch (e.key) {
    case 'r':
      clock.resetTimer();
      break;
    case ' ':
      toggle();
      break;
    case 'm':
      if (modalRef.value) {
        modalRef.value.showModal = !modalRef.value.showModal;
      }
      break;
  }
}

onMounted(() => window.addEventListener('keydown', handleKeyboardShortcuts));

onUnmounted(() => window.removeEventListener('keydown', handleKeyboardShortcuts));

</script>

<template>
  <div class="fixed bottom-0 pb-10 flex gap-x-5">
    <button  @click="toggle" class="cursor-pointer bg-holder p-2 rounded-lg hover:opacity-80 hover:scale-105 transition-all duration-300">
      <svg v-if="!clock.timeRunning" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#b7b7b7"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>
      <svg v-if="clock.timeRunning" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#b7b7b7"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/></svg>
    </button>
    <button @click="clock.resetTimer()" class="cursor-pointer bg-holder p-2 rounded-lg hover:opacity-80 hover:scale-105 transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#b7b7b7"><path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"/></svg>
    </button>
    <TimerModal ref="modalRef" />
  </div>

</template>

<style scoped>

</style>
