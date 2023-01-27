<script setup>
import { computed } from "vue";
import { useCalBlockStore } from "@/stores/calBlock";
import isLoadingFactory from "@/helpers/isLoadingFactory";
import { storeToRefs } from "pinia";

const { calBlockInput } = storeToRefs(useCalBlockStore());
const { resetCalBlockInput, addCalBlock } = useCalBlockStore();
const { isLoading, clearLoading, setLoading } = isLoadingFactory();

const showCalInput = computed(() => !!calBlockInput.value.type);

const isValid = computed(() => {
  return (
    calBlockInput.value.type &&
    calBlockInput.value.url &&
    calBlockInput.value.url.length > 5
  );
});

const onAddCalBlock = () => {
  if (isLoading.value) return;
  if (!isValid.value) return;

  setLoading();

  addCalBlock(calBlockInput.value).then((data) => {
    clearLoading();
    resetCalBlockInput();
  });
};
</script>

<template>
  <div>
    <p class="font-bold capitalize mb-2">{{ calBlockInput.type }}</p>
    <div v-if="showCalInput" class="flex gap-4 mb-4">
      <x-input class="flex-1" v-model="calBlockInput.url" />
      <x-button
        :disabled="!isValid"
        :loading="isLoading"
        @click="onAddCalBlock"
      >
        Add
      </x-button>
    </div>
  </div>
</template>
