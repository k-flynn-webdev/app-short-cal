<script setup>
import { storeToRefs } from "pinia";
import { useInfoStore } from "@/stores/info";

const { getCols } = storeToRefs(useInfoStore());
const { setCols } = useInfoStore();

const COL_WIDTHS = [2, 3, 4, 5, 6, 7];
</script>

<template>
  <div>
    <template :key="count" v-for="count in COL_WIDTHS">
      <button @click="setCols(count)">{{ count }}</button>
    </template>
  </div>
  <p>width: {{ getCols }}</p>
</template>
