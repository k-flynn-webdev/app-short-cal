import { shallowMount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { afterEach, describe, expect, it, vi } from "vitest";
import LoginLocal from "@/components/LoginLocal.vue";

const wrapperMount = () => {
  return shallowMount(LoginLocal, {
    global: {
      plugins: [createTestingPinia()],
      stubs: ["AInput", "ABtn", "AAlert"],
    },
  });
};

describe("LoginLocal", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it("should be truthy", () => {
    const wrapper = wrapperMount();
    expect(wrapper).toBeTruthy();
  });
});
