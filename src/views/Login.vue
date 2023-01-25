<script setup>
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";

import LoginSocialGithub from "@/components/LoginSocialGithub.vue";
import LoginSocialGoogle from "@/components/LoginSocialGoogle.vue";

const route = useRoute();
const routeName = computed(() => route?.meta?.title || "login");
</script>

<template>
  <x-card class="max-w-md mx-auto mt-4 p-4">
    <h1 class="text-3xl mb-4">{{ routeName }}</h1>

    <div class="md:flex gap-4">
      <LoginSocialGoogle />
      <LoginSocialGithub />
    </div>

    <x-divider class="my-4" label="OR" />

    <RouterView />
  </x-card>
</template>
