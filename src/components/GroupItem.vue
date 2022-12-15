<script setup>
defineProps({
  groupItem: {
    type: Object,
    required: true,
    default: () => {
      return { idx: 0, margin: { pre: 1, post: 0, blocks: 0, data: {} } };
    },
  },
});
</script>

<template>
  <template v-for="idx in groupItem.margin.pre" :key="idx">
    <div class="empty pre" />
  </template>

  <template v-for="idx in groupItem.blocks" :key="idx">
    <template v-if="groupItem.combined">
      <div v-if="idx === 1" class="block text-center">
        <span>&lt</span>
        <span>{{ groupItem.data.start }}</span>
        <span>&gt</span>
      </div>
    </template>

    <template v-else>
      <div v-if="idx === 1" class="block text-left">
        <span>&lt</span>
        <span>{{ groupItem.data.start }}</span>
      </div>

      <div
        v-if="idx === groupItem.blocks - 1"
        class="block text-right"
        :class="groupItem.styleClass"
      >
        <span>{{ groupItem.data.end }} </span>
        <span>&gt</span>
      </div>

      <div
        v-if="idx < groupItem.blocks - 1"
        class="block"
        :class="groupItem.styleClass"
      />
    </template>
  </template>

  <template v-for="idx in groupItem.margin.post" :key="idx">
    <div class="empty post" />
  </template>
</template>
