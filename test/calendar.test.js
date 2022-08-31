import { shallowMount } from "@vue/test-utils";
import Calendar from "@/components/Calendar.vue";

test("mount component", () => {
  // expect(Calendar).toBeTruthy();
  //
  const wrapper = shallowMount(Calendar, {
    props: {
      count: 4,
    },
  });

  expect(wrapper.vm.chosenWidth).toBe(3);
  wrapper.vm.updateWidth(10);
  expect(wrapper.vm.chosenWidth).toBe(10);
});
