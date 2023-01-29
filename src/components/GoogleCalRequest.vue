<script setup>
import { computed } from "vue";

const checkHasGoogleCal = computed(() => {
  return false;
  // somehow check google permissions?
});
</script>

<template>
  <p
    v-if="checkHasGoogleCal"
    :href="googleLogin"
    variant="outline"
    class="w-full mb-2"
  >
    <font-awesome-icon icon="fa-brands fa-google" />
    Google Calendar added
  </p>

  <x-button v-else :href="googleLogin" variant="outline" class="w-full mb-2">
    <font-awesome-icon icon="fa-brands fa-google" />
    Access Google Calendar
  </x-button>
</template>
