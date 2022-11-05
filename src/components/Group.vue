<script setup>
import { ref } from "vue";
// import { useCounterStore } from "@/stores/counter";
// import Month from "@/components/Month.vue";

const createGroupObject = (daysData, offset) => {
  const grpObj = {
    days: daysData?.days || 0,
    offset: offset || 0,
    leftWall: 0,
    rightWall: 0,
    lines: 0,
  };

  return grpObj;
};

const groupBuilder = (daysData, colCount) => {
  if (!daysData) throw "Missing days data";
  if (typeof colCount !== "number") throw "Missing colCount";

  let build = createGroupObject(daysData, 1);

  return build;
};
</script>

<template>
  <div></div>
</template>

<style lang="scss"></style>
