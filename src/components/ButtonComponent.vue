<template>
  <button :class="clases" @click="handleClick()">
    {{ title }}
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",

  props: {
    title: {
      type: String,
      required: true,
    },
    clases: {
      type: String,
      default: "",
    },
  },

  methods: {
    handleClick() {
      this.$emit("goToHome");
      this.$emit("goToLogin");
      this.$emit("addToCart");
      this.$emit("discardProduct");
      this.$emit("continueShopping");
    },
  },
});
</script>

<style scoped>
.discard {
  height: fit-content;
  align-self: flex-end;
}
</style>
