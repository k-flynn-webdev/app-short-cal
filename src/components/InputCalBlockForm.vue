<script setup>
import { computed } from "vue";
import { useCalBlockStore } from "@/stores/calBlock";
import { storeToRefs } from "pinia";

const googleLogin = import.meta.env.VITE_GOOGLE_LOGIN;
const appleLogin = import.meta.env.VITE_GOOGLE_LOGIN;

const { isLoading, calBlockInput } = storeToRefs(useCalBlockStore());
const { resetCalBlockInput, addCalBlock } = useCalBlockStore();

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

  addCalBlock(calBlockInput.value).then((data) => {
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
