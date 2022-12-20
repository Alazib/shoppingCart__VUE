<template>
  <div class="card">
    <img :src="product.thumbnail" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "src/boot/axios";

export default defineComponent({
  name: "ItemDetail",

  data() {
    return {
      product_id: this.$route.params.id,
      product: {},
    };
  },

  created() {
    api.get(`/products/${this.product_id}`).then((response) => {
      let productSelected = response.data;
      this.product = productSelected;
    });
  },
});
</script>
