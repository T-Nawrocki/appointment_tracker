import { parseDateTime, availableTimes } from "../helpers";

describe('date and time helpers', () => {
  it('should be able to turn date string and time string into Date object', () => {
    expect(parseDateTime("2020-12-11", "14:00")).toEqual(new Date(2020, 11, 11, 14, 0));
  });

  it('should generate available times every half hour between 8am and 6pm', () => {
    expect(availableTimes().length).toBe(20);
    expect(availableTimes()[0]).toBe("8:00");
    expect(availableTimes()[availableTimes().length - 1]).toBe("17:30");
  });
});
