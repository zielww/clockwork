<script setup lang="ts">
import { ref } from 'vue'

let showModal = ref(false);
</script>

<template>
  <button @click="showModal = !showModal" class="cursor-pointer hover:opacity-60 hover:scale-105 transition duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#b7b7b7"><path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z"/></svg>
  </button>

  <Teleport to="body">
    <Transition
      enter-from-class="opacity-0 scale-125"
      enter-active-class="transition duration-300"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-300"
      leave-to-class="opacity-0 scale-125"
    >
      <div v-show="showModal" class="fixed right-0 bottom-0">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk?si=m-GLL7YiKnvl_qfB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </Transition>
  </Teleport>

</template>

<style scoped>

</style>
