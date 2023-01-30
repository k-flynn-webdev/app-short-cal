<script setup>
import { useCalBlockStore } from "@/stores/calBlock";
const { setCalBlockInputType } = useCalBlockStore();

// todo : move to a consts file
const calendarTypes = [
  {
    name: "Select days",
    value: "custom",
    icon: "fa fa-calendar",
    active: true,
    component: "CustomCalButton.vue",
  },
  {
    name: "Google",
    value: "google",
    icon: "fa-brands fa-google",
    active: false,
    component: "GoogleCalButton.vue",
  },
  {
    name: "Apple",
    value: "apple",
    icon: "fa-brands fa-apple",
    active: false,
    component: "GoogleCalButton.vue",
  },
  {
    name: "Microsoft",
    value: "microsoft",
    icon: "fa-brands fa-microsoft",
    active: false,
    component: "GoogleCalButton.vue",
  },
  {
    name: "Yahoo",
    value: "yahoo",
    icon: "fa-brands fa-yahoo",
    active: false,
    component: "GoogleCalButton.vue",
  },
];
</script>

<template>
  <div class="flex flex-wrap mb-4">
    <template :key="item.value" v-for="item in calendarTypes">
      <x-tooltip>
        <x-button
          class="mt-4 mr-4"
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
            <p v-if="item.name.split(' ').length > 1" class="text-gray-300">
              {{ item.name }}
            </p>
            <p v-else class="text-gray-300">
              {{ `Import a ${item.name} calendar` }}
            </p>
          </div>
        </template>
      </x-tooltip>
    </template>
  </div>
</template>
