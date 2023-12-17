const strengthObj = {
  'A': 12,
  'K': 11,
  'Q': 10,
  'J': 9,
  'T': 8,
  '9': 7,
  '8': 6,
  '7': 5,
  '6': 4,
  '5': 3,
  '4': 2,
  '3': 1,
  '2': 0
};

const strengthsWithJs = {
  ...strengthObj,
  'T': 9,
  '9': 8,
  '8': 7,
  '7': 6,
  '6': 5,
  '5': 4,
  '4': 3,
  '3': 2,
  '2': 1,
  'J': 0
}

export const calculateStrength = (hand: string) => {
  const counts = {};
  hand.split('').forEach(x => { counts[x] = (counts[x] || 0) + 1; });
  const arr: number[] = Object.values(counts);
  if (arr.every(num => num === 1)) return 0;
  if (arr.some(num => num === 5)) return 6;
  if (arr.some(num => num === 4)) return 5;
  if (arr.some(num => num === 3) && arr.some(num => num === 2)) return 4;
  if (arr.some(num => num === 3)) return 3;
  return arr
    .map(item => item == 2 && 1 )
    .reduce((partial, current) => partial + current, 0);
}

export const getTotalWinnings = (arr) => {
  const newArr = arr.sort((a,b) => {
    const handA = a.substring(0, 5);
    const handB = b.substring(0, 5);
    const strengthA = calculateStrength(handA);
    const strengthB = calculateStrength(handB);
    if (strengthA !== strengthB) return strengthA-strengthB;
    return compareHandsHighCard(handA, handB, strengthObj);
  });
  return newArr
    .map((hand, idx) => parseInt(hand.substring(6))*(idx+1))
    .reduce((partial, current) => partial + current, 0);
}


const compareHandsHighCard = (handA: string, handB: string, strengths) => {
  const a = strengths[handA.charAt(0)];
  const b = strengths[handB.charAt(0)];
  if (a === b) return compareHandsHighCard(handA.substring(1), handB.substring(1), strengths);
  return a-b;
}

export const calculateStrengthWithJs = (hand: string) => {
  const counts = {};
  hand.split('').forEach(x => { counts[x] = (counts[x] || 0) + 1; });

  const jCount = counts['J'] ? counts['J'] : 0;
  const arr: number[] = Object.values(counts);
  if (arr.every(num => num === 1) && jCount) return 1;
  if (arr.every(num => num === 1)) return 0;

  if (arr.some(num => num === 5)) return 6;
  
  if (arr.some(num => num === 4) && jCount) return 6;
  if (arr.some(num => num === 4)) return 5;

  if (arr.some(num => num === 3) && arr.some(num => num === 2) && jCount) return 6;
  if (arr.some(num => num === 3) && arr.some(num => num === 2)) return 4;

  if (arr.some(num => num === 3) && jCount === 3) return 5;
  if (arr.some(num => num === 3)) return 3 + (jCount ? 2 : 0);

  const twoCount = arr
    .map(item => item == 2 && 1 )
    .reduce((partial, current) => partial + current, 0);
  if (twoCount == 2 && jCount == 2) {
    return 5;
  } else if (twoCount == 2 && jCount == 1) {
    return 4;
  } else if (twoCount == 1 && jCount) {
    return 3;
  }
  return twoCount;
}

export const getTotalWinningsWithJs = (arr) => {
  const newArr = arr.sort((a,b) => {
    const handA = a.substring(0, 5);
    const handB = b.substring(0, 5);
    const strengthA = calculateStrengthWithJs(handA);
    const strengthB = calculateStrengthWithJs(handB);
    if (strengthA !== strengthB) return strengthA-strengthB;
    return compareHandsHighCard(handA, handB, strengthsWithJs);
  });
  return newArr
    .map((hand, idx) => parseInt(hand.substring(6))*(idx+1))
    .reduce((partial, current) => partial + current, 0);
}