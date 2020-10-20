import { randomFloat, randomInt } from '~/lib/number'

export function initialize<T> (
  length: number,
  value: T | ((i: number) => T)
): Array<T> {
  const array = []
  for (let i = 0; i < length; i++) {
    if (value instanceof Function) array.push(value(i))
    else array.push(value)
  }
  return array
}

export function randomItem<T> (xs: T[]): T {
  return xs[randomInt(0, xs.length - 1)]
}

export function randomWeightedItem<T> (xs: [number, T][]): T {
  const total = xs.reduce((total, [val]) => total + val, 0)
  const num = randomFloat(0, total - 1)
  let y = 0
  for (let i = 0; i < xs.length; i++) {
    if (num < y + xs[i][0]) return xs[i][1]
    y += xs[i][0]
  }
  return xs[xs.length - 1][1]
}

export function shuffle<T> (xs: T[]): T[] {
  const ys = [...xs]
  for (let i = xs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = ys[i]
    ys[i] = ys[j]
    ys[j] = temp
  }
  return ys
}
