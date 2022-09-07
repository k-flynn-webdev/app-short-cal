<script setup>
import { ref } from "vue";
// import { useCounterStore } from "@/stores/counter";
import Month from "@/components/Month.vue";

const september = {
  name: "September",
  id: 8,
  dates: [
    [1, 2, 3],
    [6, 7],
    [12, 13, 14],
    [16],
    [18, 19, 20, 21, 22, 23, 24],
    [26, 27],
    [30],
  ],
};

let chosen = 0;
let chosenWidth = ref(3);

const chosenMonth = ref({ ...september });

const updateWidth = (value) => {
  chosenWidth.value = value;
};

const getMin = (dateGroup) => {
  return Math.min(...dateGroup);
};

const getMax = (dateGroup) => {
  return Math.max(...dateGroup);
};

const isSameDate = (date01, date02) => {
  return date01 === date02;
};

let monthData = ref([]);

const monthBuilder = (month, columns) => {
  const result = month.dates.reduce((acc, item, idx) => {
    const minDate = getMin(item);
    const maxDate = getMax(item);

    item.forEach((date) => {
      acc.push(date);
    });

    if (isSameDate(minDate, maxDate)) {
      // acc.push(null);
      // return acc;
    }

    // group spacer
    acc.push(false);

    return acc;
  }, []);

  monthData.value = result;
  return result;
};

// const updateMonth = () => {
//   chosen = chosen ? 0 : 1;
//
//   if (chosen) {
//     chosenMonth.value = { ...september };
//   } else {
//     chosenMonth.value = { ...december };
//   }
// };

// defineExpose({
//   updateWidth,
// });
// const counter = useCounterStore();
</script>

<template>
  <div>
    <button @click="monthBuilder(september)">RUN</button>

    <br />

    <template :key="count" v-for="count in [2, 3, 4, 5, 6]">
      <button @click="updateWidth(count)">{{ count }}</button>
    </template>

    <!--    <button @click="updateMonth">++</button>-->

    <div
      class="container"
      :style="{
        width: `${chosenWidth * 2.5}rem`,
      }"
    >
      <template :key="date" v-for="date in monthData">
        <div>{{ date }}</div>
      </template>
      <!--      <Month :columns="chosenWidth" :month="chosenMonth" />-->
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  //height: 20rem;
  background-color: #ecb017;
}
.dates {
  display: flex;
  flex-wrap: wrap;
  width: 15rem;
  /*height: 15rem;*/
  justify-content: start;
  align-items: center;

  .spacer,
  .day {
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    /*margin: 0.5rem;*/
    background-color: #565d73;
    color: #f2f2f2;
    padding: 0.75rem;
  }

  .spacer {
    width: 2.5rem;
    height: 2.5rem;
    //margin-right: 1rem;
    color: #2f2828;
    background-color: aliceblue;
  }

  .spacer-2 {
    width: 0rem;
    height: 5.33rem;
    //margin-right: 1rem;
    background-color: aliceblue;
  }
}

//.group {
//display: flex;
//flex-wrap: wrap;
//width: 15rem;
///*height: 15rem;*/
//justify-content: start;
//align-items: center;

//}
</style>
