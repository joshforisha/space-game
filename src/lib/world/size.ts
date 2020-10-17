import { randomItem } from '~/lib/array'

export enum Size {
  Tiny = 'Tiny',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  Huge = 'Huge',
}

export function randomSizeUnder (maxSize: Size | undefined): Size {
  switch (maxSize) {
    case Size.Tiny:
      return randomItem([Size.Tiny])
    case Size.Small:
      return randomItem([Size.Tiny, Size.Small])
    case Size.Medium:
      return randomItem([Size.Tiny, Size.Small, Size.Medium])
    case Size.Large:
      return randomItem([Size.Tiny, Size.Small, Size.Medium, Size.Large])
    default:
      return randomItem(Object.values(Size))
  }
}
