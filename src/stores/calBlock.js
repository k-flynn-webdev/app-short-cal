import { defineStore } from "pinia";
import { get, post, remove } from "@/plugins/http";

export const useCalBlockStore = defineStore({
  id: "calBlock",
  state: () => ({
    calBlocks: [{}],
  }),
  getters: {
    getCalBlocks() {
      return this.calBlocks;
    },
  },
  actions: {
    addCalBlock(block) {
      return new Promise((res, rej) => {
        this.calBlocks.push(block);
        return res(true);
      });
    },
    removeCalBlock(block) {
      this.calBlocks.filter((item) => item.id !== block.id);
    },
    clearCalBlocks() {
      this.calBlocks = [];
    },
  },
});
