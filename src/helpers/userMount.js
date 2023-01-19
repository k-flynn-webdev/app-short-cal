import { useUserStore } from "@/stores/user.js";
import { getStorageAccessToken } from "@/helpers/authentication.js";

export const userMount = (pinia) => {
  if (getStorageAccessToken()) {
    const { getUserAPI } = useUserStore(pinia);
    getUserAPI();
  }
};
