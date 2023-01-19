import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import LoginLocal from "@/components/LoginLocal.vue";
// const { isLoading, clearLoading, setLoading } = isLoadingFactory();

describe("LoginLocal", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it("should be a bool - isLoading", () => {
    const wrapper = mount(LoginLocal, {
      loginDetails: { email: "test" },
    });
    console.log(wrapper);
  });
});
