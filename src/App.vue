<script setup>
import { RouterLink, RouterView } from "vue-router";
import { watch } from "vue";
import { useRouter } from "vue-router";
import { onAppMountAccessToken, onAppLogOut } from "./helpers/oauthFlow.js";

const router = useRouter();

watch(
  () => router.currentRoute.value.query,
  () => {
    onAppMountAccessToken(router);
  }
);
watch(
  () => router.currentRoute.value.fullPath,
  () => {
    onAppLogOut(router);
  }
);
</script>

<template>
  <div>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'group' }">Group</RouterLink>
    <RouterLink :to="{ name: 'login' }">Login</RouterLink>
  </div>

  <RouterView />
</template>
