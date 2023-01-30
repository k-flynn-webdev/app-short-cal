<script setup>
import { useCalBlockStore } from "@/stores/calBlock";
import { storeToRefs } from "pinia";
const { getCalBlocks, error } = storeToRefs(useCalBlockStore());

import AddCalendarButton from "@/components/AddCalendarButton.vue";
import AddCalendarComponent from "@/components/AddCalendarComponent.vue";
import BlockCalStartEndInput from "@/components/BlockCalStartEndInput.vue";
</script>

<template>
  <x-card class="max-w-md mx-auto mt-4 p-4">
    <h1 class="text-3xl mb-4">Create a Block Calendar</h1>

    <div class="tip">
      <p>Add one or more calendars to begin</p>
      <span class="serious text-xs text-gray-300">
        *We only use the date-time of each event in each calendar.
      </span>
    </div>

    <AddCalendarButton />
    <AddCalendarComponent />

    <BlockCalStartEndInput />
    <div class="tip">
      <span class="serious text-xs text-gray-300">
        *We only use the date-time of each event in each calendar.
      </span>
    </div>

    <div>{{ getCalBlocks }}</div>

    <x-alert
      v-if="error"
      color="error"
      outlined
      light
      type="error"
      class="my-4"
    >
      <span>{{ error }}</span>
    </x-alert>
  </x-card>
</template>
