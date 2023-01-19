<script setup>
import { reactive, computed } from "vue";
import { useUserStore } from "@/stores/user";
const { userLoginAPI, getUserAPI } = useUserStore();
import isLoadingFactory from "@/helpers/isLoadingFactory";
import isErrorFactory from "@/helpers/isErrorFactory";

const { isLoading, clearLoading, setLoading } = isLoadingFactory();
const { isError, hasError, clearError, setError } = isErrorFactory();

const loginDetails = reactive({
  email: undefined,
  password: undefined,
});

const loginDetailsValid = computed(() => {
  const email =
    loginDetails.email &&
    loginDetails.email.length > 4 &&
    loginDetails.email.includes("@");
  const password = loginDetails.password && loginDetails.password.length > 8;

  return email && password;
});

const onSubmitForm = async () => {
  if (isLoading.value) return;
  if (!loginDetailsValid.value) return;

  clearError();

  const loginObj = {
    strategy: "local",
    email: loginDetails.email,
    password: loginDetails.password,
  };

  setLoading();
  userLoginAPI(loginObj)
    .then(() => getUserAPI())
    .catch((error) => setError(error))
    .finally(() => clearLoading());
};
</script>

<template>
  <div>
    <form name="login" @submit.prevent="onSubmitForm">
      <AInput
        v-model.trim="loginDetails.email"
        label="Email"
        placeholder="your.email@example.com"
      />
      <AInput
        v-model="loginDetails.password"
        label="Password"
        placeholder="xxxxxxxxxx"
        type="password"
      />

      <ABtn
        class="my-2 justify-self-start c-yellow"
        :disabled="!loginDetailsValid || isLoading"
        @click="onSubmitForm"
      >
        Login
      </ABtn>
    </form>

    <AAlert
      icon="i-bx-error"
      color="danger"
      class="my-4"
      dismissible
      v-model="hasError"
    >
      <span>{{ isError }}</span>
    </AAlert>
  </div>
</template>
