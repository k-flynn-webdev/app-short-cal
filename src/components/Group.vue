<script setup>
import { computed } from "vue";
import GroupItem from "@/components/GroupItem.vue";

import { storeToRefs } from "pinia";

import { useInfoStore } from "@/stores/info";
import { useCalsStore } from "@/stores/cals";

const { getCols } = storeToRefs(useInfoStore());
const { getCalBLocks } = storeToRefs(useCalsStore());

const calBLocks = computed(() => getCalBLocks.value(getCols.value));
</script>

<template>
  <div>
    <div class="month">{{ calBLocks.month }}</div>
    <div class="container" :class="`width-${getCols}`">
      <GroupItem
        v-for="groupItem in calBLocks.data"
        :key="groupItem.idx"
        :group-item="groupItem"
        :cols="getCols"
      />
    </div>
  </div>
</template>

<style lang="scss">
.month {
  font-weight: bold;
  position: relative;
  left: -0.5rem;
  bottom: -0.25rem;
  opacity: 50%;
}

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.block {
  background-color: #a2b1d7;
  color: #2f2828;
  display: block;
  height: 2rem;
  position: relative;
  overflow: hidden;

  .text {
    top: 0;
    display: block;
    position: absolute;
    padding: 0.2rem 0.4rem;
    font-weight: bold;

    &:before {
      @extend .text-underline;
    }
  }

  .text:empty {
    display: none;
  }

  .text:nth-of-type(1) {
    left: 0;
    &:before {
      left: -0.2rem;
    }
  }
  .text:nth-of-type(2) {
    text-align: center;
    width: 100%;
    &:before {
      left: -0.2rem;
      right: 0;
    }
  }
  .text:nth-of-type(3) {
    right: 0;
    &:before {
      right: 0;
    }
  }
}

.text-underline {
  content: "";
  position: absolute;
  bottom: -0.1rem;
  height: 0.3rem;
  width: 1.25rem;
  border-radius: 1rem;
  background-color: black;
  opacity: 35%;
}

.clip {
  content: "";
  position: absolute;
  transform: rotateZ(45deg);
  width: 1rem;
  height: 1rem;
  background-color: white;
}

.clip-left:before {
  @extend .clip;
  top: -0.6rem;
  left: -0.6rem;
}
.clip-right:after {
  @extend .clip;
  bottom: -0.6rem;
  right: -0.6rem;
}

.top {
  //background-color: #49a9f2;

  &.push {
    margin-top: 0.4rem;
    &.extra {
      margin-top: 0.8rem;
    }
  }
}

.bottom {
  //background-color: #397ab3;
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
