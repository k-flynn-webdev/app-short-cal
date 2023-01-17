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
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/group">Group</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </div>

  <RouterView />
</template>
