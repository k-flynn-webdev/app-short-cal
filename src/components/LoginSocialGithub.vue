<script setup>
const gitHubLogin = import.meta.env.VITE_GITHUB_LOGIN;
</script>

<template>
  <x-button :href="gitHubLogin" variant="outline" class="w-full mb-2">
    <font-awesome-icon icon="fa-brands fa-github" />
    Login with Github
  </x-button>
</template>
