const limits = {
  red: 12,
  green: 13,
  blue: 14
};

export const getValForColour = (str: string, c: string) => {
  const rgx = new RegExp(`([\\d.]+) *${c}`);
  return str.match(rgx) ? parseInt(str.match(rgx)[1]) : 0;
};

export const getColourVals = (str: string) => ({
  red: getValForColour(str, 'red'),
  green: getValForColour(str, 'green'),
  blue: getValForColour(str, 'blue'),
});

export const getGameNumber = (str: string) => parseInt(str.substring(5, str.indexOf(':')));

export const getPossibleSum = (arr: string[]) => arr.map(line => getPossible(line)).reduce((partial, current) => partial + current, 0);

export const getPossible = (str: string) => {
  let pass = true;
  str.split(';').forEach(block => {
    const val = getColourVals(block);
    if (val.red > limits.red || val.green > limits.green || val.blue > limits.blue) {
      pass = false;
    }
  });
  
  return pass ? getGameNumber(str) : 0;
};

export const getLowestVals = (str: string) => str
  .split(';')
  .map(block => getColourVals(block))
  .reduce((acc, current) => ({
    red: current.red > acc.red ? current.red : acc.red,
    green: current.green > acc.green ? current.green : acc.green,
    blue: current.blue > acc.blue ? current.blue : acc.blue
  }), { red: 0, green: 0, blue: 0});

  export const getPowers = (arr: string[]) =>
    arr.map(line => {
      const vals = getLowestVals(line);
      return vals.red*vals.green*vals.blue;
    }).reduce((partial, current) => partial + current, 0);