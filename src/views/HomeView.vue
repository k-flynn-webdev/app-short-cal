<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
const { user } = storeToRefs(useUserStore());
</script>

<template>
  <main>
    <div>{{ user }}</div>

    <h1>HOME</h1>
  </main>
</template>
