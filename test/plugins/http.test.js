import { afterEach, describe, expect, it, vi } from "vitest";
import {
  authSet,
  authRemove,
  axiosInstance,
  get,
  post,
  put,
  patch,
  remove,
} from "@/plugins/http.js";

vi.mock("@/helpers/authentication.js", () => {
  return {
    getStorageAccessToken: vi.fn(),
  };
});

describe("Http", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it("should be a function - authSet", () => {
    const isFunction = authSet;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should set authorization key - authSet", async () => {
    const mockAccessToken = "12345";
    axiosInstance.defaults.headers["Authorization"] = null;

    expect(authSet(mockAccessToken)).toBeUndefined();
    expect(axiosInstance.defaults.headers["Authorization"]).toBe(
      `Bearer ${mockAccessToken}`
    );
  });

  it("should be a function - authRemove", () => {
    const isFunction = authRemove;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should set authorization key - authRemove", async () => {
    axiosInstance.defaults.headers["Authorization"] = "12345";

    expect(authRemove()).toBeUndefined();
    expect(axiosInstance.defaults.headers["Authorization"]).toBeNull();
  });

  it("should be a function - axiosInstance", () => {
    const isFunction = axiosInstance;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should be a function - get", () => {
    const isFunction = get;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should be a function - post", () => {
    const isFunction = post;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should be a function - put", () => {
    const isFunction = put;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should be a function - patch", () => {
    const isFunction = patch;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should be a function - remove", () => {
    const isFunction = remove;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });
});
