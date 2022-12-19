<template>
  <div class="login">
    <form @submit="handleOnSubmit()">
      <div class="input email-input">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user_email" />
      </div>

      <div class="input password-input">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="user_password" />
      </div>

      <button type="onSubmit">LOGIN</button>
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginPage",

  data() {
    return {
      user_email: "",
      user_password: "",
    };
  },

  methods: {
    handleOnSubmit() {
      const URL = "https://fakeDataBase";

      const data = {
        email: this.user_email,
        password: this.user_password,
      };

      this.$axios.put(URL, data);
    },
  },
});
</script>

<style scoped>
.login {
  width: fit-content;
  height: fit-content;
  margin: auto;
  margin-top: 10%;
  border: thin solid black;
  padding: 50px;
  background-color: rgba(0, 140, 255, 0.171);
  border-radius: 20px;
}

.input {
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 5px;
  margin-top: 20px;
}
form {
  text-align: center;
}
button {
  width: fit-content;
  margin-top: 15px;
  font-size: small;
  border-radius: 20px;
}
</style>
