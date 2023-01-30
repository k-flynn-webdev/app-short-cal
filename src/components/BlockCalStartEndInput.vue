<script setup>
import { useCalBlockStore } from "@/stores/calBlock";
import { storeToRefs } from "pinia";

const { calBlockInput } = storeToRefs(useCalBlockStore());
</script>

<template>
  <p>Choose a start and end date to share</p>
  <div class="md:flex gap-4">
    <x-input
      v-model="calBlockInput.start"
      class="w-full"
      label="Start"
      type="date"
      required
    />
    <x-input
      v-model="calBlockInput.end"
      class="w-full"
      label="End"
      type="date"
      required
    />
  </div>
</template>
