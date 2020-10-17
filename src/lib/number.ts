export function clamp (min: number, max: number): (x: number) => number {
  return (x: number) => Math.max(min, Math.min(max, x))
}

export function randomFloat (min: number, max: number): number {
  return Math.random() * (max - min) + min
}

export function randomInt (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function withCommas (num: number): string {
  return num.toString().replace(/(\d)(?=(\d{3})+$)/g, (c) => `${c},`)
}

export function withPrefix (num: number): [number, string] {
  if (num >= 1e10) return [Math.floor(num / 1e9), 'G']
  if (num >= 1e7) return [Math.floor(num / 1e6), 'M']
  if (num >= 1e4) return [Math.floor(num / 1e3), 'k']
  return [num, '']
}
