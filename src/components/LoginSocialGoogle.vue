<script setup>
const googleLogin = import.meta.env.VITE_GOOGLE_LOGIN;
</script>

<template>
  <a :href="googleLogin">
    <ABtn class="w-full" variant="outline" color="success">
      Continue with Google
    </ABtn>
  </a>
</template>
