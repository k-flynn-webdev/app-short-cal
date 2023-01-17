import { authSet, authRemove } from "../plugins/http.js";
import {
  getQueryAccessToken,
  setStorageAccessToken,
  clearStorageAccessToken,
} from "./authentication.js";

export const HOME = "home";
export const LOGOUT = "logout";

export const onAppMountAccessToken = (router) => {
  const accessToken = getQueryAccessToken(router);
  if (accessToken) {
    setStorageAccessToken(accessToken);
    authSet(accessToken);
    router.push({ name: HOME });
  }
};

export const onAppLogOut = (router) => {
  if (
    router &&
    router.currentRoute &&
    router.currentRoute.value &&
    router.currentRoute.value.fullPath &&
    router.currentRoute.value.fullPath.includes(LOGOUT)
  ) {
    clearStorageAccessToken();
    authRemove();
    router.push({ name: HOME });
  }
};
