import {
  reverse,
  convertNumber,
  parseLine,
  parseArray
} from "../src/day1";
import day1Data from './data/day1Data';

describe('Day 1 reverse', () => {
  it('reverse of one number is the same', () => {
    expect(reverse('1')).toEqual('1');
  });
  it('reverse of one character is the same', () => {
    expect(reverse('a')).toEqual('a');
  });
  it('reverse of two character', () => {
    expect(reverse('ab')).toEqual('ba');
  });
  it('reverse of random string', () => {
    expect(reverse('pqr3stu8vwx')).toEqual('xwv8uts3rqp');
  });
});

describe('Day 1 convertNumber', () => {
  it('convert number of one integer is the same', () => {
    expect(convertNumber('1')).toEqual('1');
  });
  it('convert number of one word is converted', () => {
    expect(convertNumber('one')).toEqual('1');
  });
  it('convert number of one word is converted', () => {
    expect(convertNumber('nine')).toEqual('9');
  });
});

describe('Day 1 parseLine', () => {
  it('input with 1 number alone returns double of that number', () => {
    expect(parseLine('1')).toEqual(11);
  });
  it('input with 1 number in a string returns double of that number', () => {
    expect(parseLine('aa3a')).toEqual(33);
  });
  it('input with 1 number at start and 1 number at end', () => {
    expect(parseLine('1abc2')).toEqual(12);
  });
  it('input with 2 numbers mixed with characters', () => {
    expect(parseLine('pqr3stu8vwx')).toEqual(38);
  });
  it('input with more than 2 numbers and characters', () => {
    expect(parseLine('a1b2c3d4e5f')).toEqual(15);
  });
  it('input with 1 number within characters', () => {
    expect(parseLine('treb7uchet')).toEqual(77);
  });
  it('input with 1 number within two number words', () => {
    expect(parseLine('two1nine')).toEqual(29);
  });
  it('input with 3 number words', () => {
    expect(parseLine('eightwothree')).toEqual(83);
  });
});

describe('Day 1 parseArray', () => {
  it('Parse small array of numbers', () => {
    const smallData = [
      '1abc2',
      'pqr3stu8vwx',
      'a1b2c3d4e5f',
      'treb7uchet'
    ]
    expect(parseArray(smallData)).toEqual(142);
  })
  it('Parse large array of numbers', () => {
    expect(parseArray(day1Data)).toEqual(53592);
  })
});