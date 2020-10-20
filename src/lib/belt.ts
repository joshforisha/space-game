import { World } from '~/lib/world'

export interface Belt {
  entities: World[];
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
    kind: 'Belt',
    mass,
    name: `Belt ${num}`,
    type: 'Belt'
  }
}
