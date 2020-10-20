import { letters } from '~/lib/string'

enum Density {
  Thin = 'Thin',
  Moderate = 'Moderate',
  Thick = 'Thick'
}

export interface Ring {
  density: Density;
  kind: 'Ring';
  name: string;
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
}

export function generateRing ({ mass, num }: GenerateProps): Ring {
  const density = classifyDensity(mass)

  return {
    density,
    kind: 'Ring',
    name: `Ring ${letters[num]}`,
    subEntity: true,
    type: `${density} Ring`
  }
}
