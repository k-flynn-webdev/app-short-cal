<script setup>
// import { ref, onBeforeMount } from "vue";
import { storeToRefs } from "pinia";

import { useInfoStore } from "@/stores/info";
import { useCalsStore } from "@/stores/cals";

const { getCols } = storeToRefs(useInfoStore());
const { getCalDataIslands } = storeToRefs(useCalsStore());
</script>

<template>
  <div class="container" :class="`width-${getCols}`">
    <div class="day"></div>
    <div class="space"></div>
    <div class="day"></div>
  </div>

  <div>{{ getCalDataIslands }}</div>
  <br />
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ecb017;
}
.day {
  width: 2rem;
  height: 2rem;
  color: #2f2828;
  background-color: #3e86c3;
}
.space {
  width: 2rem;
  height: 2rem;
  color: #2f2828;
  background-color: #ffffff;
}
.width-1 {
  max-width: 2rem;
}
.width-2 {
  max-width: 4rem;
}
.width-3 {
  max-width: 6rem;
}
.width-4 {
  max-width: 8rem;
}
.width-5 {
  max-width: 10rem;
}
.width-6 {
  max-width: 12rem;
}
.width-7 {
  max-width: 14rem;
}
</style>
