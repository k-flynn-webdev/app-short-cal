import { defineStore } from "pinia";
import { getRandomIntInclusive } from "../helpers/cal";

export const useInfoStore = defineStore({
  id: "info",
  state: () => ({
    cols: getRandomIntInclusive(2, 7),
  }),
  getters: {
    getCols: (state) => state.cols,
  },
  actions: {
    setCols(newCols) {
      this.cols = newCols;
    },
  },
});
