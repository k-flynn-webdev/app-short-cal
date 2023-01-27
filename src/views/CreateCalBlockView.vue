<script setup>
import AddCalendarButton from "@/components/AddCalendarButton.vue";
</script>

<template>
  <x-card class="max-w-md mx-auto mt-4 p-4">
    <h1 class="text-3xl mb-4">Create new Block Cal</h1>

    <div class="tip">
      <p>Add one or more calendars to begin</p>
    </div>

    <AddCalendarButton />
  </x-card>
</template>
