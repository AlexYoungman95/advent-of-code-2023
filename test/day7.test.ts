import {
  calculateStrength,
  getTotalWinnings,
  calculateStrengthWithJs,
  getTotalWinningsWithJs
} from "../src/day7";
import day7Data from './data/day7Data';

describe('Day 7 calculateStrength', () => {
  it('calculate strength of hands', () => {
    expect(calculateStrength('32T5K')).toBe(0);
    expect(calculateStrength('QQ2TK')).toBe(1);
    expect(calculateStrength('QQJJ3')).toBe(2);
    expect(calculateStrength('KK776')).toBe(2);
    expect(calculateStrength('QQQJT')).toBe(3);
    expect(calculateStrength('QQQAA')).toBe(4);
    expect(calculateStrength('QQQQA')).toBe(5);
    expect(calculateStrength('QQQQQ')).toBe(6);
  });
});

describe('Day 7 getTotalWinnings', () => {
  it('get winnings for small input', () => {
    const input = [
      '32T3K 765',
      'T55J5 684',
      'KK677 28',
      'KTJJT 220',
      'QQQJA 483',
    ]
    expect(getTotalWinnings(input)).toBe(6440);
  });
  it('get winnings for straightforward set of hands', () => {
    const input = [
      '32T3K 1',//1
      '42T3K 0',//0
      'QQQQQ 6',//6
      'T55J5 3',//3
      'KK677 2',//2
      'JTJJT 4',//4
      'QQQQA 5',//5
    ]
    expect(getTotalWinnings(input)).toBe(112);
  });
  it('get winnings for hand with equal strengths', () => {
    const input = [
      '3223K 0',//1
      'Q2Q2K 3',//0
      'JJ2QQ 2',//6
      '656J5 1',//3
      'KK677 4',//2
    ]
    expect(getTotalWinnings(input)).toBe(40);
  });
  it('get winnings for huge data set', () => {
    expect(getTotalWinnings(day7Data)).toBe(248105065);
  });
});

describe('Day 7 calculateStrengthWithJs', () => {
  it('calculate strength of hands', () => {
    expect(calculateStrengthWithJs('32T4K')).toBe(0);
    expect(calculateStrengthWithJs('32TJK')).toBe(1);//32TTK
    expect(calculateStrengthWithJs('QQ2TK')).toBe(1);
    expect(calculateStrengthWithJs('QQ443')).toBe(2);
    expect(calculateStrengthWithJs('KK776')).toBe(2);
    expect(calculateStrengthWithJs('JJ2TK')).toBe(3);//222TK
    expect(calculateStrengthWithJs('J22TK')).toBe(3);//222TK
    expect(calculateStrengthWithJs('QQQKT')).toBe(3);
    expect(calculateStrengthWithJs('QQTTJ')).toBe(4);//QQQTT
    expect(calculateStrengthWithJs('QQQAA')).toBe(4);
    expect(calculateStrengthWithJs('QQQJT')).toBe(5);//QQQQT
    expect(calculateStrengthWithJs('QQJJ3')).toBe(5);//QQQQ3
    expect(calculateStrengthWithJs('JJJQT')).toBe(5);//QQQQT
    expect(calculateStrengthWithJs('QQQQA')).toBe(5);
    expect(calculateStrengthWithJs('QQQJJ')).toBe(6);//QQQQQ
    expect(calculateStrengthWithJs('QQQQQ')).toBe(6);
    expect(calculateStrengthWithJs('JJJJQ')).toBe(6);
  });
});

describe('Day 7 getTotalWinningsWithJs', () => {
  it('get winnings for small input', () => {
    const input = [
      '32T3K 765',
      'T55J5 684',
      'KK677 28',
      'KTJJT 220',
      'QQQJA 483',
    ]
    expect(getTotalWinningsWithJs(input)).toBe(5905);
  });
  it('get winnings for straightforward set of hands', () => {
    const input = [
      '32T3K 1',//1
      '42T3K 0',//0
      'QQQQQ 6',//6
      'T55J5 3',//3
      'KK677 2',//2
      'JTJJT 4',//4
      'QQQQA 5',//5
    ]
    expect(getTotalWinningsWithJs(input)).toBe(111);
  });
  it('get winnings for hand with equal strengths', () => {
    const input = [
      '3223K 0',//1
      'Q2Q2K 3',//0
      'JJ2QQ 2',//6
      '656J5 1',//3
      'KK677 4',//2
    ]
    expect(getTotalWinningsWithJs(input)).toBe(32);
  });
  it('get winnings for huge data set', () => {
    expect(getTotalWinningsWithJs(day7Data)).toBe(249515436);
  });
});