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
    <ButtonComponent
      :title="'Login Page'"
      @goToLogin="goToLogin()"
    ></ButtonComponent>

    <!-- Las propiedades las pasa el padre (HomePage.vue) al hijo (ButtonComponente.vue). Hay un flujo de datos
    del padre al hijo -->

    <!-- En los eventos no hay un flujo de datos. Primero creo el evento propio (@loquseaEl)
    al que le paso una función y dicho evento se queda escuchando como si fuera una antena de radio (el
    padre, HomePage se queda escuchando)
    Y ¿que escucha? la emisión de ese mismo evento por parte del hijo. El hijo tiene un @click que
    al hacer click emite el evento que estará escuchando el padre.
    En el padre:  $event es el segundo parámetro del $emit del botón hijo (en
    este caso True)) -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "src/boot/axios";
import ButtonComponent from "components/ButtonComponent.vue";

export default defineComponent({
  name: "HomePage",
  components: { ButtonComponent },

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
