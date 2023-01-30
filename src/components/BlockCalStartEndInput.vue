<script setup>
import { useCalBlockStore } from "@/stores/calBlock";
import { storeToRefs } from "pinia";

const { calBlockInput } = storeToRefs(useCalBlockStore());
</script>

<template>
  <!--    <p class="mb-2">Choose a start and end date</p>-->
  <div class="md:flex gap-4">
    <x-input
      v-model="calBlockInput.start"
      class="w-full mb-2"
      label="Start"
      type="date"
      required
    />
    <x-input
      v-model="calBlockInput.end"
      class="w-full mb-2"
      label="End"
      type="date"
      required
    />
  </div>
</template>
