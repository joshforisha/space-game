export function leftPad(str: string, len: number, ch = " "): string {
  str = String(str);
  while (str.length < len) {
    str = ch + str;
  }
  return str;
}
