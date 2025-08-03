<script setup lang="ts">
import { ref } from 'vue'
import TimerModalContent from '@/components/Timer/TimerModalContent.vue'

let showModal = ref(false);

defineExpose({showModal});
</script>

<template>
  <button @click="showModal = true" class="cursor-pointer bg-holder p-2 rounded-lg hover:opacity-80 hover:scale-105 transition-all duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
  </button>

  <Teleport to="body">
    <Transition
      enter-from-class="opacity-0 scale-125"
      enter-active-class="transition duration-300"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-300"
      leave-to-class="opacity-0 scale-125"
    >
      <div v-show="showModal" class="bg-neutral-900/50 fixed inset-0 grid place-items-center">
        <div class="bg-holder relative rounded-md p-4 w-96 opacity-100">
          <button @click="showModal = false" class="absolute px-2 text-2xl z-10 hover:opacity-70 hover:scale-125 transition duration-300 cursor-pointer top-0 right-0">&times</button>
          <p class="absolute p-2 text-xl pl-2 font-main inset-x-0 top-0">Menu</p>
          <TimerModalContent />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>

</style>
