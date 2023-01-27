import { defineStore } from "pinia";
import { get, post, remove } from "@/plugins/http";

const defaultCalBlockInput = { url: "", type: null };

export const useCalBlockStore = defineStore({
  id: "calBlock",
  state: () => ({
    calBlockInput: { ...defaultCalBlockInput },
    calBlocks: [{}],
    error: null,
    isLoading: false,
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
      this.clearError();
      this.setLoading();

      return post("calendar", block)
        .then(({ data }) => {
          this.calBlocks.push(data);
        })
        .catch((e) => {
          this.setError(e);
          throw e;
        })
        .finally(() => {
          this.clearLoading();
        });
    },
    removeCalBlock(block) {
      this.calBlocks.filter((item) => item.id !== block.id);
    },
    clearCalBlocks() {
      this.calBlocks = [];
    },
    setLoading() {
      this.isLoading = true;
    },
    clearLoading() {
      this.isLoading = false;
    },
    setError(error) {
      this.error = error;
    },
    clearError() {
      this.error = null;
    },
  },
});
