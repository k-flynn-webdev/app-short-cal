<script setup>
import { ref, computed } from "vue";
import Day from "@/components/Day.vue";

const props = defineProps({
  month: {
    type: Object,
    required: true,
  },
});

const monthName = computed(() => {
  const monthLong = props?.month?.name;
  return monthLong ? monthLong.substr(0, 3) : "";
});
</script>

<template>
  <div class="month">
    <div>{{ monthName }}</div>
    <template v-for="(item, index) in month.dates">
      <Day :day="item" />
    </template>
  </div>
</template>

<style>
.month {
  margin: 1rem;
  padding: 0.5rem;
  /*border: 2px solid #2c3e50;*/
}
</style>
