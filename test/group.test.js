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
  multiLine: false,
};

test("Group - createGroupObject - return a empty base group object", () => {
  const wrapper = shallowMount(Group);
  expect(wrapper.vm.createGroupObject()).toStrictEqual(mockGroupData);
});

test("Group - createGroupObject - return days and offset", () => {
  const wrapper = shallowMount(Group);
  const offset = 15;
  expect(
    wrapper.vm.createGroupObject({ ...mockGroupData, days: 12 }, offset)
  ).toStrictEqual({ ...mockGroupData, days: 12, offset });
});

// test("Group - groupBuilder - function", () => {
//   const wrapper = shallowMount(Group);
//   expect(wrapper.vm.groupBuilder).toStrictEqual(expect.any(Function));
// });
//
// test("Group - groupBuilder - throw missing group data", () => {
//   const wrapper = shallowMount(Group);
//   try {
//     wrapper.vm.groupBuilder();
//   } catch (e) {
//     expect(e).toBe("Missing group data");
//   }
// });
//
// test("Group - groupBuilder - throw missing colCount", () => {
//   const wrapper = shallowMount(Group);
//   try {
//     wrapper.vm.groupBuilder([], 0);
//   } catch (e) {
//     expect(e).toBe("Missing colCount");
//   }
// });
