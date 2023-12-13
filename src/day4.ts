export const getWinningNumbers = (card: string) => {
  const halves = card.split(' | ');
  const winners = halves[0]
    .substring(halves[0].indexOf(':')+2, halves[0].length)
    .split(' ')
    .filter(num => num);
  const losers = halves[1]
    .split(' ')
    .filter(num => num);
  
  const total = winners.concat(losers)
  return total.filter((item, index) => total.indexOf(item) !== index)
}

export const getPoints = (card: string) => {
  const foo = getWinningNumbers(card)
  if (foo.length == 0) return 0;
  return Math.pow(2, foo.length-1); 
}

export const getPointsTotal = (arr: string[]) => arr.map(item => getPoints(item)).reduce((partial, current) => partial + current, 0);

export const getAllWinningNumbers = (arr: string[]) => {
  const winnerArray = arr.map(card => getWinningNumbers(card).length)
  let numsArray = new Array(arr.length).fill(0);
  for (let idx = 0; idx < winnerArray.length; idx++) {
    numsArray[idx]++;
    for (let i = idx+1; i < winnerArray[idx]+idx+1; i++) {
      numsArray = numberLookAhead(i, numsArray, winnerArray);
    }
  }
  return numsArray.reduce((partial, current) => partial + current, 0);
}

const numberLookAhead = (start, numsArray, winnerArray) => {
  numsArray[start]++;
  for (let j = start+1; j < winnerArray[start]+start+1; j++) {
    numsArray = numberLookAhead(j, numsArray, winnerArray);
  }
  return numsArray;
}