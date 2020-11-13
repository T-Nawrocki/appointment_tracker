// parses a date string and a time string and returns a corresponding Date object
export const parseDateTime = (dateString, timeString) => {
  const dateAsArray = dateString.split('-');
  const timeAsArray = timeString.split(':');
  const combined = dateAsArray.concat(timeAsArray).map(n => parseInt(n));
  combined[1] -= 1;  // month indexed from 0 but displayed from 1
  return new Date(...combined);
};

// generates array of times (as strings) every half hour from start to end
export const availableTimes = () => {
  const result = [];
  const startTime = 8;
  const endTime = 18;
  
  for (let index = startTime; index < endTime; index++) {
    result.push(`${index}:00`);
    result.push(`${index}:30`);
  }
  
  return result;
};

// adds days to a date 
export const addDays = (startDate, days) => {
  return new Date(startDate.setDate(startDate.getDate() + days));
};

// 00:00 on the Monday following a date
export const findEndOfWeek = date => {
  const daysLeftInWeek = 7 - date.getDay() + 1;  // + 1 because includes date
  const startOfDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  return addDays(startOfDate, daysLeftInWeek);
};
