<template>
  <div class="login">
    <div v-if="loginError" class="alert alert-danger" role="alert">
      {{ loginError }}
    </div>
    <form class="form" @submit="onSubmit">
      <h1>Login</h1>
      <div class="twice p-2">
        <input
          type="email"
          class="form-control"
          name="email"
          id="email"
          placeholder="Email"
          v-model="email"
          :style="errors.email ? 'border-color:red;' : 'border-color:default;'"
        />
        <span class="text-danger" v-if="errors.email">{{ errors.email }}</span>
      </div>
      <div class="twice p-2">
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
          placeholder="Password"
          v-model="password"
          :style="
            errors.password ? 'border-color:red;' : 'border-color:default;'
          "
        />
        <span class="text-danger" v-if="errors.password">{{
          errors.password
        }}</span>
      </div>
      <div class="twice p-2">
        <button type="submit" class="btn btn-contact">Sign in</button>
      </div>
      <div class="register d-flex justify-content-end">
        <router-link to="#"> Don't have an account? Register. </router-link>
      </div>
    </form>
  </div>
</template>
<script>
/* eslint-disable */
import { useField, useForm } from "vee-validate";
import { useStore } from "vuex";
// eslint-disable-next-line
import { object, string, number, boolean } from "yup";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const loginError = ref("");
    const router = useRouter();
    const validationSchema = object({
      email: string().email().required("we need your email").min(4),
      password: string().required("A nice subject must be inserted").min(4),
    });
    const { handleSubmit, errors } = useForm({ validationSchema });

    const onSubmit = handleSubmit((values) => {
      store
        .dispatch("login", values)
        .then(() => {
          router.push({ name: "dashboard" });
        })
        .catch((err) => {
          loginError.value = "UNABLE TO CONNECT WITH THE SERVER";
        });
    });

    const { value: email } = useField("email");
    const { value: password } = useField("password");

    return {
      onSubmit,
      email,
      password,
      errors,
      loginError,
    };
  },
};
</script>
<style scoped>
/* Form */
.login {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form {
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 400px;
  margin: 0 auto;
}

.input {
  border: 1px solid gray;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
}

.btn {
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
}
</style>
