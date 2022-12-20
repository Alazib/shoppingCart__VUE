<template>
  <div class="shop-window-and-button">
    <div class="shop-window">
      <div
        class="item-card"
        v-for="product in products"
        v-bind:key="product.id"
        @click="goToDetail(product.id)"
      >
        <img :src="product.thumbnail" />
        <div class="label">
          <span>{{ product.title }}</span>
          <span>Price: {{ product.price }} euros</span>
        </div>
      </div>
    </div>
    <button @click="goToLogin()">Login Page</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "src/boot/axios";

export default defineComponent({
  name: "HomePage",

  data() {
    return {
      products: [],
    };
  },

  created() {
    api.get("/products?skip=60&limit=30").then((response) => {
      let shoppingProducts = response.data.products;
      this.products = shoppingProducts;
      console.log(shoppingProducts);
    });
  },

  methods: {
    goToLogin() {
      this.$router.push("/");
    },

    goToDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
});
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}

.shop-window-and-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
}

.shop-window {
  display: flex;
  flex-wrap: wrap;
}

.item-card {
  margin: 50px;
  height: 200px;
  width: 200px;
}

.label {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: thin black solid;
  margin-top: 10px;
}
span {
  font-size: small;
  text-align: center;
  margin-bottom: 3px;
}

button {
  width: fit-content;
  margin-top: 100px;
}
</style>
