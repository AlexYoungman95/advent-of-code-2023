import {
  getGameNumber,
  getColourVals,
  getPossible,
  getPossibleSum,
  getLowestVals,
  getPowers
} from "../src/day2";
import day2Data from './data/day2Data';

describe('Day 2 getGameNumber', () => {
  it('gets single digit number from basic string', () => {
    expect(getGameNumber('Game 1: 3 blue')).toBe(1);
  });
  it('gets two digit number from basic string', () => {
    expect(getGameNumber('Game 23: 3 blue, 4 red, 1 green;')).toBe(23);
  });
  it('gets three digit number from basic string', () => {
    expect(getGameNumber('Game 100: 3 blue, 4 red, 1 green;')).toBe(100);
  });
});

describe('Day 2 getColourVals', () => {
  it('gets single digit number from basic string', () => {
    expect(getColourVals('1 blue')).toStrictEqual({
      red: 0, green: 0, blue: 1
    });
  });
  it('gets 2 single digit numbers from basic string', () => {
    expect(getColourVals('3 red, 1 blue')).toStrictEqual({
      red: 3, green: 0, blue: 1
    });
  });
  it('gets 3 multiple digit numbers from basic string', () => {
    expect(getColourVals('12 red, 14 green, 6 blue')).toStrictEqual({
      red: 12, green: 14, blue: 6
    });
  });
});

describe('Day 2 getPossible', () => {
  it('gets game value 1 for a possible solution', () => {
    expect(getPossible('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')).toBe(1);
  });
  it('gets game value >1 for a possible solution on the boundary', () => {
    expect(getPossible('Game 12: 4 blue, 12 red; 1 red, 2 green, 6 blue; 13 green')).toBe(12);
  });
  it('gets 0 for a impossible solution', () => {
    expect(getPossible('Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red')).toBe(0);
  });
});

describe('Day 2 getPossibleSum', () => {
  it('get sum for only possible lines', () => {
    const lines = [
      'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
      'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
      'Game 3: 8 green, 6 blue, 3 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
    ]
    expect(getPossibleSum(lines)).toBe(6);
  });
  it('get sum for mixed possible lines', () => {
    const lines = [
      'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
      'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
      'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
      'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
      'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
    ]
    expect(getPossibleSum(lines)).toBe(8);
  });
  it('get sum for test data set', () => {
    expect(getPossibleSum(day2Data)).toBe(1734);
  });
});

describe('Day 2 getLowestVals', () => {
  it('gets lowest vals for single digits', () => {
    expect(getLowestVals('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')).toStrictEqual({
      red: 4, green: 2, blue: 6
    });
  });
  it('gets lowest vals for standard input', () => {
    expect(getLowestVals('Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red')).toStrictEqual({
      red: 20, green: 13, blue: 6
    });
  });
});

describe('Day 2 getPowers', () => {
  it('gets lowest vals for single digits', () => {
    const lines = [
      'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
      'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
      'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
      'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
      'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
    ]
    expect(getPowers(lines)).toBe(2286);
  });
  it('gets lowest vals for single digits', () => {
    expect(getPowers(day2Data)).toBe(70387);
  });
});