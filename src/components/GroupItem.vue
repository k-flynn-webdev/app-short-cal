<script setup>
import { computed } from "vue";

const props = defineProps({
  groupItem: {
    type: Object,
    required: true,
    default: () => {
      return {
        idx: 0,
        data: {},
        margin: 0,
        top: { block: 0 },
        mid: { block: 0 },
        bottom: { block: 0 },
        current: 0,
      };
    },
  },
});
</script>

<template>
  <div class="bump"></div>
  <div
    v-if="groupItem.margin"
    class="empty"
    :class="`width-${props.groupItem.margin}`"
  />

  <div v-if="groupItem.top.block" class="block" :class="groupItem.top.class">
    <template :key="item" v-for="item in groupItem.top.content">
      <div class="text">
        {{ item }}
      </div>
    </template>
  </div>

  <div v-if="groupItem.mid.block" class="block" :class="groupItem.mid.class">
    <template :key="item" v-for="item in groupItem.mid.content">
      <div class="text">
        {{ item }}
      </div>
    </template>
  </div>

  <div
    v-if="groupItem.bottom.block"
    class="block"
    :class="groupItem.bottom.class"
  >
    <template :key="item" v-for="item in groupItem.bottom.content">
      <div class="text">
        {{ item }}
      </div>
    </template>
  </div>

  <!--  <template v-for="idx in groupItem.margin" :key="idx">-->
  <!--    <div class="empty" />-->
  <!--  </template>-->
  <!--  <template v-for="idx in groupItem.top.block" :key="idx">-->
  <!--    <div class="block top">{{ groupItem.idx }}</div>-->
  <!--  </template>-->
  <!--  <template v-for="idx in groupItem.mid.block" :key="idx">-->
  <!--    <div class="block mid">{{ groupItem.idx }}</div>-->
  <!--  </template>-->
  <!--  <template v-for="idx in groupItem.bottom.block" :key="idx">-->
  <!--    <div class="block bottom">{{ groupItem.idx }}</div>-->
  <!--  </template>-->

  <!--  <div class="new-line"></div>-->

  <!--  <template v-for="idx in groupItem.blocks" :key="idx">-->
  <!--    <template v-if="groupItem.combined">-->
  <!--      <div v-if="idx === 1" class="block text-center">-->
  <!--        <span>&lt</span>-->
  <!--        <span>{{ groupItem.data.start }}</span>-->
  <!--        <span>&gt</span>-->
  <!--      </div>-->
  <!--    </template>-->

  <!--    <template v-else>-->
  <!--      <div v-if="idx === 1" class="block text-left">-->
  <!--        <span>&lt</span>-->
  <!--        <span>{{ groupItem.data.start }}</span>-->
  <!--      </div>-->

  <!--      <div-->
  <!--        v-if="idx === groupItem.blocks - 1"-->
  <!--        class="block text-right"-->
  <!--        :class="groupItem.styleClass"-->
  <!--      >-->
  <!--        <span>{{ groupItem.data.end }} </span>-->
  <!--        <span>&gt</span>-->
  <!--      </div>-->

  <!--      <div-->
  <!--        v-if="idx < groupItem.blocks - 1"-->
  <!--        class="block"-->
  <!--        :class="groupItem.styleClass"-->
  <!--      />-->
  <!--    </template>-->
  <!--  </template>-->

  <!--  <template v-for="idx in groupItem.margin.post" :key="idx">-->
  <!--    <div class="empty post" />-->
  <!--  </template>-->
</template>
