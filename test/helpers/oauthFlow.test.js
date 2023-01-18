import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@/plugins/http.js", () => {
  return {
    authSet: vi.fn(),
    authRemove: vi.fn(),
  };
});
vi.mock("@/helpers/authentication.js", () => {
  return {
    getQueryAccessToken: vi.fn(),
    getStorageAccessToken: vi.fn(),
    setStorageAccessToken: vi.fn(),
    clearStorageAccessToken: vi.fn(),
    authSet: vi.fn(),
  };
});

import { onAppMountAccessToken, onAppLogOut } from "@/helpers/oauthFlow.js";

describe("oauthFlow", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should be function - onAppMountAccessToken", () => {
    const isFunction = onAppMountAccessToken;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should early exit - onAppMountAccessToken", async () => {
    const authentication = await import("@/helpers/authentication.js");
    expect(onAppMountAccessToken()).toBeUndefined();
    expect(authentication.getQueryAccessToken).toBeCalledTimes(0);
  });

  it("should early exit on empty query - onAppMountAccessToken", async () => {
    const authentication = await import("@/helpers/authentication.js");
    const http = await import("@/plugins/http.js");
    const mockRouter = { empty: true, push: vi.fn() };

    expect(onAppMountAccessToken(mockRouter)).toBeUndefined();
    expect(authentication.getQueryAccessToken).toBeCalledTimes(1);
    expect(authentication.setStorageAccessToken).toBeCalledTimes(0);
    expect(http.authSet).toBeCalledTimes(0);
    expect(mockRouter.push).toBeCalledTimes(0);
  });

  it("should set token - onAppMountAccessToken", async () => {
    const authentication = await import("@/helpers/authentication.js");
    const http = await import("@/plugins/http.js");
    const access_token = "valid_test_access_key";
    const mockRouter = { access_token, push: vi.fn() };
    authentication.getQueryAccessToken.mockReturnValueOnce(access_token);

    expect(onAppMountAccessToken(mockRouter)).toBeUndefined();
    expect(authentication.getQueryAccessToken).toBeCalledWith(mockRouter);
    expect(authentication.setStorageAccessToken).toBeCalledWith(access_token);
    expect(http.authSet).toBeCalledWith(access_token);
    expect(mockRouter.push).toBeCalledWith({ name: "home" });
  });

  it("should be function - onAppLogOut", () => {
    const isFunction = onAppLogOut;
    expect(isFunction).toStrictEqual(expect.any(Function));
  });

  it("should early exit - onAppLogOut", async () => {
    const authentication = await import("@/helpers/authentication.js");
    expect(onAppLogOut()).toBeUndefined();
    expect(authentication.getQueryAccessToken).toBeCalledTimes(0);
  });

  it("should not trigger on routes excluding 'logout' - onAppLogOut", async () => {
    const authentication = await import("@/helpers/authentication.js");
    const http = await import("@/plugins/http.js");
    const mockRouterLogin = {
      currentRoute: { value: { fullPath: "/login" } },
      push: vi.fn(),
    };

    expect(onAppLogOut(mockRouterLogin)).toBeUndefined();
    expect(authentication.clearStorageAccessToken).toBeCalledTimes(0);
    expect(http.authRemove).toBeCalledTimes(0);
    expect(mockRouterLogin.push).toBeCalledTimes(0);
  });

  it("should trigger on routes 'logout' - onAppLogOut", async () => {
    const authentication = await import("@/helpers/authentication.js");
    const http = await import("@/plugins/http.js");
    const mockRouterLogout = {
      currentRoute: { value: { fullPath: "/logout" } },
      push: vi.fn(),
    };

    expect(onAppLogOut(mockRouterLogout)).toBeUndefined();
    expect(authentication.clearStorageAccessToken).toBeCalledTimes(1);
    expect(http.authRemove).toBeCalledTimes(1);
    expect(mockRouterLogout.push).toBeCalledWith({ name: "home" });
  });
});
