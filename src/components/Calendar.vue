<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import Month from "@/components/Month.vue";

let chosen = 0;

const chosenMonth = ref({});
const september = { name: "September", dates: [1, 2, 3] };
const december = { name: "December", dates: [6, 7] };

const updateMonth = () => {
  chosen = chosen ? 0 : 1;

  if (chosen) {
    chosenMonth.value = { ...september };
  } else {
    chosenMonth.value = { ...december };
  }
};

const counter = useCounterStore();
</script>

<template>
  <div>
    <button @click="updateMonth">++</button>

    <Month :month="chosenMonth" />
  </div>
</template>
