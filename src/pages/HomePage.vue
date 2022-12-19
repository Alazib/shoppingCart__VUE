<template>
  <div>
    <ul>
      <li v-for="product in products" v-bind:key="product.id">
        <img :src="product.thumbnail" />
      </li>
    </ul>
  </div>
  <button @click="goToLogin()">Login Page</button>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "src/boot/axios";

export default defineComponent({
  name: "HomePage",

  data() {
    api.get("/products?limit=100").then((response) => {
      let shoppingProducts = response.data.products;
      this.products = shoppingProducts;
    });

    return {
      products: [],
    };
  },

  methods: {
    goToLogin() {
      this.$router.push("/");
    },
  },
});
</script>

<style scoped>
img {
  width: 200px;
}
ul {
  list-style: none;
}
</style>
