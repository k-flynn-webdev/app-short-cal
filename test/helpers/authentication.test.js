import {
  getQueryAccessToken,
  getStorageAccessToken,
  setStorageAccessToken,
  clearStorageAccessToken,
} from "@/helpers/authentication.js";

test("Authentication - getQueryAccessToken - function", () => {
  const isFunction = getQueryAccessToken;
  expect(isFunction).toStrictEqual(expect.any(Function));
});

test("Authentication - getQueryAccessToken - falsy", () => {
  expect(getQueryAccessToken()).toBeFalsy();
  expect(getQueryAccessToken({})).toBeFalsy();
  expect(getQueryAccessToken({ currentRoute: {} })).toBeFalsy();
  expect(getQueryAccessToken({ currentRoute: { value: {} } })).toBeFalsy();
  expect(getQueryAccessToken({ currentRoute: { value: {} } })).toBeFalsy();
  expect(
    getQueryAccessToken({ currentRoute: { value: { query: {} } } })
  ).toBeFalsy();
  expect(
    getQueryAccessToken({
      currentRoute: { value: { query: { access_token: "" } } },
    })
  ).toBeFalsy();
});

test("Authentication - getQueryAccessToken - key exists", () => {
  const keyTest = "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ";
  expect(
    getQueryAccessToken({
      currentRoute: { value: { query: { access_token: keyTest } } },
    })
  ).toBe(keyTest);
});

test("Authentication - getStorageAccessToken - function", () => {
  const isFunction = getStorageAccessToken;
  expect(isFunction).toStrictEqual(expect.any(Function));
});

test("Authentication - getStorageAccessToken - value", () => {
  const originalStorage = window.localStorage;
  window.localStorage = { getItem: () => "testing" };

  expect(getStorageAccessToken()).toStrictEqual("testing");
  window.localStorage = originalStorage;
});

test("Authentication - setStorageAccessToken - function", () => {
  const isFunction = setStorageAccessToken;
  expect(isFunction).toStrictEqual(expect.any(Function));
});

test("Authentication - setStorageAccessToken - value", () => {
  window.localStorage.removeItem("accessToken");
  setStorageAccessToken("new key");
  expect(window.localStorage.getItem("accessToken")).toStrictEqual("new key");
  window.localStorage.removeItem("accessToken");
});

test("Authentication - clearStorageAccessToken - function", () => {
  const isFunction = clearStorageAccessToken;
  expect(isFunction).toStrictEqual(expect.any(Function));
});

test("Authentication - clearStorageAccessToken - value", () => {
  window.localStorage.setItem("accessToken", "123");
  clearStorageAccessToken();
  expect(window.localStorage.getItem("accessToken")).toBeNull();
});
