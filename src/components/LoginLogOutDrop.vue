<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
import LogOut from "@/components/LogOut.vue";

const { isLoggedIn } = storeToRefs(useUserStore());
</script>

<template>
  <div>
    <LogOut v-if="isLoggedIn" />
    <RouterLink v-else :to="{ name: 'login' }">Login</RouterLink>
  </div>
</template>
