import { defineStore } from "pinia";
import { get, post, remove } from "@/plugins/http";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {},
  }),
  getters: {
    isLoggedIn() {
      return this.user && this.user.id >= 0;
    },
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
    removeUser() {
      this.user = {};
    },
    getUserAPI() {
      return get("users")
        .then(({ data }) => {
          if (data && data.data && data.data[0]) {
            this.setUser(data.data[0]);
            return this.user;
          }
        })
        .catch((e) => {
          throw e;
        });
    },
    registerAPI(input) {
      return post("users", input)
        .then(({ data }) => {
          this.setUser(data.user);
          return data.accessToken;
        })
        .catch((e) => {
          throw e;
        });
    },
    loginAPI(input) {
      return post("authentication", input)
        .then(({ data }) => {
          this.setUser(data.user);
          return data.accessToken;
        })
        .catch((e) => {
          throw e;
        });
    },
    logOutAPI() {
      return remove("authentication")
        .then(() => {
          this.removeUser();
        })
        .catch((e) => {
          throw e;
        });
    },
  },
});
