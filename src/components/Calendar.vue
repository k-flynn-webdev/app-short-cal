<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

// const message = ref("Hello World!");
// const isRed = ref(true);
// const color = ref("green");

const counter = useCounterStore();

// function toggleRed() {
//   isRed.value = !isRed.value;
// }
//
// function toggleColor() {
//   color.value = color.value === "green" ? "blue" : "green";
// }
</script>

<template>
  <div>
    <h1>
      Hover your mouse over me for a few seconds to see my dynamically bound
      title!
    </h1>

    <button @click="counter.increment()">
      {{ counter.counter }}
    </button>

    <p>{{ counter.counter }}</p>
  </div>
</template>
