export const calculateRace = (arr) => {
  let total = 0;
  for (let i = 0; i < arr[0].length; i++) {
    let wins = 0;
    for (let j = 0; j < arr[0][i]; j++) {
      if (j * (arr[0][i] - j) > arr[1][i]) wins++;
    }
    total = total == 0 ? wins : (total * wins);
  }
  return total;
}

export const squashRaceNumbers = (arr) =>
  calculateRace([
    [parseInt(arr[0].join(''))],
    [parseInt(arr[1].join(''))]
  ]);