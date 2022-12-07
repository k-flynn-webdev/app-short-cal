<script setup>
import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";
import { useCalsStore } from "@/stores/cals";

const { getCals } = storeToRefs(useCalsStore());
const { fetchCals } = useCalsStore();

onBeforeMount(() => {
  fetchCals();
});
</script>

<template>
  <div>
    <button @click="fetchCals">New Cals</button>
    <p>{{ getCals }}</p>
  </div>
</template>
