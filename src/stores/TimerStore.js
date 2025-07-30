import { defineStore } from 'pinia';

let interval;

export let useTimerStore = defineStore('timer', {
  state: () => ({
    startingTime: 10000,
    endTime: 0,
    minutes: "00",
    seconds: "00",
    timeRunning: false,
  }),

  actions: {
    fill() {
      this.$patch({
        minutes: this.getMinutes,
        seconds: this.getSeconds,
      })
    },

    startTimer() {
      if (this.timeRunning) return;

      this.stopTimer();
      interval = setInterval(() => {
        if (this.startingTime > 0) {
          this.startingTime -= 1000,
          this.fill();
        }
      }, 1000);

      this.timeRunning = true;
    },

    stopTimer() {
      clearInterval(interval);
      this.timeRunning = false;
    },

    resetTimer() {
      this.stopTimer();
      this.startingTime = 120000;
      this.fill();
    },

    // Add Padding to the Text
    padTime(time) {
      return time.toString().padStart(2, "0");
    },
  },

  getters: {
    getTotalSeconds() {
      return Math.floor(this.startingTime / 1000);
    },

    getMinutes() {
      return this.padTime(Math.floor(this.getTotalSeconds / 60));
    },

    getSeconds() {
      return this.padTime(this.getTotalSeconds % 60);
    },
  }
})
