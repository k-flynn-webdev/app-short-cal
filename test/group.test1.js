import { shallowMount } from "@vue/test-utils";
import Group from "@/components/Group.vue";

const mockCalendarData = {
  name: "September",
  id: 8,
  dates: [
    [1, 2, 3],
    [6, 7],
    [12, 13, 14],
    [16],
    [18, 19, 20, 21, 22, 23, 24],
    [26, 27],
    [30],
  ],
};

const mockGroupData = {
  data: {},
  lines: [],
  direction: 1,
};

const mockCalId = "f81d4fae-7dec-11d0-a765-00a0c91e6bf6";

const mockCalObject = {
  id: mockCalId,
  start: {
    dateTime: 1667411782,
  },
  end: {
    dateTime: 1667670982,
  },
  title: "test",
  summary: "testinfo",
};

const mockRenderGroupData = {
  data: { items: [mockCalObject] },
  columns: 5,
  calData: {
    0: {
      0: null,
      1: null,
      2: "random",
      3: "random",
      4: "random",
    },
    1: { 0: "random", 1: "random", 2: "random", 3: null, 4: "random1" },
    2: { 0: null, 1: "random2", 2: "random2", 3: null, 4: null },
  },
  direction: 1,
};

// should look like:
// =====
// = ==

test("Group - createGroupObject - function", () => {
  const wrapper = shallowMount(Group);
  expect(wrapper.vm.createGroupObject).toStrictEqual(expect.any(Function));
});

test("Group - createGroupObject - return a empty base group object", () => {
  const wrapper = shallowMount(Group);
  expect(wrapper.vm.createGroupObject()).toStrictEqual(mockGroupData);
});

test("Group - createGroupObject - return days and offset", () => {
  const wrapper = shallowMount(Group);
  const daysData = { days: 31 };
  expect(wrapper.vm.createGroupObject(daysData)).toStrictEqual({
    ...mockGroupData,
    data: { days: 31 },
  });
});

test("Group - groupBuilder - function", () => {
  const wrapper = shallowMount(Group);
  expect(wrapper.vm.groupBuilder).toStrictEqual(expect.any(Function));
});

test("Group - groupBuilder - throw missing days data", () => {
  const wrapper = shallowMount(Group);
  try {
    wrapper.vm.groupBuilder();
  } catch (e) {
    expect(e).toBe("Missing days data");
  }
});

test("Group - groupBuilder - throw missing colCount", () => {
  const wrapper = shallowMount(Group);
  try {
    wrapper.vm.groupBuilder([], "0");
  } catch (e) {
    expect(e).toBe("Missing colCount");
  }
});

test("Group - groupBuilder - return basic object", () => {
  const wrapper = shallowMount(Group);
  const days = { days: [12] };
  const columns = 13;
  expect(wrapper.vm.groupBuilder(days, columns)).toEqual({
    data: days,
    lines: [],
    direction: 1,
  });
});

test("Group - groupBuilder - return basic object", () => {
  const wrapper = shallowMount(Group);
  const days = { days: [12] };
  const columns = 13;
  expect(wrapper.vm.groupBuilder(days, columns)).toEqual({
    data: days,
    lines: [],
    direction: 1,
  });
});
