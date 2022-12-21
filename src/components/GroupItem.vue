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
</script>

<template>
  <div
    v-if="groupItem.margin"
    class="empty"
    :class="`width-${groupItem.margin}`"
  />

  <div
    v-if="groupItem.counts.top"
    class="block top"
    :class="`width-${groupItem.counts.top}`"
  >
    <template v-if="groupItem.type === 'single'">
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

    <template v-if="groupItem.type === 'small'">
      <div class="text" />
      <div class="text">
        {{ groupItem.data.end }}
      </div>
    </template>
  </div>

  <div class="block mid" :class="`width-${groupItem.counts.mid}`">
    <template v-if="groupItem.type === 'medium'">
      <div class="text" />
      <div class="text" />
      <div class="text">
        {{ groupItem.data.end }}
      </div>
    </template>
  </div>

  <div class="block bottom" :class="`width-${groupItem.counts.bottom}`">
    <template v-if="groupItem.type === 'large'">
      <div class="text" />
      <div class="text" />
      <div class="text">
        {{ groupItem.data.end }}
      </div>
    </template>
  </div>
</template>
