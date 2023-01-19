import { setActivePinia, createPinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useUserStore } from "@/stores/user.js";

vi.mock("@/plugins/http.js", () => {
  return {
    get: vi.fn(),
    post: vi.fn(),
  };
});

let userStore = null;

describe("User", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
    setActivePinia(createPinia());
    userStore = useUserStore();
  });

  it("init user state", () => {
    expect(userStore.user).toEqual({});
  });

  it("should resolve get user", async () => {
    const userInput = { email: "test@test.com", password: "1234" };
    const userPost = { id: 1, ...userInput };

    const http = await import("@/plugins/http.js");
    http.get.mockResolvedValueOnce(userPost);

    await userStore.getUserAPI();

    expect(http.get).toBeCalledWith("users");
  });

  it("should reject get user", async () => {
    const error = { stack: [], message: "generic error" };

    const http = await import("@/plugins/http.js");
    http.get.mockRejectedValueOnce(error);

    await expect(userStore.getUserAPI()).rejects.toThrow(error.message);
  });

  it("should resolve login user", async () => {
    const userInput = { email: "test@test.com", password: "1234" };
    const userPost = { id: 1, ...userInput };

    const http = await import("@/plugins/http.js");
    http.post.mockResolvedValueOnce(userPost);

    await userStore.userLoginAPI(userInput);

    expect(http.post).toBeCalledWith("users", userInput);
  });

  it("should reject login user", async () => {
    const userInput = { email: "test@test.com", password: "1234" };
    const error = { stack: [], message: "generic error" };

    const http = await import("@/plugins/http.js");
    http.post.mockRejectedValueOnce(error);

    await expect(userStore.userLoginAPI(userInput)).rejects.toThrow(
      error.message
    );
  });
});
