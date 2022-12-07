<script setup>
import { RouterLink, RouterView } from "vue-router";
import ColsButton from "@/components/ColsButton.vue";
import CalsButton from "@/components/CalsButton.vue";
</script>

<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>

  <ColsButton />
  <CalsButton />

  <RouterView />
</template>
