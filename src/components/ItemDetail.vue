<template>
  <div class="card-and-add-button">
    <div class="card">
      <img :src="product.thumbnail" />
      <div class="description">
        <span
          ><b>{{ product.description }}</b></span
        >
        <span>Brand: {{ product.brand }}</span>
        <span>Price: {{ product.price }} Euros</span>
        <span>Discount: {{ product.discountPercentage }}%</span>
        <span
          >Final price:
          {{
            product.price - product.discountPercentage * 0.01 * product.price
          }}
          Euros
        </span>
      </div>
    </div>
    <button @click="add()">Add to cart</button>
    <button @click="checkCart()">Check cart</button>
  </div>
  {{ store.checkCart }}
</template>

<script>
import { defineComponent } from "vue";
import { api } from "src/boot/axios";
import { useCart } from "src/stores/cart-store";

export default defineComponent({
  name: "ItemDetail",

  data() {
    return {
      product_id: this.$route.params.id,
      product: {},
      store: useCart(),
    };
  },

  created() {
    api.get(`/products/${this.product_id}`).then((response) => {
      let productSelected = response.data;
      this.product = productSelected;
      console.log(productSelected);
    });
  },

  methods: {
    add() {
      this.store.addToCart(this.product);
    },
  },
});
</script>

<style scoped>
.card-and-add-button {
  display: flex;
  flex-direction: row;
}
span {
  display: block;
  margin-bottom: 10px;
}

.card {
  text-align: center;
}

button {
  align-self: center;
}
</style>
