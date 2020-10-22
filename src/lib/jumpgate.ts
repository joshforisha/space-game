import { letters } from '~/lib/string'
import { randomInt } from '~/lib/number'
import { randomItem } from '~/lib/array'
import { v4 as uuid } from 'uuid'

export interface Jumpgate {
  id: string;
  name: string;
  type: string;
}

export type Type = Jumpgate

interface GenerateProps {
  systemName: string;
}

export function generateJumpgate ({ systemName }: GenerateProps) {
  let generation = randomInt(1, 20).toString()
  if (Math.random() < 0.5) generation += randomItem(letters)

  return {
    id: uuid(),
    name: `${systemName} Jumpgate`,
    type: `Gen ${generation} Jumpgate`
  }
}
