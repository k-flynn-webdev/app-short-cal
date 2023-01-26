<script setup>
import { RouterLink, RouterView } from "vue-router";
import { watch } from "vue";
import { useRouter } from "vue-router";
import { onAppMountAccessToken, onAppLogOut } from "./helpers/oauthFlow.js";
import LoginLogOutDrop from "@/components/LoginLogOutDrop.vue";

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
  <div class="flex flex-row flex-wrap">
    <div class="grow bg-slate-200">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
      <RouterLink :to="{ name: 'group' }">Group</RouterLink>
      <RouterLink :to="{ name: 'create' }">Create</RouterLink>
    </div>
    <LoginLogOutDrop class="grow-0" />
  </div>

  <div class="x-container md:container">
    <RouterView />
  </div>
</template>
