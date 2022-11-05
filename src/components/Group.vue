<script setup>
// import { ref } from "vue";
// import { useCounterStore } from "@/stores/counter";
// import Month from "@/components/Month.vue";

const createGroupObject = (daysData) => {
  const grpObj = {
    data: daysData || {},
    lines: [],
    direction: 1,
  };

  return grpObj;
};

const groupBuilder = (daysData, colCount, start) => {
  if (!daysData) throw "Missing days data";
  if (typeof colCount !== "number") throw "Missing colCount";

  let grpObj = createGroupObject(daysData);

  // rules

  return grpObj;
};
</script>

<template>
  <div></div>
</template>

<style lang="scss"></style>
