<template>
  <div>HOME</div>
  <button @click="goToLogin()">Login Page</button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  data() {
    return {};
  },
  methods: {
    goToLogin() {
      this.$router.push("/");
    },
  },
});
</script>
