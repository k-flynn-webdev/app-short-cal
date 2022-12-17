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
      :key="groupItem.idx"
      :group-item="groupItem"
    />
  </div>

  <br />
  <div v-for="item in calDataIslandsMargins" :key="item">
    {{ item }}
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ecb017;
}
.block {
  display: block;
  background-color: #3e86c3;
  border: 1px solid grey;
  height: 2rem;
  color: #2f2828;
  position: relative;

  .text {
    top: 0;
    display: block;
    position: absolute;
    padding: 0 0.5rem;
  }

  .text:empty {
    display: none;
  }

  .text:nth-of-type(1) {
    left: 0;
  }
  .text:nth-of-type(2) {
    text-align: center;
    width: 100%;
  }
  .text:nth-of-type(3) {
    right: 0;
  }
}
.top {
  background-color: #7ca8d2;
}
.bottom {
  background-color: #1e507a;
}
.empty {
  width: 2rem;
  height: 2rem;
  color: #2f2828;
  background-color: #ffffff;
}
.new-line {
  width: 100%;
  min-height: 0.2rem;
}
.width-1 {
  width: 2rem;
}
.width-2 {
  width: 4rem;
}
.width-3 {
  width: 6rem;
}
.width-4 {
  width: 8rem;
}
.width-5 {
  width: 10rem;
}
.width-6 {
  width: 12rem;
}
.width-7 {
  width: 14rem;
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
