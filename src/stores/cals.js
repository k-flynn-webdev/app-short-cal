import { defineStore } from "pinia";
import {
  createDataIslands,
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
  },
  actions: {
    fetchCals() {
      this.cals = createRandomCals();
    },
  },
});
