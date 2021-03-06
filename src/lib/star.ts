import { capitalize, letters } from '~/lib/string'
import { randomFloat, randomInt } from '~/lib/number'
import { randomItem, randomWeightedItem } from '~/lib/array'
import { v4 as uuid } from 'uuid'

const solarMass = 1.9887e30

export interface Star {
  id: string;
  kind: 'Star';
  mass: number;
  name: string;
  stellarClass: string;
  subtype: number;
  temperature: number;
  type: string;
}

export type Type = Star

function genClassification (): [string, number, number] {
  return randomWeightedItem([
    [1, ['O', solarMass * randomFloat(16, 300), randomInt(30000, 100000)]],
    [2, ['B', solarMass * randomFloat(3.1, 16), randomInt(10000, 30000)]],
    [4, ['A', solarMass * randomFloat(1.4, 2.1), randomInt(7500, 10000)]],
    [8, ['F', solarMass * randomFloat(1.04, 1.4), randomInt(6000, 7500)]],
    [16, ['G', solarMass * randomFloat(0.8, 1.04), randomInt(5200, 6000)]],
    [32, ['K', solarMass * randomFloat(0.45, 0.8), randomInt(3700, 5200)]],
    [76, ['M', solarMass * randomFloat(0.08, 0.45), randomInt(2400, 3700)]]
  ])
}

function genName (): string {
  const a = randomItem(letters)
  const b = randomItem(letters)

  if (Math.random() < 0.5) {
    return (`${a}${b} ${randomInt(1000, 9999)}`).toUpperCase()
  }

  return capitalize(`${a}${randomInt(100, 999)}${b}`)
}

export function generateStar (): Star {
  const [stellarClass, mass, temperature] = genClassification()
  const subtype = randomInt(0, 9)

  return {
    id: uuid(),
    kind: 'Star',
    mass,
    name: genName(),
    stellarClass,
    subtype,
    temperature,
    type: `${stellarClass}${subtype}V Star`
  }
}
