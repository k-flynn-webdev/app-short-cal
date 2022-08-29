<script setup>
import { ref, computed } from "vue";
import Day from "@/components/Day.vue";

const props = defineProps({
  month: {
    type: Object,
    required: true,
  },
  columns: {
    type: Number,
    required: true,
  },
});

const monthName = computed(() => {
  const monthLong = props?.month?.name;
  return monthLong ? monthLong.substr(0, 3) : "";
});

const monthDates = computed(() => {
  const dates = props?.month?.dates || [];
  return dates.reduce((acc, val) => acc.concat(val), []);
});

const checkDate = (date) => {
  return monthDates.value.includes(date);
};
const checkDateSplit = (date) => {
  const isPreModulus = (date - 1) % props?.columns !== 0;
  const isPreIncluded = monthDates.value.includes(date - 1);
  return isPreModulus && isPreIncluded;
};
</script>

<!--// just gonna have to write it out as a line render of sorts instead of per day rules????-->

<template>
  <div class="dates">
    <template :key="idx" v-for="idx in 29">
      <!--    <template v-for="group in month.dates">-->
      <!--          <template :key="idx" v-for="(item, index) in group">-->

      <!--        // we need the concpt of rows, know what a row starts with ?? -->

      <Day v-if="checkDate(idx)" :day="idx" />

      <div v-else-if="checkDateSplit(idx)" class="spacer" />

      <!--        <div-->
      <!--          v-if="index % 2 === 0 && index === group.length - 1"-->
      <!--          class="spacer"-->
      <!--        ></div>-->
      <!--        <div-->
      <!--          v-if="index % 2 !== 0 && index === group.length - 1"-->
      <!--          class="spacer-2"-->
      <!--        ></div>-->
      <!--      </template>-->
    </template>
  </div>
</template>

<style>
/*.month {*/
/*  margin: 1rem;*/
/*  padding: 0.5rem;*/
/*  !*border: 2px solid #2c3e50;*!*/
/*}*/
/*.month .empty {*/
/*  margin: 1rem;*/
/*}*/
</style>
