import { defineStore } from "pinia";
import { get, post, remove } from "@/plugins/http";

const defaultCalBlockInput = { url: "", type: null };

export const useCalBlockStore = defineStore({
  id: "calBlock",
  state: () => ({
    calBlockInput: { ...defaultCalBlockInput },
    calBlocks: [{}],
    error: null,
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
      return post("calendar", block)
        .then(({ data }) => {
          this.calBlocks.push(data);
        })
        .catch((e) => {
          this.error = e;
          throw e;
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
