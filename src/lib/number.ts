export function clamp(min: number, max: number): (x: number) => number {
  return (x: number) => Math.max(min, Math.min(max, x));
}

export function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
