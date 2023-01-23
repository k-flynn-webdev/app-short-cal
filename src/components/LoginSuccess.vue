<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const { getUserAPI } = useUserStore();
const router = useRouter();

const onLoginSuccess = async () => {
  getUserAPI().then(() => router.push({ name: "home" }));
};

onLoginSuccess();
</script>

<template>
  <div></div>
</template>
