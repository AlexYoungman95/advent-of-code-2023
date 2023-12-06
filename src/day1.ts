const numberWords = ['one','two','three','four','five','six','seven','eight','nine'];
const regex = /[1-9]|one|two|three|four|five|six|seven|eight|nine/
const revRegex = /[1-9]|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/
export const reverse = (str: string) => str.split("").reverse().join("");
export const convertNumber = (num: string) => (num.length == 1 ? num : `${numberWords.indexOf(num)+1}`);

export const parseLine = (inputStr: string) => parseInt(`${convertNumber(regex.exec(inputStr)[0])}${convertNumber(reverse(revRegex.exec(reverse(inputStr))[0]))}`);
export const parseArray = (inputArray : string[]) => (
  inputArray
    .map(str => parseLine(str))
    .reduce((partial, current) => partial + current, 0));