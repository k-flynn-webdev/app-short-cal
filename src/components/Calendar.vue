<script setup>
import { ref } from "vue";
// import { useCounterStore } from "@/stores/counter";
// import Month from "@/components/Month.vue";

const september = {
  name: "September",
  id: 8,
  dates: [
    [2, 3],
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

const createCalObject = (monthData) => {
  return { row: { count: 0 }, groups: [], ...monthData };
};

const groupBuilder = (groupDate, colCount) => {
  if (!groupDate) throw "Missing group data";
  if (typeof colCount !== "number") throw "Missing colCount";

  let build = {
    lines: 0,
    days: [],
  };

  const minGroupDate = getMin(groupDate);
  const maxGroupDate = getMax(groupDate) + 1;

  for (let i = minGroupDate, max = maxGroupDate; i < max; i++) {
    build.days.push({
      value: i,
    });
  }

  if (build.days.length > 0) {
    build.lines = Math.floor(build.days.length / colCount);
  }

  return build;
};

const monthBuilder = (month, colCount) => {
  const result = month.dates.reduce((acc, groupDate, idx) => {
    // const minRangeDate = getMin(groupDate);
    // const maxRangeDate = getMax(groupDate) + 1;

    // const rangeLength = maxRangeDate - minRangeDate;
    // const rowCount = acc.row.count + rangeLength;

    let groupBuild = groupBuilder(groupDate, colCount);
    // acc.row.count += rangeLength;

    // const spaceLeft = acc.row.count % colCount;
    // if (spaceLeft > 0) {
    //   const forceNewLine = build.newLine && build.fullLine;
    //   build.spacer = forceNewLine ? 1 : spaceLeft;
    //   acc.row.count += forceNewLine ? 1 : spaceLeft;
    // }
    // build.spacer = spaceLeft;
    // acc.row.count += spaceLeft;

    acc.groups.push(groupBuild);
    // console.log(acc.row.count, spaceLeft);

    // add spacer
    // console.log(acc.row.count, colCount - acc.row.count);
    // acc.row.count += rangeLength;
    // build.extra = rangeLength < colWidth;

    //check if row needs more push

    // const rowPre = colWidth - (acc.row.count % colWidth);
    // const rowPost = colWidth - ((acc.row.count + rangeLength) % colWidth);
    //
    // console.log(rowPre, rowPost);

    // console.log(JSON.stringify(acc.row));

    // range.forEach((date) => {
    //   acc.push(date);
    // });
    //
    // if (isSameDate(minRangeDate, maxRangeDate)) {
    //   // acc.push(null);
    //   // return acc;
    // }

    // group spacer
    // acc.push(false);

    return acc;
  }, createCalObject(monthData));

  // monthData.value = result;
  return result;
};

const updateDisplay = (value) => {
  chosenWidth.value = value;

  monthBuilder(september, value);
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
    <br />

    <template :key="count" v-for="count in [2, 3, 4, 5, 6, 7]">
      <button @click="updateDisplay(count)">{{ count }}</button>
    </template>

    <!--    <button @click="updateMonth">++</button>-->

    <template
      class="container"
      :style="{
        width: `${chosenWidth * 2.5}rem`,
      }"
    >
      <template class="dates">
        <template :key="group" v-for="group in monthData.groups">
          <template :key="day" v-for="day in group.days">
            <div class="day">
              <p>{{ day.value }}</p>
              <span>{{ day.count }}</span>
            </div>
          </template>
          <div class="spacer" :key="spacer" v-for="spacer in group.spacer">
            {{ spacer }}
          </div>
        </template>
      </template>
      <!--      <Month :columns="chosenWidth" :month="chosenMonth" />-->
    </template>

    <div>
      <template :key="group" v-for="group in monthData.groups">
        <div>
          <span>{{ group.spacer }}</span> | <span>{{ group.offset }}</span> |
          <span>{{ group.newLine }}</span> | <span>{{ group.fullLine }}</span> |
          <span>{{ group.days.length }}</span>
        </div>
      </template>
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
    position: relative;
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    /*margin: 0.5rem;*/
    background-color: #7188d2;
    padding: 0.75rem;

    p {
      font-size: 1.33rem;
      color: #f2f2f2;
    }

    span {
      font-size: 0.8rem;
      position: absolute;
      color: #626262;
      top: 0;
      right: 0;
    }
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
