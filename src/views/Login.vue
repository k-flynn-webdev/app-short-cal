<script setup>
const gitHubLogin = import.meta.env.VITE_GITHUB_LOGIN;
</script>

<template>
  <main>
    <h1>Login</h1>

    <a :href="gitHubLogin">Login with Github</a>
  </main>
</template>
