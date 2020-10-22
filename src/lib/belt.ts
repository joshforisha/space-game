import { World } from '~/lib/world'
import { v4 as uuid } from 'uuid'

export interface Belt {
  entities: World[];
  id: string;
  kind: 'Belt';
  mass: number;
  name: string;
  type: 'Belt';
}

export type Type = Belt

interface GenerateProps {
  mass: number;
  num: number;
}

export function generateBelt ({ mass, num }: GenerateProps): Belt {
  const entities = [] // FIXME

  return {
    entities,
    id: uuid(),
    kind: 'Belt',
    mass,
    name: `Belt ${num}`,
    type: 'Belt'
  }
}
