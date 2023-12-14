import {
  calculateRace,
  squashRaceNumbers
} from '../src/day6';

describe('Day 6 calculateRace', () => {
  it('calculate win multiplier with 3 races', () => {
    const input = [
      [7, 15, 30],
      [9, 40, 200]
    ];
    expect(calculateRace(input)).toBe(288);
  });
  it('calculate win multiplier with 3 races', () => {
    const input = [
      [41, 77, 70, 96],
      [249, 1362, 1127, 1011]
    ];
    expect(calculateRace(input)).toBe(771628);
  });
});

describe('Day 6 squashRaceNumbers', () => {
  it('calculate win multiplier with 3 races', () => {
    const input = [
      [7, 15, 30],
      [9, 40, 200]
    ];
    expect(squashRaceNumbers(input)).toBe(71503);
  });
  it('calculate win multiplier with 3 races', () => {
    const input = [
      [41, 77, 70, 96],
      [249, 1362, 1127, 1011]
    ];
    expect(squashRaceNumbers(input)).toBe(27363861);
  });
});