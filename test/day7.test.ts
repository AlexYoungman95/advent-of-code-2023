import {
  calculateStrength
} from "../src/day7";

describe('Day 7 calculateStrength', () => {
  it('calculate strength of hands', () => {
    expect(calculateStrength('32T5K')).toBe(0);
    expect(calculateStrength('32T3K')).toBe(1);
    expect(calculateStrength('KTJJT')).toBe(2);
    expect(calculateStrength('KK677')).toBe(2);
    expect(calculateStrength('T55J5')).toBe(3);
    expect(calculateStrength('QQQJA')).toBe(3);
  });
});