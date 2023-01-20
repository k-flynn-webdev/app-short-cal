import { authSet, authRemove } from "@/plugins/http.js";
import {
  getQueryAccessToken,
  setStorageAccessToken,
  clearStorageAccessToken,
} from "@/helpers//authentication.js";

export const HOME = "home";
export const LOGOUT = "logout";

export const onAppMountAccessToken = (router) => {
  if (!router) return;

  const accessToken = getQueryAccessToken(router);
  if (accessToken) {
    onAppAccessTokenSuccess(accessToken);
  }
};

export const onAppAccessTokenSuccess = (router, accessToken) => {
  setStorageAccessToken(accessToken);
  authSet(accessToken);
  router.push({ name: HOME });
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
