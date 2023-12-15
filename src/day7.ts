export const calculateStrength = (hand: string) => {
  const counts = {};
  hand.split('').forEach(x => { counts[x] = (counts[x] || 0) + 1; });
  console.log(counts);
  let arr: number[] = Object.values(counts);
  console.log(arr);
  let twoCount = 0;
  arr.forEach(item => { item == 2 && twoCount++ });
  console.log(twoCount);
  return twoCount == 2 ? 2 : Math.max(...arr) - 1;
}