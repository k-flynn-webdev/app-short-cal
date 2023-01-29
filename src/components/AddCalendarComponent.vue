<script setup>
import { watch, ref, computed } from "vue";
import { useCalBlockStore } from "@/stores/calBlock";
import { storeToRefs } from "pinia";

import GoogleCalRequest from "@/components/GoogleCalRequest.vue";
import AppleCalRequest from "@/components/AppleCalRequest.vue";

// todo : move to a consts file
const calendarTypes = [
  {
    name: "Google",
    value: "google",
    icon: "fa-brands fa-google",
    active: true,
    component: GoogleCalRequest,
  },
  {
    name: "Apple",
    value: "apple",
    icon: "fa-brands fa-apple",
    active: true,
    component: AppleCalRequest,
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

const { isLoading, calBlockInput } = storeToRefs(useCalBlockStore());

watch(
  () => calBlockInput.value.type,
  (input) => {
    getCalComponent(input);
  }
);

const calComponent = computed(() => {
  const currentCal = calendarTypes.find(
    (item) => item.value === calBlockInput.value.type
  );
  if (currentCal) return currentCal.component;

  return null;
});
const openUserAgreeModal = ref(false);

const getCalComponent = (type) => {
  if (type) {
    // todo : open a modal screen that will open the API to ask for permissions
    openUserAgreeModal.value = true;
    isLoading.value = true;
  } else {
    openUserAgreeModal.value = false;
    isLoading.value = false;
  }
};
</script>

<template>
  <div v-if="calComponent" class="flex gap-4 mb-4">
    <component :is="calComponent" />
  </div>
</template>
