<script setup>
import { computed } from "vue";

const checkHasGoogleCal = computed(() => {
  return false;
  // somehow check google permissions?
});
</script>

<template>
  <div>Here we create a month/s grid with toggleable days for the user</div>
</template>
