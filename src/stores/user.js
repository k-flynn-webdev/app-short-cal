import { defineStore } from "pinia";
import { get, post } from "../plugins/http";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({}),
  getters: {},
  actions: {
    getUsersAPI() {
      return get("users");
    },
    userLoginAPI(input) {
      return post("users", input)
        .then((res) => {})
        .catch((e) => {
          throw e;
        });
    },
  },
});
