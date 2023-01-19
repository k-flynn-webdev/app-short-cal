<script setup>
const gitHubLogin = import.meta.env.VITE_GITHUB_LOGIN;
</script>

<template>
  <a :href="gitHubLogin">
    <ABtn class="w-full" variant="outline" color="success">
      Continue with Github
    </ABtn>
  </a>
</template>
