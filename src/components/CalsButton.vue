<script setup>
import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";
import { useCalsStore } from "@/stores/cals";

const { fetchCals } = useCalsStore();

onBeforeMount(() => {
  fetchCals();
});
</script>

<template>
  <div>
    <button @click="fetchCals">New Cals</button>
  </div>
</template>
