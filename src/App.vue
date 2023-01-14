<script setup>
import { RouterLink, RouterView } from "vue-router";
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
