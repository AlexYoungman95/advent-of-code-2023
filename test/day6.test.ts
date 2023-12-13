import {
  calculateRace
} from '../src/day6';

describe('Day 6 calculateRace', () => {
  it('gets basic number conversions', () => {
    const input = [
      [7, 15, 30],
      [9, 40, 200]
    ];
    expect(calculateRace(input)).toBe(44);
  });
});