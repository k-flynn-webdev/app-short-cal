<script setup>
import { ref, onBeforeMount } from "vue";
// import { useCounterStore } from "@/stores/counter";
// import Month from "@/components/Month.vue";

const mockRenderGroupData = {
  columns: 5,
  calData: {
    0: {
      0: null,
      1: null,
      2: "random",
      3: "random",
      4: "random",
    },
    1: { 0: "random", 1: "random", 2: "random", 3: null, 4: "random1" },
    2: { 0: null, 1: "random2", 2: "random2", 3: null, 4: null },
  },
  direction: 1,
};

const createGroupObject = (daysData) => {
  const grpObj = {
    data: daysData || {},
    lines: [],
    direction: 1,
  };

  return grpObj;
};

const groupBuilder = (daysData, colCount) => {
  if (!daysData) throw "Missing days data";
  if (typeof colCount !== "number") throw "Missing colCount";

  let grpObj = createGroupObject(daysData);

  // rules

  return grpObj;
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

let randomCalData = ref([]);
const updateRandomCal = () => {
  let calData = [];
  const max = getRandomIntInclusive(1, 10);

  for (let i = 0; i < max; i++) {
    const start = getRandomIntInclusive(1, 31);
    const end = getRandomIntInclusive(start, 31);

    calData.push({
      start,
      end,
      id: i,
    });
  }
  randomCalData.value = calData;
};

let chosenWidth = ref(3);
const updateDisplay = (value) => {
  chosenWidth.value = value;
};

onBeforeMount(() => {
  updateRandomCal();
});
</script>

<template>
  <div>
    <button @click="updateRandomCal(count)">randomise</button>
    <br />
    <template :key="count" v-for="count in [2, 3, 4, 5, 6, 7]">
      <button @click="updateDisplay(count)">{{ count }}</button>
    </template>
    <p>{{ chosenWidth }}</p>
    <p>{{ randomCalData }}</p>
    <br />
  </div>
  <br />
  <div class="container" :class="`width-${chosenWidth}`">
    <div class="day"></div>
    <div class="space"></div>
    <div class="day"></div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ecb017;
}
.day {
  width: 2rem;
  height: 2rem;
  color: #2f2828;
  background-color: #3e86c3;
}
.space {
  width: 2rem;
  height: 2rem;
  color: #2f2828;
  background-color: #ffffff;
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
</style>
