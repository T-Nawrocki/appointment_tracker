// parses a date string and a time string and returns a corresponding Date object
export const parseDateTime = (dateString, timeString) => {
  const dateAsArray = dateString.split('-');
  const timeAsArray = timeString.split(':');
  const combined = dateAsArray.concat(timeAsArray).map(n => parseInt(n));
  return new Date(...combined);
}
