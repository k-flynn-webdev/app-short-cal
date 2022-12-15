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

export const createRandomCal = (min, max) => {
  let calData = [];
  const maxEvents = getRandomIntInclusive(min, max);

  for (let i = 0; i < maxEvents; i++) {
    const start = getRandomIntInclusive(1, 31);
    const testBuffer = getRandomIntInclusive(1, 10);
    const endWithBuffer = start + testBuffer < 31 ? start + testBuffer : 31;
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
  for (let i = 1, max = 31; i <= max; i++) {
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

export const returnBlock = (input) => input.end - input.start;

export const returnBlocksTotal = (input) => {
  const blockValue = returnBlock(input);
  return {
    blocks: blockValue < 2 ? 1 : blockValue,
    combined: blockValue < 2,
  };
};

export const returnMarginsTotal = (input, cols, current) => {
  let spaceLeftPre = 0;
  const blockValue = returnBlock(input);

  if (current > 0) {
    spaceLeftPre = cols - (current % cols);

    if (spaceLeftPre < cols) {
      if (blockValue > cols) {
        // item will not fit inline add a space
        spaceLeftPre = 1;
      }

      if (blockValue < spaceLeftPre) {
        // item will fit inline
        spaceLeftPre = 1;
      }
    } else {
      // item will be new line
      spaceLeftPre = 0;
    }
  }

  return {
    margin: {
      pre: spaceLeftPre,
      post: 0,
    },
  };
};

export const createDataIslandsMargin = (input, cols) => {
  const dataIslandsList = [];
  let current = 0;

  // TODO: turn into a reducer later on

  input.forEach((item) => {
    const blocks = returnBlocksTotal(item, cols, current);
    const margins = returnMarginsTotal(item, cols, current);

    const itemObj = {
      ...blocks,
      ...margins,
      data: { ...item },
    };

    current += itemObj.margin.pre + itemObj.blocks + itemObj.margin.post;

    return dataIslandsList.push(itemObj);
  });

  return dataIslandsList;
};
