export function leftPad(str: string, len: number, ch = " "): string {
  str = String(str);
  while (str.length < len) {
    str = ch + str;
  }
  return str;
}

export const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
