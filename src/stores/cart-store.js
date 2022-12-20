import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
  state: () => ({
    cart_products: [],
  }),

  getters: {
    checkCart: (state) => state.cart_products,
  },

  actions: {
    addToCart(product) {
      this.cart_products.push(product);
      console.log(this.cart_products);
    },
  },
});
