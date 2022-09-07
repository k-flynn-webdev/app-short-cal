import { shallowMount } from "@vue/test-utils";
import Calendar from "@/components/Calendar.vue";

const september = {
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

test("Calendar - monthBuilder - function", () => {
  const wrapper = shallowMount(Calendar);
  expect(wrapper.vm.monthBuilder).toStrictEqual(expect.any(Function));
});

test("Calendar - monthBuilder - return array", () => {
  const wrapper = shallowMount(Calendar);
  expect(wrapper.vm.monthBuilder(september)).toStrictEqual(expect.any(Array));
});

test("Calendar - getMin - return smallest of a group of numbers", () => {
  const wrapper = shallowMount(Calendar);
  expect(wrapper.vm.getMin([0, 1, 2])).toBe(0);
  expect(wrapper.vm.getMin([10.05, 10.6, 10.7])).toBe(10.05);
  expect(wrapper.vm.getMin([99.99, 999, 999.99])).toBe(99.99);
});

test("Calendar - getMax - return largest of a group of numbers", () => {
  const wrapper = shallowMount(Calendar);
  expect(wrapper.vm.getMax([0, 1, 2])).toBe(2);
  expect(wrapper.vm.getMax([10.05, 10.6, 10.7])).toBe(10.7);
  expect(wrapper.vm.getMax([99.99, 999, 999.99])).toBe(999.99);
});

test("Calendar - isSameDate - return dates provided are same", () => {
  const wrapper = shallowMount(Calendar);
  expect(wrapper.vm.isSameDate(1, 2)).toBe(false);
  expect(wrapper.vm.isSameDate(1234, 1234.5)).toBe(false);
  expect(wrapper.vm.isSameDate(1234, 12345)).toBe(false);
  expect(wrapper.vm.isSameDate(12, 12)).toBe(true);
  expect(wrapper.vm.isSameDate(96.25, 96.25)).toBe(true);
});
