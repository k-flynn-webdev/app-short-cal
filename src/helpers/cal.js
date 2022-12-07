export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  // The maximum is inclusive and the minimum is inclusive
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

export const createDaysArray = () => {
  let days = [];
  for (let i = 1, max = 31; i <= max; i++) {
    days.push(i);
  }

  return days;
};

export const createMonthObj = () => {
  let days = createDaysArray();
  let month = {};
  days.forEach((day) => {
    month[day] = [];
  });

  return month;
};

export const createMonthDataObj = (input) => {
  // generate all the data from calendars
  return input.value.reduce((acc, currentCal, index) => {
    currentCal.forEach((cal) => {
      for (let i = cal.start, max = cal.end; i <= max; i++) {
        acc[i].push({ id: cal.id, calIndex: index });
      }
    });

    return acc;
  }, createMonthObj());
};

export const createMonthDataIslands = (input) => {
  // generate the islands (start end of each date island)
  let days = createDaysArray();
  let activeStartEndDays = [];
  let dateIslands = [];
  let dayPrevious = false;

  days.forEach((day) => {
    if (dayPrevious !== input.value[day]?.length > 0) {
      const dayNegate = dayPrevious ? 1 : 0;
      activeStartEndDays.push(day - dayNegate);
    }

    dayPrevious = input.value[day]?.length > 0;
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
