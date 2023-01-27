<script setup>
// import { RouterLink, useRouter } from "vue-router";
// import { reactive, computed, ref } from "vue";
import { useCalBlockStore } from "@/stores/calBlock";
import { storeToRefs } from "pinia";

import isErrorFactory from "@/helpers/isErrorFactory";
import isLoadingFactory from "@/helpers/isLoadingFactory";

const { getCalBlocks } = storeToRefs(useCalBlockStore());
const { addCalBlock, removeCalBlock, clearCalBlocks } = useCalBlockStore();

const { isLoading, clearLoading, setLoading } = isLoadingFactory();
const { isError, hasError, clearError, setError } = isErrorFactory();

const calendarTypes = [
  {
    name: "Google",
    value: "google",
    icon: "fa-brands fa-google",
    active: true,
  },
  { name: "Apple", value: "apple", icon: "fa-brands fa-apple", active: false },
  {
    name: "Microsoft",
    value: "microsoft",
    icon: "fa-brands fa-microsoft",
    active: false,
  },
  { name: "Yahoo", value: "yahoo", icon: "fa-brands fa-yahoo", active: false },
];

const onAddCalendar = async (type) => {
  if (isLoading.value) return;

  setLoading();
  clearError();

  const newCalObj = { type };

  addCalBlock(newCalObj)
    .catch((error) => setError(error))
    .finally(() => clearLoading());
};
</script>

<template>
  <div>
    <div class="flex gap-4">
      <template :key="item.value" v-for="item in calendarTypes">
        <x-tooltip>
          <x-button
            class="mt-4"
            type="button"
            color="primary"
            :disabled="!item.active"
            @click="onAddCalendar(item.value)"
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

    <div>{{ getCalBlocks }}</div>

    <x-alert v-if="hasError" color="error" outlined type="error" light>
      <span>{{ isError }}</span>
    </x-alert>
  </div>
</template>
