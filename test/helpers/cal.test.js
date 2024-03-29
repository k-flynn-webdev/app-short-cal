import {
  getRandomIntInclusive,
  createMonthObj,
  createDataObj,
  createDataIslands,
  blockTotal,
  marginTotal,
  createBlockObj,
  getCurrentLine,
  updateBlockObjCounts,
  updateBlockObjType,
} from "@/helpers/cal.js";

test("Cal - getRandomIntInclusive - function", () => {
  const isFunction = getRandomIntInclusive;
  expect(isFunction).toStrictEqual(expect.any(Function));
});

test("Cal - getRandomIntInclusive - min/max", () => {
  const allowedValues = [
    { min: 1, max: 10 },
    { min: 10, max: 20 },
    { min: 20, max: 21 },
  ];
  allowedValues.forEach((item) => {
    const result = getRandomIntInclusive(item.min, item.max);
    const testResult = result >= item.min && result <= item.max;
    expect(testResult).toBe(true);
  });
});

test("Cal - createMonthObj - function", () => {
  const isFunction = createMonthObj;
  expect(isFunction).toStrictEqual(expect.any(Function));
});

test("Cal - createMonthObj - basic object", () => {
  const monthObj = createMonthObj();
  expect(Object.keys(monthObj)).toEqual(expect.any(Array));
  expect(Object.keys(monthObj)[0]).toBe("1");

  expect(Object.values(monthObj)).toEqual(expect.any(Array));
  expect(Object.values(monthObj)[0]).toEqual([]);
});

test("Cal - createDataObj - function", () => {
  const isFunction = createDataObj;
  expect(isFunction).toStrictEqual(expect.any(Function));
});

test("Cal - createDataObj - throw error", () => {
  expect(() => createDataObj()).toThrow("Error: No data provided");
});

const mockCalendarData = [
  [{ start: 1, end: 12, id: 1 }],
  [{ start: 3, end: 6, id: 2 }],
  [{ start: 9, end: 12, id: 3 }],
  [{ start: 11, end: 15, id: 4 }],
];

test("Cal - createDataObj - basic object", () => {
  const dataObj = createDataObj(mockCalendarData);
  expect(dataObj[1]).toEqual([{ id: 1, calIndex: 0 }]);
  expect(dataObj[3]).toEqual([
    { id: 1, calIndex: 0 },
    { id: 2, calIndex: 1 },
  ]);
  expect(dataObj[8]).toEqual([{ id: 1, calIndex: 0 }]);
  expect(dataObj[15]).toEqual([{ id: 4, calIndex: 3 }]);
  expect(dataObj[16]).toEqual([]);
});

test("Cal - createDataIslands - function", () => {
  const isFunction = createDataIslands;
  expect(isFunction).toStrictEqual(expect.any(Function));
});

test("Cal - createDataIslands - throw error", () => {
  expect(() => createDataIslands()).toThrow("Error: No data provided");
});

test("Cal - createDataIslands - basic object", () => {
  const mockData = createDataObj(mockCalendarData);
  const dataObj = createDataIslands(mockData);
  expect(dataObj).toEqual([{ start: 1, end: 15 }]);
});

test("Cal - blockTotal - function", () => {
  const isFunction = blockTotal;
  expect(isFunction).toStrictEqual(expect.any(Function));
});

test("Cal - blockTotal - basic object", () => {
  const allowedValues = [
    { start: 1, end: 10, value: 10 },
    { start: 10, end: 20, value: 11 },
    { start: 20, end: 21, value: 2 },
    { start: -10, end: -5, value: 6 },
  ];
  allowedValues.forEach((item) => {
    expect(blockTotal(item)).toBe(item.value);
  });
});

test("Cal - marginTotal - function", () => {
  const isFunction = marginTotal;
  expect(isFunction).toStrictEqual(expect.any(Function));
});

test("Cal - marginTotal - throw error", () => {
  expect(() => marginTotal()).toThrow("Error: Missing blocks");
  expect(() => marginTotal("blocks")).toThrow("Error: Missing current count");
  expect(() => marginTotal("blocks", "cols")).toThrow("Error: Missing columns");
});

test("Cal - marginTotal - return 0 margin when current is 0", () => {
  const allowedValues = [[2, 5, 0, 0]];
  allowedValues.forEach((item) => {
    expect(marginTotal(item[0], item[1], item[2])).toBe(item[3]);
  });
});

test("Cal - marginTotal - return correct margin", () => {
  const allowedValues = [
    [2, 5, 1, 1],
    [1, 5, 2, 1],
    [1, 5, 3, 1],
    [1, 5, 4, 1],
    [1, 5, 5, 0],
    [10, 5, 3, 1],
    [3, 5, 3, 2],
    [3, 5, 2, 3],
  ];
  allowedValues.forEach((item) => {
    expect(marginTotal(item[0], item[1], item[2])).toBe(item[3]);
  });
});

test("Cal - createBlockObj - function", () => {
  const isFunction = createBlockObj;
  expect(isFunction).toStrictEqual(expect.any(Function));
});

test("Cal - createBlockObj - basic object", () => {
  const cols = 5;
  const idx = 15;
  const current = 3;
  const data = { start: 5, end: 21 };

  expect(createBlockObj(data, cols, current, idx)).toStrictEqual({
    idx,
    current,
    data,
    margin: 1,
    block: 17,
    type: "single",
    counts: { top: 0, mid: 0, bottom: 0 },
  });
});

test("Cal - getCurrentLine - function", () => {
  const isFunction = getCurrentLine;
  expect(isFunction).toStrictEqual(expect.any(Function));
});

test("Cal - getCurrentLine - basic object", () => {
  expect(getCurrentLine(3, 5)).toBe(0);
  expect(getCurrentLine(6, 5)).toBe(1);
  expect(getCurrentLine(12, 5)).toBe(2);
});

test("Cal - updateBlockObjCounts - function", () => {
  const isFunction = updateBlockObjCounts;
  expect(isFunction).toStrictEqual(expect.any(Function));
});

const mockBlockObj = {
  idx: 999,
  data: { start: 1, end: 2 },
  margin: 1,
  block: 0,
  type: "",
  counts: { top: 0, mid: 0, bottom: 0 },
};

test("Cal - updateBlockObjCounts - return top of blocks", () => {
  const cols = 5;
  const current = 2;
  const mockBlockObjTop = { ...mockBlockObj, block: 1 };

  expect(
    updateBlockObjCounts(mockBlockObjTop, current, cols).counts
  ).toStrictEqual({
    top: 1,
    mid: 0,
    bottom: 0,
  });
});

test("Cal - updateBlockObjCounts - return top of blocks", () => {
  const cols = 5;
  const current = 3;
  const mockBlockObjTop = {
    ...mockBlockObj,
    block: 4,
    margin: 2,
  };

  expect(
    updateBlockObjCounts(mockBlockObjTop, cols, current).counts
  ).toStrictEqual({
    top: 4,
    mid: 0,
    bottom: 0,
  });
});

test("Cal - updateBlockObjCounts - return mid of blocks", () => {
  const cols = 5;
  const current = 3;
  const mockBlockObjTop = {
    ...mockBlockObj,
    block: 8,
    margin: 2,
  };

  expect(
    updateBlockObjCounts(mockBlockObjTop, cols, current).counts
  ).toStrictEqual({
    top: 5,
    mid: 3,
    bottom: 0,
  });
});

test("Cal - updateBlockObjCounts - return bottom of blocks", () => {
  const cols = 5;
  const current = 3;
  const mockBlockObjTop = {
    ...mockBlockObj,
    block: 13,
    margin: 2,
  };

  expect(
    updateBlockObjCounts(mockBlockObjTop, cols, current).counts
  ).toStrictEqual({
    top: 5,
    mid: 5,
    bottom: 3,
  });
});

test("Cal - updateBlockObjType - return single type", () => {
  const mockBlockObjSingle = {
    counts: { top: 1, mid: 0, bottom: 0 },
    block: 1,
    margin: 1,
  };

  expect(updateBlockObjType(mockBlockObjSingle).type).toBe("single");
});

test("Cal - updateBlockObjType - return small type", () => {
  const mockBlockObjSmall = {
    counts: { top: 3, mid: 0, bottom: 0 },
    block: 3,
    margin: 1,
  };

  expect(updateBlockObjType(mockBlockObjSmall).type).toBe("small");
});

test("Cal - updateBlockObjType - return medium type", () => {
  const mockBlockObjMedium = {
    counts: { top: 5, mid: 4, bottom: 0 },
    block: 3,
    margin: 1,
  };

  expect(updateBlockObjType(mockBlockObjMedium).type).toBe("medium");
});

test("Cal - updateBlockObjType - return large type", () => {
  const mockBlockObjLarge = {
    counts: { top: 5, mid: 5, bottom: 3 },
    block: 3,
    margin: 1,
  };

  expect(updateBlockObjType(mockBlockObjLarge).type).toBe("large");
});

// test("Cal - updateBlockObjCounts - return bottom of blocks", () => {
//   const cols = 5;
//   const current = 2;
//   const mockBlockObj = {
//     idx: 999,
//     data: { start: 1, end: 2 },
//     margin: 1,
//     block: 7,
//     type: "single",
//     counts: { top: 0, mid: 0, bottom: 0 },
//   };
//
//   expect(
//     updateBlockObjCounts(mockBlockObj, current, cols).counts
//   ).toStrictEqual({
//     top: 2,
//     mid: 5,
//     bottom: 2,
//   });
// });

// test("Group - createGroupObject - return a empty base group object", () => {
//   const wrapper = shallowMount(Group);
//   expect(wrapper.vm.createGroupObject()).toStrictEqual(mockGroupData);
// });
//
// test("Group - createGroupObject - return days and offset", () => {
//   const wrapper = shallowMount(Group);
//   const daysData = { days: 31 };
//   expect(wrapper.vm.createGroupObject(daysData)).toStrictEqual({
//     ...mockGroupData,
//     data: { days: 31 },
//   });
// });
//
// test("Group - groupBuilder - function", () => {
//   const wrapper = shallowMount(Group);
//   expect(wrapper.vm.groupBuilder).toStrictEqual(expect.any(Function));
// });
//
// test("Group - groupBuilder - throw missing days data", () => {
//   const wrapper = shallowMount(Group);
//   try {
//     wrapper.vm.groupBuilder();
//   } catch (e) {
//     expect(e).toBe("Missing days data");
//   }
// });
//
// test("Group - groupBuilder - throw missing colCount", () => {
//   const wrapper = shallowMount(Group);
//   try {
//     wrapper.vm.groupBuilder([], "0");
//   } catch (e) {
//     expect(e).toBe("Missing colCount");
//   }
// });
//
// test("Group - groupBuilder - return basic object", () => {
//   const wrapper = shallowMount(Group);
//   const days = { days: [12] };
//   const columns = 13;
//   expect(wrapper.vm.groupBuilder(days, columns)).toEqual({
//     data: days,
//     lines: [],
//     direction: 1,
//   });
// });
//
// test("Group - groupBuilder - return basic object", () => {
//   const wrapper = shallowMount(Group);
//   const days = { days: [12] };
//   const columns = 13;
//   expect(wrapper.vm.groupBuilder(days, columns)).toEqual({
//     data: days,
//     lines: [],
//     direction: 1,
//   });
// });
