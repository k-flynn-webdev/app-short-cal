const MIN_CALS = 1;
const MIN_EVENTS = 5;

const MAX_CALS = 4;
const MAX_EVENTS = 5;

const MAX_DATE = 32;

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
  if (blocks === undefined) throw "Error: Missing blocks";
  if (cols === undefined) throw "Error: Missing current count";
  if (current === undefined) throw "Error: Missing columns";

  if (!current) return 0;

  let marginPre = cols - (current % cols);

  if (marginPre < cols) {
    // console.log(marginPre);
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

export const getCurrentLine = (current, cols) => {
  return Math.floor(current / cols);
};

export const createBlockObj = (item, cols, current, idx) => {
  const blocks = blockTotal(item);
  const margin = marginTotal(blocks, cols, current);

  return {
    idx,
    current,
    data: { ...item },
    margin: margin,
    block: blocks,
    type: "single",
    counts: { top: 0, mid: 0, bottom: 0 },
  };
};

export const updateBlockObjCounts = (blockObj, cols, current) => {
  if (blockObj === undefined) throw "Error: Missing block object";
  if (current === undefined) throw "Error: Missing current count";
  if (cols === undefined) throw "Error: Missing columns";

  const currentWithMargin = current + blockObj.margin;
  const line = getCurrentLine(currentWithMargin, cols);
  const endPoint = currentWithMargin + blockObj.block;

  const keys = ["top", "mid", "bottom"];

  keys.forEach((item, idx) => {
    const min = idx === 0 ? currentWithMargin : (line + idx) * cols;
    const max = (line + idx + 1) * cols;

    if (endPoint > min) {
      blockObj.counts[item] = max - min;

      if (endPoint < max) blockObj.counts[item] = endPoint - min;
    }
  });

  // ensure all rows add up
  blockObj.block = keys.reduce((acc, key) => {
    acc += blockObj.counts[key];
    return acc;
  }, 0);

  return blockObj;
};

export const updateBlockObjType = (blockObj) => {
  if (blockObj.block === 1) {
    blockObj.type = "single";
  } else {
    if (blockObj.counts.top > 0) {
      blockObj.type = "small";
    }
    if (blockObj.counts.mid > 0) {
      blockObj.type = "medium";
    }
    if (blockObj.counts.bottom > 0) {
      blockObj.type = "large";
    }
  }

  return blockObj;
};

export const createBlockList = (input, cols) => {
  return input.reduce(
    (acc, item, idx) => {
      const blockObj = createBlockObj(item, cols, acc.current, idx);
      updateBlockObjCounts(blockObj, cols, acc.current);
      updateBlockObjType(blockObj);

      acc.data.push(blockObj);

      acc.current += blockObj.margin + blockObj.block;

      return acc;
    },
    { current: 0, data: [], month: "Dec" }
  );
};
