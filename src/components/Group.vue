<script setup>
import { ref } from "vue";
// import { useCounterStore } from "@/stores/counter";
// import Month from "@/components/Month.vue";

const createGroupObject = (groupData, offset, colWidth) => {
  const grpObj = {
    days: groupData?.days || 0,
    offset: offset || 0,
    leftWall: 0,
    rightWall: 0,
    multiLine: false,
  };

  return grpObj;
};

const groupBuilder = (groupDate, colCount) => {
  if (!groupDate) throw "Missing group data";
  if (typeof colCount !== "number") throw "Missing colCount";

  let build = {
    lines: 0,
    days: [],
  };

  return build;
};
</script>

<template>
  <div></div>
</template>

<style lang="scss"></style>
