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
    },
    deleteFromCart(id) {
      this.cart_products = this.cart_products.filter((product) => {
        return id != product.id;
      });
    },
  },
});
