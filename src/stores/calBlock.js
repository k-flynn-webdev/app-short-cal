import { defineStore } from "pinia";
import { get, post, remove } from "@/plugins/http";

const defaultCalBlockInput = { url: "", type: null };

export const useCalBlockStore = defineStore({
  id: "calBlock",
  state: () => ({
    calBlockInput: { ...defaultCalBlockInput },
    calBlocks: [{}],
  }),
  getters: {
    getCalBlocks() {
      return this.calBlocks;
    },
  },
  actions: {
    resetCalBlockInput() {
      this.calBlockInput = { ...defaultCalBlockInput };
    },
    setCalBlockInputURL(url) {
      this.calBlockInput.url = url;
    },
    setCalBlockInputType(type) {
      if (this.calBlockInput.type === type) {
        this.resetCalBlockInput();
        return;
      }

      this.calBlockInput.type = type;
    },
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
