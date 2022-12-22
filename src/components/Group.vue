<script setup>
import { computed } from "vue";
import GroupItem from "@/components/GroupItem.vue";

import { storeToRefs } from "pinia";

import { useInfoStore } from "@/stores/info";
import { useCalsStore } from "@/stores/cals";

const { getCols } = storeToRefs(useInfoStore());
const { getCalBLocks } = storeToRefs(useCalsStore());

const calBLocks = computed(() => getCalBLocks.value(getCols.value));

// TODO : Re write this all with the idea that theres 3 modes/types of groupObject and render that way ""
// todo eg ["single", "small", "medium", "large"] based on that define the render
// todo which means the build function needs to have that property!
// todo also classes and extra things like that shouldn't be done in the object but worked out
// todo in the component
// todo new groupObject will no longer need top.block mid.block etc just an array with 1 - 3 values!
</script>

<template>
  <div class="container" :class="`width-${getCols}`">
    <GroupItem
      v-for="groupItem in calBLocks.data"
      :key="groupItem.idx"
      :group-item="groupItem"
    />
  </div>

  <div v-for="item in calBLocks.data" :key="item">
    {{ item }}
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.block {
  display: block;
  background-color: #3e86c3;
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

  &.push {
    margin-top: 0.5rem;
  }
}

.bottom {
  background-color: #1e507a;
}

.top {
  //&.single,
  //&.small {
  //margin-top: 0.5rem;
  //}
}

.top {
  &.medium,
  &.large {
    //transform: translateY(0.5rem);
  }
}

.bottom {
  &.large {
    //margin-bottom: 0.5rem;
  }
}

.empty {
  width: 2rem;
  height: 2rem;
  color: #2f2828;
  background-color: #ffffff;
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
