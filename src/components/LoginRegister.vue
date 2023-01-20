<script setup>
import { RouterLink, useRouter } from "vue-router";
import { reactive, computed } from "vue";
import { useUserStore } from "@/stores/user";
import isLoadingFactory from "@/helpers/isLoadingFactory";
import isErrorFactory from "@/helpers/isErrorFactory";
import { validLoginDetails } from "@/helpers/authentication.js";
import { onAppAccessTokenSuccess } from "@/helpers/oauthFlow.js";

const { registerAPI } = useUserStore();
const { isLoading, clearLoading, setLoading } = isLoadingFactory();
const { isError, hasError, clearError, setError } = isErrorFactory();
const router = useRouter();

const loginDetails = reactive({
  email: "",
  password: "",
});

const loginDetailsValid = computed(() => {
  return validLoginDetails(loginDetails.email, loginDetails.password);
});

const onSubmitForm = async () => {
  if (isLoading.value) return;
  if (!loginDetailsValid.value) return;

  clearError();

  const loginObj = {
    email: loginDetails.email,
    password: loginDetails.password,
  };

  setLoading();
  registerAPI(loginObj)
    .then((accessToken) => onAppAccessTokenSuccess(router, accessToken))
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
        type="email"
        placeholder="your.email@example.com"
        required
      />
      <AInput
        v-model="loginDetails.password"
        label="Password"
        placeholder="xxxxxxxxxx"
        type="password"
        required
      />

      <ABtn
        class="my-2 justify-self-start c-yellow"
        :disabled="!loginDetailsValid || isLoading"
        @click="onSubmitForm"
      >
        Login
      </ABtn>
    </form>

    <div class="mt-4">
      <RouterLink :to="{ name: 'login' }">
        Already have an account? Login here!
      </RouterLink>
    </div>

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
