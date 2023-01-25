<script setup>
const googleLogin = import.meta.env.VITE_GOOGLE_LOGIN;
</script>

<template>
  <x-button :href="googleLogin" variant="outline" class="w-full mb-2">
    <font-awesome-icon icon="fa-brands fa-google" />
    Login with Google
  </x-button>
</template>
