import { afterEach, describe, expect, it, vi } from "vitest";
import isLoadingFactory from "@/helpers/isLoadingFactory.js";
const { isLoading, clearLoading, setLoading } = isLoadingFactory();

describe("isLoadingFactory", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it("should be a bool - isLoading", () => {
    const isBool = isLoading.value;
    expect(isBool).toStrictEqual(expect.any(Boolean));
  });

  it("should be a function - clearLoading", () => {
    const isFunction = clearLoading;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should reset isLoading - clearLoading", () => {
    isLoading.value = true;
    clearLoading();
    expect(isLoading.value).toBe(false);
  });

  it("should be a function - setLoading", () => {
    const isFunction = setLoading;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should set isLoading - setLoading", () => {
    isLoading.value = false;
    setLoading();
    expect(isLoading.value).toBe(true);
  });
});
