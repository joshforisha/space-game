export function capitalize (str: string): string {
  if (str.length < 1) return str
  if (str.length === 1) return str.toUpperCase()
  return `${str[0].toUpperCase()}${str.substring(1)}`
}

export function leftPad (str: string, len: number, ch = ' '): string {
  str = String(str)
  while (str.length < len) {
    str = ch + str
  }
  return str
}

export function plural (
  num: number,
  str: string,
  set = (s: string) => `${s}s`
): string {
  if (num === 1) return `${num} ${str}`
  return `${num} ${set(str)}`
}

export const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
