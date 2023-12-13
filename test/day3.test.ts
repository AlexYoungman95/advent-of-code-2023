import {
  extractValidNumbers,
  sumActiveNumbers,
  getValue,
  findGears
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

describe('Day 3 extractValidNumbers', () => {
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

describe('Day 3 getValue', () => {
  it('gets number from first index', () => {
    expect(getValue('..476...', 2)).toStrictEqual(476);
  });
  it('gets number from last index', () => {
    expect(getValue('..23...', 3)).toStrictEqual(23);
  });
  it('gets number from mid index', () => {
    expect(getValue('..476...', 3)).toStrictEqual(476);
  });
  it('gets single number from index', () => {
    expect(getValue('.9...', 1)).toStrictEqual(9);
  });
});

describe('Day 3 findGears', () => {
  it('gets single number from small set', () => {
    const smallTestData = [
      '467.114...',
      '...*......'
    ];
    expect(findGears(smallTestData)).toStrictEqual(53238);
  });
  it('gets array of numbers from moderate set', () => {
    expect(findGears(testData)).toStrictEqual(467835);
  });
  it('gets array of numbers from huge set', () => {
    expect(findGears(day3DataSmall)).toStrictEqual(2161828);
  });
  it('gets array of numbers from huge set', () => {
    expect(findGears(day3Data)).toStrictEqual(73646890);
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
