<script setup>
import { RouterLink, useRouter } from "vue-router";
import { reactive, computed } from "vue";
import { useUserStore } from "@/stores/user";
import isLoadingFactory from "@/helpers/isLoadingFactory";
import isErrorFactory from "@/helpers/isErrorFactory";
import { validLoginDetails } from "@/helpers/authentication.js";

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
    .then((access_token) =>
      router.push({ name: "login", query: { access_token } })
    )
    .catch((error) => setError(error))
    .finally(() => clearLoading());
};
</script>

<template>
  <div>
    <x-form name="login" @submit.prevent="onSubmitForm">
      <x-input
        v-model.trim="loginDetails.email"
        class="w-full"
        label="Email"
        type="email"
        placeholder="your.email@example.com"
        required
      />
      <x-input
        v-model="loginDetails.password"
        class="w-full"
        label="Password"
        placeholder="xxxxxxxxxx"
        type="password"
        required
      />
      <x-button
        class="w-full mt-4"
        type="submit"
        color="primary"
        :disabled="!loginDetailsValid || isLoading"
        @click="onSubmitForm"
      >
        Login
      </x-button>
    </x-form>

    <x-alert v-if="hasError" color="error" outlined type="error" light>
      <span>{{ isError }}</span>
    </x-alert>

    <div class="mt-4">
      <span class="text-slate-400">Already have an account? </span>

      <x-link shadow color="primary" :to="{ name: 'login' }">
        Login here!
      </x-link>
    </div>
  </div>
</template>
