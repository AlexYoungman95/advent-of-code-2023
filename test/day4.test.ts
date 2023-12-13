import {
  getWinningNumbers,
  getPoints,
  getPointsTotal,
  getAllWinningNumbers
} from '../src/day4';
import day4Data from './data/day4Data';

describe('Day 4 getWinningNumbers', () => {
  it('get 1 points from card', () => {
    expect(getWinningNumbers('Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83')).toStrictEqual(["84"]);
  });
  it('get 2 points from card', () => {
    expect(getWinningNumbers('Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19')).toStrictEqual(["61", "32"]);
  });
  it('get 8 points from card', () => {
    expect(getWinningNumbers('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53')).toStrictEqual(["83", "86", "17", "48"]);
  });
  it('get 0 points from card', () => {
    expect(getWinningNumbers('Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36')).toStrictEqual([]);
  });
});

describe('Day 4 getPoints', () => {
  it('get 1 points from card', () => {
    expect(getPoints('Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83')).toStrictEqual(1);
  });
  it('get 2 points from card', () => {
    expect(getPoints('Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19')).toStrictEqual(2);
  });
  it('get 8 points from card', () => {
    expect(getPoints('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53')).toStrictEqual(8);
  });
  it('get 0 points from card', () => {
    expect(getPoints('Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36')).toStrictEqual(0);
  });
});

describe('Day 4 getPoints', () => {
  it('get 1 points from card', () => {
    expect(getPoints('Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83')).toStrictEqual(1);
  });
  it('get 2 points from card', () => {
    expect(getPoints('Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19')).toStrictEqual(2);
  });
  it('get 8 points from card', () => {
    expect(getPoints('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53')).toStrictEqual(8);
  });
  it('get 0 points from card', () => {
    expect(getPoints('Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36')).toStrictEqual(0);
  });
});

describe('Day 4 getPointsTotal', () => {
  it('get points total from card set', () => {
    const data = [
    'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
    'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
    'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1',
    'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
    'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
    'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11',
    ]
    expect(getPointsTotal(data)).toStrictEqual(13);
  });
  it('get points total from huge card set', () => {
    expect(getPointsTotal(day4Data)).toStrictEqual(25231);
  });
});

describe('Day 4 getAllWinningNumbers', () => {
  it('get points total from card set', () => {
    const data = [
    'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
    'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
    'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1',
    'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
    'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
    'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11',
    ]
    expect(getAllWinningNumbers(data)).toStrictEqual(30);
  });
  it('get points total from huge card set', () => {
    expect(getAllWinningNumbers(day4Data)).toStrictEqual(9721255);
  });
});