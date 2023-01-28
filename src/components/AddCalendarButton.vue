<script setup>
import { useCalBlockStore } from "@/stores/calBlock";
const { setCalBlockInputType } = useCalBlockStore();

// const { google } = require("googleapis");
// const apis = google.getSupportedAPIs();

// todo : move to a consts file
const calendarTypes = [
  {
    name: "Google",
    value: "google",
    icon: "fa-brands fa-google",
    active: true,
  },
  { name: "Apple", value: "apple", icon: "fa-brands fa-apple", active: true },
  {
    name: "Microsoft",
    value: "microsoft",
    icon: "fa-brands fa-microsoft",
    active: false,
  },
  { name: "Yahoo", value: "yahoo", icon: "fa-brands fa-yahoo", active: false },
];
</script>

<template>
  <div class="flex gap-4 mb-4">
    <template :key="item.value" v-for="item in calendarTypes">
      <x-tooltip>
        <x-button
          class="mt-4"
          type="button"
          color="primary"
          :disabled="!item.active"
          @click="setCalBlockInputType(item.value)"
        >
          <font-awesome-icon :icon="item.icon" />
        </x-button>

        <template #tooltip>
          <div class="text-center">
            <p v-if="!item.active" class="text-yellow-300">
              {{ "Available soon" }}
            </p>
            <p class="text-gray-300">
              {{ `Add a ${item.name} calendar` }}
            </p>
          </div>
        </template>
      </x-tooltip>
    </template>
  </div>
</template>
