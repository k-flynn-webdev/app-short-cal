<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import isLoadingFactory from "@/helpers/isLoadingFactory";
import isErrorFactory from "@/helpers/isErrorFactory";

const { logOutAPI } = useUserStore();

const { isLoading, clearLoading, setLoading } = isLoadingFactory();
const { isError, hasError, clearError, setError } = isErrorFactory();
const router = useRouter();

const onSubmitForm = async () => {
  clearError();

  setLoading();
  logOutAPI()
    .then(() => router.push({ path: "/logout" }))
    .catch((error) => setError(error))
    .finally(() => clearLoading());
};
</script>

<template>
  <div>
    <x-button
      class="my-2 justify-self-start c-yellow"
      :disabled="isLoading"
      @click="onSubmitForm"
    >
      Logout
    </x-button>

    <x-alert
      icon="i-bx-error"
      color="danger"
      class="my-4"
      dismissible
      v-if="hasError"
    >
      <span>{{ isError }}</span>
    </x-alert>
  </div>
</template>
