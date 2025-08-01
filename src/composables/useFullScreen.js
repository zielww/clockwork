import { ref } from 'vue'

export function useFullScreen() {
  let isFullScreen = ref(false);

  function toggleFullScreen() {
    if (!isFullScreen.value) {
      document.documentElement.requestFullscreen().then(r => console.log(r, '\nEnter Full Screen'));
      isFullScreen.value = true;
    } else {
      document.exitFullscreen().then(r => console.log(r, '\nExit Full Screen'));
      isFullScreen.value = false;
    }
  }

  return toggleFullScreen;
}

