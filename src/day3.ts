const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

export const foo = (arr: string[]) => {
  const finalArray = [];
  const rgx = /[$&+,:;=?@#|'<>^*()%!-]/g;
  for (let i = 0; i < arr.length; i++) {
    const line = arr[i];
    const matches = line.match(/(\d+)/g)
    console.log(matches);
    matches?.forEach(currentNo => {
      const idx = line.indexOf(currentNo);
      const numsCoords = arrayRange(idx ? idx-1 : idx, idx+(currentNo.length),1);
      console.log(idx);
      console.log(numsCoords);
      console.log(line.substring(numsCoords[0], numsCoords[numsCoords.length-1]));

      if (line.substring(numsCoords[0], numsCoords[numsCoords.length]).match(rgx)) {
        finalArray.push(currentNo);
      }
      if (i > 0 && arr[i-1].substring(numsCoords[0], numsCoords[numsCoords.length]).match(rgx)) {
        finalArray.push(currentNo);
      }
      if (i < arr.length-1 && arr[i+1].substring(numsCoords[0], numsCoords[numsCoords.length]).match(rgx)) {
        finalArray.push(currentNo);
      }
    })
  }
  console.log(finalArray);
  
};

export const getCoords = () => {

}