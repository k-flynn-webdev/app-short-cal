import { defineStore } from "pinia";
import { createRandomCals } from "../helpers/cal";

export const useCalsStore = defineStore({
  id: "cals",
  state: () => ({
    cals: [],
  }),
  getters: {
    getCals: (state) => state.cals,
  },
  actions: {
    fetchCals() {
      this.cals = createRandomCals();
    },
  },
});
