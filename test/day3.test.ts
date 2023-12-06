import { foo } from '../src/day3';

const testData = [
  '467..114..',
  '...*......',
  '..35..633.',
  '......#...',
  '617*......',
  '.....+.58.',
  '..592.....',
  '......755.',
  '...$.*....',
  '.664.598..'
];

describe('Day 2 getGameNumber', () => {
  it('gets single digit number from basic string', () => {
    expect(foo(testData)).toBe(1);
  });
});