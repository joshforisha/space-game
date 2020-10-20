import { Ring } from '~/lib/ring'
import { World } from '~/lib/world'

export interface GasGiant {
  entities: (Ring | World)[];
  kind: 'GasGiant';
  mass: number;
}

export function generateGasGiant (mass: number): GasGiant {
  const entities = [] // FIXME

  return {
    entities,
    kind: 'GasGiant',
    mass
  }
}
