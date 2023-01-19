import { afterEach, describe, expect, it, vi } from "vitest";
import isErrorFactory from "@/helpers/isErrorFactory.js";
const { isError, hasError, clearError, setError } = isErrorFactory();

describe("isErrorFactory", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it("should be a string - isError", () => {
    const isString = isError.value;
    expect(isString).toStrictEqual(expect.any(String));
  });

  it("should be a bool - hasError", () => {
    const isBool = hasError.value;
    expect(isBool).toStrictEqual(expect.any(Boolean));
  });

  it("should be a function - clearError", () => {
    const isFunction = clearError;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should reset isError - clearError", () => {
    isError.value = { message: "example error message" };
    clearError();
    expect(isError.value).toBe("");
  });

  it("should set error - setError", () => {
    const error = { message: "example error message" };

    hasError.value = false;
    isError.value = null;
    setError(error);
    expect(isError.value).toStrictEqual(error.message);
    expect(hasError.value).toBe(true);
  });
});
