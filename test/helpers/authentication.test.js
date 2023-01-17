import { getQueryAccessToken } from "@/helpers/authentication.js";

test("Authentication - getQueryAccessToken - function", () => {
  const isFunction = getQueryAccessToken;
  expect(isFunction).toStrictEqual(expect.any(Function));
});

test("Authentication - getQueryAccessToken - falsy", () => {
  expect(getQueryAccessToken()).toBeFalsy();
  expect(getQueryAccessToken({})).toBeFalsy();
  expect(getQueryAccessToken({ query: "anotherItem" })).toBeFalsy();
  expect(getQueryAccessToken({ query: {} })).toBeFalsy();
  expect(getQueryAccessToken({ query: { access_token: "" } })).toBeFalsy();
  expect(getQueryAccessToken({ query: { access_token: "1234" } })).toBeFalsy();
});

test("Authentication - getQueryAccessToken - key exists", () => {
  const keyTest = "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ";
  expect(getQueryAccessToken({ query: { access_token: keyTest } })).toBe(
    keyTest
  );
});
