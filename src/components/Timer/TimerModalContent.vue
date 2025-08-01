<script setup lang="ts">
import { useTimerStore } from '@/stores/TimerStore';
import { computed } from 'vue'

let timer = useTimerStore();

timer.init();

const startingTime = computed({
  get() {
    return timer.startingTime / 1000 / 60;
  },

  set(seconds) {
    timer.startingTime = seconds * 1000 * 60;
  }
});

</script>

<template>
  <form action="" @submit.prevent>
    <div class="flex flex-col pt-6">
      <div class="flex justify-between flex-1 font-main px-1">
        <p>01</p>
        <p>15</p>
        <p>30</p>
        <p>45</p>
        <p>60</p>
      </div>
      <input v-model="startingTime" step="1" type="range" min="1" max="60" class="slider">
    </div>
  </form>
</template>

<style scoped>
.slider {
  width: 100%;
  background: var(--slider);
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-moz-range-thumb {
  background: white;
  cursor: pointer;
}
</style>
