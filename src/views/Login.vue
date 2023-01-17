<script setup>
import { useUserStore } from "@/stores/user";
const { getUsersAPI } = useUserStore();

const gitHubLogin = import.meta.env.VITE_GITHUB_LOGIN;
const googleLogin = import.meta.env.VITE_GOOGLE_LOGIN;
</script>

<template>
  <main>
    <h1>Login</h1>

    <a :href="gitHubLogin">Login with Github</a>
    <br />
    <a :href="googleLogin">Login with Google</a>

    <br />

    <button @click="getUsersAPI">test connection</button>
  </main>
</template>
