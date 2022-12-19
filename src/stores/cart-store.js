import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
  state: () => ({
    name: "",
    email: "",
    password: "",
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
