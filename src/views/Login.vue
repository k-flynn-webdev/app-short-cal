<script setup>
import { useUserStore } from "@/stores/user";
const { getUsersAPI } = useUserStore();

const gitHubLogin = import.meta.env.VITE_GITHUB_LOGIN;
</script>

<template>
  <main>
    <h1>Login</h1>

    <a :href="gitHubLogin">Login with Github</a>

    <button @click="getUsersAPI">test connection</button>
  </main>
</template>
