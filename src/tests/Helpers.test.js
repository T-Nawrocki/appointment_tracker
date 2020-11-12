import { parseDateTime } from "../helpers/dateTime";

describe('dateTime helpers', () => {
  it('should be able to turn date string and time string into Date object', () => {
    expect(parseDateTime("2020-12-11", "14:00")).toEqual(new Date(2020, 12, 11, 14, 0));
  })
});
