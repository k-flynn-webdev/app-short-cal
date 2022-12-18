const MIN_CALS = 1;
const MIN_EVENTS = 5;

const MAX_CALS = 4;
const MAX_EVENTS = 5;

const MAX_DATE = 99;

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const createRandomCal = (min, max) => {
  let calData = [];
  const maxEvents = getRandomIntInclusive(min, max);

  for (let i = 0; i < maxEvents; i++) {
    const start = getRandomIntInclusive(1, MAX_DATE);
    const testBuffer = getRandomIntInclusive(1, 10);
    const endWithBuffer =
      start + testBuffer < MAX_DATE ? start + testBuffer : MAX_DATE;
    const end = getRandomIntInclusive(start, endWithBuffer);

    calData.push({
      start,
      end,
      id: i,
    });
  }
  return calData;
};

export const createRandomCals = () => {
  let calData = [];
  const max = getRandomIntInclusive(MIN_CALS, MAX_CALS);

  for (let i = 0; i < max; i++) {
    calData.push(createRandomCal(MIN_EVENTS, MAX_EVENTS));
  }

  return calData;
};

export const createDatesArray = () => {
  let days = [];
  for (let i = 1, max = MAX_DATE; i <= max; i++) {
    days.push(i);
  }

  return days;
};

export const createMonthObj = () => {
  const days = createDatesArray();

  return days.reduce((acc, current) => {
    acc[current] = [];
    return acc;
  }, {});
};

export const createDataObj = (input) => {
  // generate all the data from calendars
  if (!input) throw "Error: No data provided";

  return input.reduce((acc, currentCal, index) => {
    currentCal.forEach((cal) => {
      for (let i = cal.start, max = cal.end; i <= max; i++) {
        acc[i].push({ id: cal.id, calIndex: index });
      }
    });

    return acc;
  }, createMonthObj());
};

export const createDataIslands = (input) => {
  // generate the islands (start end of each date island)
  if (!input) throw "Error: No data provided";

  const days = createDatesArray();
  let activeStartEndDays = [];
  let dateIslands = [];
  let dayPrevious = false;

  days.forEach((day) => {
    if (dayPrevious !== input[day]?.length > 0) {
      const dayNegate = dayPrevious ? 1 : 0;
      activeStartEndDays.push(day - dayNegate);
    }

    dayPrevious = input[day]?.length > 0;
  });
  if (dayPrevious) activeStartEndDays.push(days.length);

  for (let i = 0, max = activeStartEndDays.length; i < max; i += 2) {
    dateIslands.push({
      start: activeStartEndDays[i],
      end: activeStartEndDays[i + 1],
    });
  }

  return dateIslands;
};

export const blockTotal = (input) => {
  const blockValue = input.end - input.start;
  return blockValue + 1;
};

export const marginTotal = (blocks, cols, current) => {
  if (!blocks || !cols || current === null || current === undefined)
    throw "Error: Missing data";
  if (!current) return 0;

  let marginPre = cols - (current % cols);

  if (marginPre < cols) {
    // item will not fit inline add a space
    if (blocks > cols) return 1;

    // item will fit inline
    if (blocks < marginPre) return 1;
  } else {
    // item will be new line
    return 0;
  }

  return marginPre;
};

export const createBlockObj = (item, cols, current, idx) => {
  const blocks = blockTotal(item);
  const margin = marginTotal(blocks, cols, current);

  return {
    idx,
    data: { ...item },
    margin: margin,
    block: blocks,
    isTall: blocks > cols,
    top: { block: 0, content: "", class: [] },
    mid: { block: 0, content: "", class: [] },
    bottom: { block: 0, content: "", class: [] },
    current,
  };
};

export const createDataIslandsMarginObj = (item, cols, current, idx) => {
  const blockObj = createBlockObj(item, cols, current, idx);

  const currentLine = Math.floor((current + blockObj.margin) / cols);
  const line0Point = current + blockObj.margin;
  const line01Point = Math.floor((currentLine + 1) * cols);
  const line02Point = Math.floor((currentLine + 2) * cols);
  const line03Point = Math.floor((currentLine + 3) * cols);
  const endPoint = current + blockObj.margin + blockObj.block;

  [
    { key: "top", min: line0Point, max: line01Point },
    { key: "mid", min: line01Point, max: line02Point },
    { key: "bottom", min: line02Point, max: line03Point },
  ].forEach((item) => {
    const testMin = endPoint - item.min;
    const testMax = endPoint - item.max;

    if (testMin > 0) {
      blockObj[item.key].block = Math.min(testMin, cols);
    }
    if (testMax > 0) {
      blockObj[item.key].block = item.max - item.min;
    }
  });

  return blockObj;
};

export const updateContentObj = (input) => {
  if (input.bottom.block > 0) {
    input.top.content = [input.data.start, "", ""];
    input.bottom.content = ["", "", input.data.end];

    input.top.class = ["top", `width-${input.top.block}`, "is-tall"];
    input.mid.class = ["mid", `width-${input.mid.block}`];
    input.bottom.class = ["bottom", `width-${input.bottom.block}`, "is-tall"];
    return;
  }

  if (input.mid.block > 0) {
    input.top.content = [input.data.start, "", ""];
    input.mid.content = ["", "", input.data.end];

    input.top.class = ["top", `width-${input.top.block}`, "is-tall"];
    input.mid.class = ["mid", `width-${input.mid.block}`, "is-tall"];
    return;
  }

  if (input.top.block > 1) {
    input.top.content = [input.data.start, "", input.data.end];
    input.top.class = ["top", `width-${input.top.block}`];
  } else {
    input.top.content = ["", input.data.start, ""];
    input.top.class = ["top", `width-${input.top.block}`];
  }
};

export const createDataIslandsMargin = (input, cols) => {
  const dataIslandsList = [];
  let current = 0;

  // TODO: turn into a reducer later on

  input.forEach((item, idx) => {
    const itemObj = createDataIslandsMarginObj(item, cols, current, idx);
    updateContentObj(itemObj);

    current += itemObj.margin + itemObj.block;

    return dataIslandsList.push(itemObj);
  });

  return dataIslandsList;
};
