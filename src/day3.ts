export const extractValidNumbers = (arr: string[]) => {
  const finalArray = [];
  const rgx = /[$&+,:;=?@#|'<>^*()%!\/-]/g;
  arr.forEach((line, i) => {
    const regexp = /(\d+)/g;
    let myArray;
    while ((myArray = regexp.exec(line)) !== null) {
      const startIndex = myArray.index-1;
      const endIndex = startIndex + myArray[0].length + 2;
      const searchData = line.substring(startIndex, endIndex)
        + ((i > 0) ? arr[i-1].substring(startIndex, endIndex) : '')
        + ((i < arr.length-1) ? arr[i+1].substring(startIndex, endIndex) : '');
      if (searchData.match(rgx)) {
        finalArray.push(myArray[0]);
      }
    }
  })
  return finalArray;
};

export const findGears = (arr: string[]) => {
  let finalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    const line = arr[i];
    const regexp = /\*/g;
    let myArray;

    while ((myArray = regexp.exec(line)) !== null) {
      const counts = [-1, 0, 1];
      let gearNums = [];
      counts.forEach(idx => {
        if (arr[i+idx]) {
          counts.forEach(idy => {
            const extractedValue = getValue(arr[i+idx], myArray.index+idy)
            if (extractedValue !== null) gearNums.push(extractedValue);
          })
        }
      });
      gearNums = [...new Set(gearNums)];
      if (gearNums.length == 2) {
        finalSum = finalSum + (gearNums[0] * gearNums[1]);
      }
    }
  }
  return finalSum;
};

export const getValue = (line: string, x) => {
  if (/(\d+)/g.test(line.charAt(x))) {
    let start = x;
    let end = x;
    while (start >= 0 && /(\d+)/g.test(line.charAt(start))) {
      start--;
    }

    while (end < line.length && /(\d+)/g.test(line.charAt(end))) {
      end++;
    }
    return parseInt(line.substring(start+1, end));
  } 
  return null;
}

export const sumActiveNumbers = (arr: string[]) => extractValidNumbers(arr)
  .map(item => parseInt(item))
  .reduce((partial, current) => partial + current, 0);