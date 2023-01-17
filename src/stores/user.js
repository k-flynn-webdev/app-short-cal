import { defineStore } from "pinia";
import { get } from "../plugins/http";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({}),
  getters: {},
  actions: {
    getUsersAPI() {
      return get("users");
    },
  },
});
