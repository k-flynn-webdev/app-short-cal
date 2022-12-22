<script setup>
import { computed } from "vue";

const props = defineProps({
  groupItem: {
    type: Object,
    required: true,
    default: () => {
      return {
        idx: 999,
        data: { start: 0, end: 0 },
        margin: 0,
        block: 0,
        type: "",
        counts: { top: 0, mid: 0, bottom: 0 },
      };
    },
  },
});

const isSingle = computed(() => {
  return props.groupItem.type === "single";
});
const isSmall = computed(() => {
  return props.groupItem.type === "small";
});
const isMedium = computed(() => {
  return props.groupItem.type === "medium";
});
const isLarge = computed(() => {
  return props.groupItem.type === "large";
});

const topClass = computed(() => {
  return [
    props.groupItem.type,
    `width-${props.groupItem.counts.top}`,
    isSmall.value || isSingle ? "push" : "",
  ];
});
const midClass = computed(() => {
  return [
    props.groupItem.type,
    `width-${props.groupItem.counts.mid}`,
    isMedium.value ? "push" : "",
  ];
});
const bottomClass = computed(() => {
  return [
    props.groupItem.type,
    `width-${props.groupItem.counts.bottom}`,
    isLarge.value ? "push" : "",
  ];
});
</script>

<template>
  <div
    v-if="groupItem.margin"
    class="empty"
    :class="`width-${groupItem.margin}`"
  />

  <div v-if="groupItem.counts.top" class="block top" :class="topClass">
    <template v-if="isSingle">
      <div class="text" />
      <div class="text">
        {{ groupItem.data.start }}
      </div>
      <div class="text" />
    </template>

    <template v-else>
      <div class="text">
        {{ groupItem.data.start }}
      </div>
    </template>

    <template v-if="isSmall">
      <div class="text" />
      <div class="text">
        {{ groupItem.data.end }}
      </div>
    </template>
  </div>

  <div v-if="groupItem.counts.mid" class="block mid" :class="midClass">
    <template v-if="isMedium">
      <div class="text" />
      <div class="text" />
      <div class="text">
        {{ groupItem.data.end }}
      </div>
    </template>
  </div>

  <div v-if="groupItem.counts.bottom" class="block bottom" :class="bottomClass">
    <div class="text" />
    <div class="text" />
    <div class="text">
      {{ groupItem.data.end }}
    </div>
  </div>
</template>
