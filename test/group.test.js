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

test("Group - createGroupObject - function", () => {
  const wrapper = shallowMount(Group);
  expect(wrapper.vm.createGroupObject).toStrictEqual(expect.any(Function));
});

const mockGroupData = {
  days: 0,
  offset: 0,
  leftWall: 0,
  rightWall: 0,
  lines: 0,
};

test("Group - createGroupObject - return a empty base group object", () => {
  const wrapper = shallowMount(Group);
  expect(wrapper.vm.createGroupObject()).toStrictEqual(mockGroupData);
});

test("Group - createGroupObject - return days and offset", () => {
  const wrapper = shallowMount(Group);
  const days = 31;
  const offset = 15;
  expect(
    wrapper.vm.createGroupObject({ ...mockGroupData, days }, offset)
  ).toStrictEqual({ ...mockGroupData, days, offset });
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
  const days = 22;
  const columns = 13;
  expect(wrapper.vm.groupBuilder({ days }, columns)).toEqual({
    days: days,
    leftWall: 0,
    rightWall: 0,
    lines: 0,
    offset: 1,
  });
});
