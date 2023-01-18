import { afterEach, describe, expect, it, vi } from "vitest";
import {
  USER_TOKEN,
  getQueryAccessToken,
  getStorageAccessToken,
  setStorageAccessToken,
  clearStorageAccessToken,
} from "@/helpers/authentication.js";

describe("Authentication", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it("should be a string - USER_TOKEN", () => {
    const isString = USER_TOKEN;
    expect(isString).toStrictEqual(expect.any(String));
  });

  it("should be a function - getQueryAccessToken", () => {
    const isFunction = getQueryAccessToken;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should only accept an access_token query - getQueryAccessToken", () => {
    expect(getQueryAccessToken()).toBe("");
    expect(getQueryAccessToken({})).toBe("");
    expect(getQueryAccessToken({ currentRoute: {} })).toBe("");
    expect(getQueryAccessToken({ currentRoute: { value: {} } })).toBe("");
    expect(
      getQueryAccessToken({ currentRoute: { value: { query: {} } } })
    ).toBe("");
    expect(
      getQueryAccessToken({
        currentRoute: { value: { query: { access_token: "" } } },
      })
    ).toBe("");
  });

  it("should accept an access_token query - getQueryAccessToken", () => {
    const mockKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ";
    expect(
      getQueryAccessToken({
        currentRoute: { value: { query: { access_token: mockKey } } },
      })
    ).toBe(mockKey);
  });

  it("should be a function - getStorageAccessToken", () => {
    const isFunction = getStorageAccessToken;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should return localstorage accessToken - getStorageAccessToken", () => {
    const mockKey = "accessToken";
    const getItemSpy = vi.spyOn(Storage.prototype, "getItem");
    getStorageAccessToken();
    expect(getItemSpy).toBeCalledWith(mockKey);
  });

  it("should be a function - setStorageAccessToken", () => {
    const isFunction = setStorageAccessToken;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should early exit - setStorageAccessToken", () => {
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
    setStorageAccessToken();
    expect(setItemSpy).toBeCalledTimes(0);
  });

  it("should set localstorage accessToken - setStorageAccessToken", () => {
    const mockKey = "accessToken";
    const mockKeyValue = "valid_access_token";
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
    setStorageAccessToken(mockKeyValue);
    expect(setItemSpy).toBeCalledWith(mockKey, mockKeyValue);
  });

  it("should be a function - clearStorageAccessToken", () => {
    const isFunction = clearStorageAccessToken;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should clear localstorage accessToken - clearStorageAccessToken", () => {
    const mockKey = "accessToken";
    const removeItemSpy = vi.spyOn(Storage.prototype, "removeItem");
    clearStorageAccessToken();
    expect(removeItemSpy).toBeCalledWith(mockKey);
  });
});
