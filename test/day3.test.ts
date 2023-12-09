import {
  extractValidNumbers,
  sumActiveNumbers
} from '../src/day3';
import day3DataSmall from './data/day3DataSmall';
import day3Data from './data/day3Data';

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

describe('Day 3 getGameNumber', () => {
  it('gets single number from small set', () => {
    const smallTestData = [
      '467..114..',
      '...*......',
    ]
    expect(extractValidNumbers(smallTestData)).toStrictEqual(['467']);
  });
  it('gets array of numbers from moderate set', () => {
    const expected = [
      '467', '35', '633',
      '617', '592', '755',
      '664', '598'
    ];
    expect(extractValidNumbers(testData)).toStrictEqual(expected);
  });
});

describe('Day 3 sumActiveNumbers', () => {
  it('sum of numbers from small set', () => {
    const smallTestData = [
      '467..114?.',
      '...*......',
    ]
    expect(sumActiveNumbers(smallTestData)).toStrictEqual(581);
  });
  it('sum of numbers from moderate set', () => {
    expect(sumActiveNumbers(testData)).toStrictEqual(4361);
  });
  it('sum of numbers from large set', () => {
    expect(sumActiveNumbers(day3DataSmall)).toStrictEqual(16587);
  });
  it('sum of numbers from huge set', () => {
    expect(sumActiveNumbers(day3Data)).toStrictEqual(531932);
  });
});
