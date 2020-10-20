import { initialize, shuffle } from '~/lib/array'

export function clamp (min: number, max: number): (x: number) => number {
  return (x: number) => Math.max(min, Math.min(max, x))
}

export function partition (count: number): number[] {
  let remains = 1.0
  return shuffle(initialize(count, () => {
    const x = randomFloat(0, remains)
    remains -= x
    return x
  }))
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
  if (num >= 1e31) return [Math.floor(num / 1e30), 'Q']
  if (num >= 1e28) return [Math.floor(num / 1e27), 'R']
  if (num >= 1e25) return [Math.floor(num / 1e24), 'Y']
  if (num >= 1e22) return [Math.floor(num / 1e21), 'Z']
  if (num >= 1e19) return [Math.floor(num / 1e18), 'E']
  if (num >= 1e16) return [Math.floor(num / 1e15), 'P']
  if (num >= 1e13) return [Math.floor(num / 1e12), 'T']
  if (num >= 1e10) return [Math.floor(num / 1e9), 'G']
  if (num >= 1e7) return [Math.floor(num / 1e6), 'M']
  if (num >= 1e4) return [Math.floor(num / 1e3), 'k']
  return [num, '']
}
