import { defineStore } from "pinia";
import { get, post } from "../plugins/http";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {},
  }),
  getters: {},
  actions: {
    getUserAPI() {
      return get("users")
        .then(({ data }) => {
          if (data && data.data && data.data[0]) {
            this.user = data.data[0];
            return this.user;
          }
        })
        .catch((e) => {
          throw e;
        });
    },
    userLoginAPI(input) {
      return post("users", input)
        .then(({ data }) => {
          return data;
        })
        .catch((e) => {
          throw e;
        });
    },
  },
});
