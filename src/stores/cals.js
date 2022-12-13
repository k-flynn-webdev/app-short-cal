import { defineStore } from "pinia";
import {
  createDataIslands,
  createDataIslandsMargin,
  createDataObj,
  createRandomCals,
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
    getCalDataIslandsMargin: (state) => {
      const calData = createDataObj(state.cals);
      const dataIslands = createDataIslands(calData);
      return createDataIslandsMargin(dataIslands);
    },
  },
  actions: {
    fetchCals() {
      this.cals = createRandomCals();
    },
  },
});
