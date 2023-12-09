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

export const sumActiveNumbers = (arr: string[]) => extractValidNumbers(arr)
  .map(item => parseInt(item))
  .reduce((partial, current) => partial + current, 0);