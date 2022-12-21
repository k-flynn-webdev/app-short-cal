import { defineStore } from "pinia";
import {
  createDataIslands,
  createDataObj,
  createRandomCals,
  createBlockList,
} from "../helpers/cal";

export const useCalsStore = defineStore({
  id: "cals",
  state: () => ({
    cals: [],
  }),
  getters: {
    getCals: (state) => state.cals,
    getCalDataIslands: (state) => {
      const calData = createDataObj(state.cals);
      return createDataIslands(calData);
    },
    getCalBLocks: (state) => {
      const calData = createDataObj(state.cals);
      const dataIslands = createDataIslands(calData);

      return (cols) => createBlockList(dataIslands, cols);
    },
  },
  actions: {
    fetchCals() {
      this.cals = createRandomCals();
      // this.cals = [
      //   [
      //     { start: 3, end: 8, id: 0 },
      //     { start: 29, end: 29, id: 1 },
      //     { start: 5, end: 5, id: 2 },
      //     { start: 2, end: 5, id: 3 },
      //     { start: 25, end: 27, id: 4 },
      //   ],
      //   [
      //     { start: 26, end: 27, id: 0 },
      //     { start: 21, end: 25, id: 1 },
      //     { start: 25, end: 25, id: 2 },
      //     { start: 11, end: 16, id: 3 },
      //     { start: 20, end: 20, id: 4 },
      //   ],
      //   [
      //     { start: 18, end: 19, id: 0 },
      //     { start: 6, end: 7, id: 1 },
      //     { start: 2, end: 6, id: 2 },
      //     { start: 5, end: 5, id: 3 },
      //     { start: 29, end: 31, id: 4 },
      //   ],
      // ];

      // this.cals = [
      //   [
      //     { start: 2, end: 6, id: 0 },
      //     { start: 30, end: 30, id: 1 },
      //     { start: 30, end: 31, id: 2 },
      //     { start: 24, end: 30, id: 3 },
      //     { start: 19, end: 21, id: 4 },
      //   ],
      // ];

      // this.cals = [
      //   [
      //     { start: 1, end: 1, id: 0 },
      //     { start: 5, end: 6, id: 1 },
      //     { start: 29, end: 31, id: 2 },
      //     { start: 22, end: 23, id: 3 },
      //     { start: 19, end: 20, id: 4 },
      //   ],
      //   [
      //     { start: 19, end: 21, id: 0 },
      //     { start: 31, end: 31, id: 1 },
      //     { start: 8, end: 8, id: 2 },
      //     { start: 27, end: 27, id: 3 },
      //     { start: 16, end: 16, id: 4 },
      //   ],
      //   [
      //     { start: 17, end: 26, id: 0 },
      //     { start: 20, end: 27, id: 1 },
      //     { start: 8, end: 11, id: 2 },
      //     { start: 9, end: 9, id: 3 },
      //     { start: 31, end: 31, id: 4 },
      //   ],
      // ];
      // this.cals = [
      //   [
      //     { start: 16, end: 17, id: 0 },
      //     { start: 58, end: 59, id: 1 },
      //     { start: 99, end: 99, id: 2 },
      //     { start: 61, end: 62, id: 3 },
      //     { start: 75, end: 77, id: 4 },
      //   ],
      //   [
      //     { start: 68, end: 75, id: 0 },
      //     { start: 43, end: 43, id: 1 },
      //     { start: 72, end: 72, id: 2 },
      //     { start: 42, end: 45, id: 3 },
      //     { start: 34, end: 34, id: 4 },
      //   ],
      // ];
      // this.cals = [
      //   [
      //     { start: 70, end: 74, id: 0 },
      //     { start: 90, end: 91, id: 1 },
      //     { start: 33, end: 36, id: 2 },
      //     { start: 99, end: 99, id: 3 },
      //     { start: 30, end: 35, id: 4 },
      //   ],
      //   [
      //     { start: 65, end: 66, id: 0 },
      //     { start: 91, end: 91, id: 1 },
      //     { start: 15, end: 15, id: 2 },
      //     { start: 54, end: 54, id: 3 },
      //     { start: 81, end: 86, id: 4 },
      //   ],
      // ];
    },
  },
});
