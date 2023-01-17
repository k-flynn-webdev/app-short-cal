export const USER_TOKEN = "accessToken";

export const getQueryAccessToken = (router) => {
  return router &&
    router.currentRoute &&
    router.currentRoute.value &&
    router.currentRoute.value.query &&
    router.currentRoute.value.query.access_token &&
    router.currentRoute.value.query.access_token.length > 5
    ? router.currentRoute.value.query.access_token
    : "";
};

export const getStorageAccessToken = () => {
  return localStorage.getItem(USER_TOKEN);
};

export const setStorageAccessToken = (accessToken) => {
  return localStorage.setItem(USER_TOKEN, accessToken);
};

export const clearStorageAccessToken = () => {
  return localStorage.removeItem(USER_TOKEN);
};
