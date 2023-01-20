import { computed } from "vue";

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
  if (!accessToken) return;
  return localStorage.setItem(USER_TOKEN, accessToken);
};

export const clearStorageAccessToken = () => {
  return localStorage.removeItem(USER_TOKEN);
};

export const MIN_EMAIL = 5;

export const validEmail = (email) => {
  if (!email || email.length < MIN_EMAIL) return false;

  const emailSplit = email.split("@");
  const validLocal = emailSplit[0] && emailSplit[0].length;
  const validDomain =
    emailSplit[1] &&
    emailSplit[1].includes(".") &&
    emailSplit[1].split(".").every((item) => item.length);

  return validLocal && validDomain;
};

export const MIN_PASSWORD = 5;

export const validPassword = (password) => {
  return !(!password || password.length < MIN_PASSWORD);
};

export const validLoginDetails = (email, password) => {
  return validEmail(email) && validPassword(password);
};
