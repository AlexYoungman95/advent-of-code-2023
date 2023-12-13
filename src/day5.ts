export const getLinkedValue = (src: number[][], val: number) => {
  for (let i = 0; i < src.length; i++) {
    if (val >= src[i][1] && val < (src[i][1] + src[i][2])) {
      return (val + (src[i][0] - src[i][1]));
    }
  }
  return val;
}

export const formatMapInput = (src: string[]) => {
  const newArr = [{
    name: 'seeds',
    arrs: src[0].substring(7).split(' ').map(item => parseInt(item))
  }];
  for (let i = 2; i < src.length; i++) {
    const element = src[i];
    if (element.includes('map')) {
      let j = i + 1;
      const obj = {
        name: element.substring(0, element.indexOf(' ')),
        arrs: []
      };
      while (src[j] !== '' && src[j] !== undefined) {
        obj.arrs.push(src[j].split(' ').map(x => parseInt(x)))
        j++;
      };
      i = j;
      newArr.push(obj);
    }
  }
  return newArr;
}

export const formatMapInputWithRange = (src: string[]) => {
  const newArr = [{
    name: 'seeds',
    arrs: getSeedRanges(src[0].substring(7).split(' ').map(item => parseInt(item)))
  }];
  for (let i = 2; i < src.length; i++) {
    const element = src[i];
    if (element.includes('map')) {
      let j = i + 1;
      const obj = {
        name: element.substring(0, element.indexOf(' ')),
        arrs: []
      };
      while (src[j] !== '' && src[j] !== undefined) {
        obj.arrs.push(src[j].split(' ').map(x => parseInt(x)))
        j++;
      };
      i = j;
      newArr.push(obj);
    }
  }
  return newArr;
}


export const transformNumbers = (arr) => {
  const newSeeds = [];
  arr[0].arrs.forEach(seed => {
    let seedVal = seed;
    for (let i = 1; i < arr.length; i++) {
      seedVal = getLinkedValue(arr[i].arrs, seedVal);
    }
    newSeeds.push(seedVal);
  });
  return newSeeds;
}

export const getSmallestOutput = (arr) => Math.min(...transformNumbers(formatMapInput(arr)));
export const getSmallestOutputWithRange = (arr) => Math.min(...transformNumbers(formatMapInputWithRange(arr)));

export const getSeedRanges = (arr) => {
  let range = [];
  for (let i = 0; i < arr.length; i+=2) {
    range.push([])
    const num1 = arr[i];
    const num2 = arr[i+1];
    const idx = i ? i / 2 : 0;
    for (let j = num1; j < (num1+num2); j++) {
      range[idx].push(j);
    }
    console.log(range[idx].length)
    // const newRange = Array.from({length:(num2)},(v,k)=>k+num1)
    // range = range.concat(newRange)
    // range = [...range, ...newRange]
  }
  return range;
}