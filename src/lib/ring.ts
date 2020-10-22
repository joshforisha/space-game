import { letters } from '~/lib/string'
import { v4 as uuid } from 'uuid'

enum Density {
  Thin = 'Thin',
  Moderate = 'Moderate',
  Thick = 'Thick'
}

export interface Ring {
  density: Density;
  id: string;
  kind: 'Ring';
  name: string;
  parentId: string;
  subEntity: boolean;
  type: string;
}

function classifyDensity (mass: number): Density {
  if (mass < 0.01e21) return Density.Thin
  if (mass < 0.1e21) return Density.Moderate
  return Density.Thick
}

export type Type = Ring

interface GenerateProps {
  mass: number;
  num: number;
  parentId: string;
}

export function generateRing ({ mass, num, parentId }: GenerateProps): Ring {
  const density = classifyDensity(mass)

  return {
    density,
    id: uuid(),
    kind: 'Ring',
    name: `Ring ${letters[num]}`,
    parentId,
    subEntity: true,
    type: `${density} Ring`
  }
}
