import { defineStore } from 'pinia'

export const useHeaderNavStore = defineStore('headerNav', {
  state: () => ({
    isMobile: true,
    isActive: false,
    breakpoint: 1024
  }),

  actions: {
    toggleActive() {
      this.isActive = !this.isActive
    },
    removeActive() {
      this.isActive = false;
    },
    onWidthChange(windowWidth,) {
      if (windowWidth >= this.breakpoint) {
        this.isMobile = false;
        this.isActive = false;
      } else {
        this.isMobile = true;
      }
    }
  },
})