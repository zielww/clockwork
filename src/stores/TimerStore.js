import { defineStore } from 'pinia'

export let useTimerStore = defineStore('timer', {
  state: () => ({
    startingTime: 120_000,
    timeLeft: 120_000,
    intervalId: null,
    timeRunning: false,
    startedAt: 0,
  }),

  getters: {
    totalSeconds() {
      return Math.floor(this.timeLeft / 1000);
    },

    minutes() {
      return String(Math.floor(this.totalSeconds / 60)).padStart(2, '0');
    },

    seconds() {
      return String(this.totalSeconds % 60).padStart(2, '0');
    },
  },

  actions: {
    startTimer() {
      if (this.timeRunning) return;

      this.startedAt = Date.now();
      this.timeRunning = true;

      this.intervalId = setInterval(() => {
        const elapsed = Date.now() - this.startedAt;
        this.timeLeft = Math.max(0, this.startingTime - elapsed);
        if (this.timeLeft === 0) this.stopTimer();
      }, 250);
    },

    stopTimer() {
      clearInterval(this.intervalId);
      this.timeRunning = false;
    },

    resetTimer() {
      this.stopTimer();
      this.timeLeft = this.startingTime;
    },
  },
})
