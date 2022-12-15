<script setup>
import { computed } from "vue";
import GroupItem from "@/components/GroupItem.vue";

import { storeToRefs } from "pinia";

import { useInfoStore } from "@/stores/info";
import { useCalsStore } from "@/stores/cals";

const { getCols } = storeToRefs(useInfoStore());
const { getCalDataIslands, getCalDataIslandsMargin } = storeToRefs(
  useCalsStore()
);

const calDataIslandsMargins = computed(() =>
  getCalDataIslandsMargin.value(getCols.value)
);
</script>

<template>
  <div class="container" :class="`width-${getCols}`">
    <GroupItem
      v-for="groupItem in calDataIslandsMargins"
      :key="groupItem"
      :group-item="groupItem"
    />
  </div>

  <br />
  <div v-for="item in calDataIslandsMargins" :key="item">{{ item.margin }}</div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ecb017;
}
.block {
  border: 1px solid grey;
  width: 2rem;
  height: 2rem;
  color: #2f2828;
  background-color: #3e86c3;
}
.empty {
  width: 2rem;
  height: 2rem;
  color: #2f2828;
  background-color: #ffffff;
  &.post {
    background-color: #a47e7e;
  }
}
.new-line {
  //min-height: 0.5rem;
  //width: 100%;
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
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
</style>
