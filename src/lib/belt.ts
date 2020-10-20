import { World } from '~/lib/world'

export interface Belt {
  entities: World[];
  kind: 'Belt';
  mass: number;
}

interface GenerateProps {
  mass: number;
}

export function generateBelt ({ mass }: GenerateProps): Belt {
  const entities = [] // FIXME

  return {
    entities,
    kind: 'Belt',
    mass
  }
}
