<template>
  <div class="products-and-resume">
    <ol class="products">
      <li v-for="product in products_selected" :key="product.id">
        <img :src="product.thumbnail" />
        <div class="description">
          <p><b>Product: </b>{{ product.title }}</p>
          <p><b>Brand: </b> {{ product.brand }}</p>
          <p><b>Price: </b>{{ product.price }} Euros</p>
        </div>
        <ButtonComponent
          :title="'Discard'"
          @discardProduct="discardProduct(product.id)"
          :class="'discard'"
        ></ButtonComponent>
      </li>
    </ol>
    <div class="resume">
      <p>Total products: {{ products_selected.length }}</p>
      <p>Total price: {{ totalPrice() }} Euros</p>
      <ButtonComponent :title="'Buy'"></ButtonComponent>
      <ButtonComponent
        :title="'Continue shopping'"
        @continueShopping="goToHome()"
      ></ButtonComponent>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useCart } from "src/stores/cart-store";
import ButtonComponent from "src/components/ButtonComponent.vue";

export default defineComponent({
  name: "CartPage",
  components: { ButtonComponent },
  data() {
    return {
      store: useCart(),
      products_selected: [],
    };
  },

  mounted() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      const storedProducts = this.store.checkCart;
      this.products_selected = storedProducts;
    },
    goToHome() {
      this.$router.push("/home");
    },
    totalPrice() {
      let totalPrice = 0;
      this.products_selected.forEach((product) => {
        return (totalPrice += product.price);
      });
      return totalPrice;
    },
    discardProduct(id) {
      this.store.deleteFromCart(id);
      this.products_selected = this.store.checkCart;
    },
  },
});
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}

li {
  display: flex;
  flex-wrap: wrap;
  border: thin black solid;
  margin: 10px;
  width: 500px;
  padding: 10px;
  border-radius: 20px;
}

.description {
  margin-left: 100px;
  width: 219px;
}

p:nth-child(3) {
  margin-bottom: 0px;
}

.products-and-resume {
  display: flex;
  justify-content: center;
}

.resume {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: thin solid black;
  height: fit-content;
  padding: 30px;
  border-radius: 20px;
  align-self: center;
}
</style>
