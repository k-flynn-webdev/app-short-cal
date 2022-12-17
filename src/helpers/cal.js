export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const MIN_CALS = 1;
const MIN_EVENTS = 5;

const MAX_CALS = 4;
const MAX_EVENTS = 5;

const MAX_DATE = 99;

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
  let days = createDatesArray();
  let month = {};
  days.forEach((day) => {
    month[day] = [];
  });

  return month;
};

export const createDataObj = (input) => {
  // generate all the data from calendars
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
  let days = createDatesArray();
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
  const blockValue = input.end + 1 - input.start;
  return blockValue > 0 ? blockValue : 0;
};

export const marginTotal = (blocks, cols, current) => {
  let spaceLeftPre = 0;

  if (current > 0) {
    spaceLeftPre = cols - (current % cols);

    if (spaceLeftPre < cols) {
      // item will not fit inline add a space
      if (blocks > cols) return 1;

      // item will fit inline
      if (blocks < spaceLeftPre) return 1;
    } else {
      // item will be new line
      return 0;
    }
  }

  return spaceLeftPre;
};

export const createDataIslandsMarginObj = (item, cols, current, idx) => {
  const blockObj = {
    idx,
    data: { ...item },
    margin: 0,
    block: 0,
    top: { block: 0 },
    mid: { block: 0 },
    bottom: { block: 0 },
    current,
  };

  blockObj.block = blockTotal(item);
  blockObj.margin = marginTotal(blockObj.block, cols, current);

  const currentLine = Math.floor((current + blockObj.margin) / cols);
  const line01Point = Math.floor((currentLine + 1) * cols);
  const line02Point = Math.floor((currentLine + 2) * cols);
  const endPoint = current + blockObj.margin + blockObj.block;

  [
    { value: current + blockObj.margin, key: "top" },
    { value: line01Point, key: "mid" },
    { value: line02Point, key: "bottom" },
  ].forEach((item) => {
    const test = endPoint - item.value;
    if (test > 0) {
      blockObj[item.key].block = test > cols ? cols : test;
    }
  });

  return blockObj;
};

export const createDataIslandsMargin = (input, cols) => {
  const dataIslandsList = [];
  let current = 0;

  // TODO: turn into a reducer later on

  input.forEach((item, idx) => {
    const itemObj = createDataIslandsMarginObj(item, cols, current, idx);

    current += itemObj.margin + itemObj.block;

    return dataIslandsList.push(itemObj);
  });

  return dataIslandsList;
};
