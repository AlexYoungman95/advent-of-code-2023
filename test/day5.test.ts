import {
  getLinkedValue,
  formatMapInput,
  transformNumbers,
  getSmallestOutput,
  // getSeedRanges,
  getSmallestOutputWithRange
} from "../src/day5";
import day5Data from './data/day5Data';

const exampleMediumData = [
  'seeds: 79 14 55 13',
  '',
  'seed-to-soil map:',
  '50 98 2',
  '52 50 48',
  '',
  'soil-to-fertilizer map:',
  '0 15 37',
  '37 52 2',
  '39 0 15',
  '',
  'fertilizer-to-water map:',
  '49 53 8',
  '0 11 42',
  '42 0 7',
  '57 7 4',
  '',
  'water-to-light map:',
  '88 18 7',
  '18 25 70',
  '',
  'light-to-temperature map:',
  '45 77 23',
  '81 45 19',
  '68 64 13',
  '',
  'temperature-to-humidity map:',
  '0 69 1',
  '1 0 69',
  '',
  'humidity-to-location map:',
  '60 56 37',
  '56 93 4',
];

describe('Day 5 getLinkedValue', () => {
  it('gets basic number conversions', () => {
    const input = [
      [0, 15, 37],
      [37, 52, 2],
      [39, 0, 15]
    ];
    expect(getLinkedValue(input, 5)).toBe(44);
    expect(getLinkedValue(input, 20)).toBe(5);
    expect(getLinkedValue(input, 53)).toBe(38);
    expect(getLinkedValue(input, 55)).toBe(55);
    expect(getLinkedValue(input, 0)).toBe(39);
    expect(getLinkedValue(input, 52)).toBe(37);
  });
});

describe('Day 5 formatMapInput', () => {
  it('converts a medium set', () => {
    const expected = [
      { name: 'seeds', arrs: [79, 14, 55, 13] },
      { name: "seed-to-soil", arrs: [[50, 98, 2], [52, 50, 48]] },
      { name: "soil-to-fertilizer", arrs: [[0, 15, 37], [37, 52, 2], [39, 0, 15]] },
      { name: "fertilizer-to-water", arrs: [[49, 53, 8], [0, 11, 42], [42, 0, 7], [57, 7, 4]] },
      { name: "water-to-light", arrs: [[88, 18, 7], [18, 25, 70]] },
      { name: "light-to-temperature", arrs: [[45, 77, 23], [81, 45, 19], [68, 64, 13]] },
      { name: "temperature-to-humidity", arrs: [[0, 69, 1], [1, 0, 69]] },
      { name: "humidity-to-location", arrs: [[60, 56, 37], [56, 93, 4]] }
    ];
    expect(formatMapInput(exampleMediumData)).toStrictEqual(expected);
  });
});

describe('Day 5 transformNumbers', () => {
  it('transform a medium set of seeds', () => {
    const input = [
      { name: 'seeds', arrs: [79, 14, 55, 13] },
      { name: "seed-to-soil", arrs: [[50, 98, 2], [52, 50, 48]] },
      { name: "soil-to-fertilizer", arrs: [[0, 15, 37], [37, 52, 2], [39, 0, 15]] },
      { name: "fertilizer-to-water", arrs: [[49, 53, 8], [0, 11, 42], [42, 0, 7], [57, 7, 4]] },
      { name: "water-to-light", arrs: [[88, 18, 7], [18, 25, 70]] },
      { name: "light-to-temperature", arrs: [[45, 77, 23], [81, 45, 19], [68, 64, 13]] },
      { name: "temperature-to-humidity", arrs: [[0, 69, 1], [1, 0, 69]] },
      { name: "humidity-to-location", arrs: [[60, 56, 37], [56, 93, 4]] }
    ];
    expect(transformNumbers(input)).toStrictEqual([82, 43, 86, 35]);
  });
});

describe('Day 5 getSmallestOutput', () => {
  it('extracts output from medium set', () => {
    expect(getSmallestOutput(exampleMediumData)).toStrictEqual(35);
  });
  it('extracts output from huge set', () => {
    expect(getSmallestOutput(day5Data)).toStrictEqual(51580674);
  });
});

describe('Day 5 getSmallestOutputWithRange', () => {
  it('extracts output from medium set', () => {
    expect(getSmallestOutputWithRange(exampleMediumData)).toStrictEqual(46);
  });
  it('extracts output from huge set', () => {
    expect(getSmallestOutputWithRange(day5Data)).toStrictEqual(99751240);
  });
});
