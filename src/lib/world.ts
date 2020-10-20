import { Ring } from '~/lib/ring'
import { Size } from '~/lib/world/size'
import { letters } from '~/lib/string'
import { randomWeightedItem } from '~/lib/array'

enum Atmosphere {
  None = 'None',
  Thin = 'Thin',
  Standard = 'Standard',
  Thick = 'Thick'
}

enum Core {
  Carbon = 'Carbon',
  Metallic = 'Metallic',
  Silicate = 'Silicate'
}

enum Surface {
  Gas = 'Gas',
  Ice = 'Ice',
  Lava = 'Lava',
  Ocean = 'Ocean',
  Rock = 'Rock',
  Terrestrial = 'Terrestrial'
}

export interface World {
  atmosphere: Atmosphere;
  core: Core;
  entities: (Ring | World)[];
  kind: 'World';
  mass: number;
  name: string;
  size: Size;
  surface: Surface;
  type: string;
}

function classifySize (mass: number): Size {
  if (mass < 1e24) return Size.Tiny
  if (mass < 3e24) return Size.Small
  if (mass < 12e24) return Size.Medium
  if (mass < 48e24) return Size.Large
  return Size.Giant
}

function classifyType (
  size: Size,
  core: Core,
  surface: Surface,
  atmosphere: Atmosphere
): string {
  if (surface === Surface.Gas) {
    if (size === Size.Giant) return 'Gas Giant'
    return `${size} Gas World`
  }

  if (atmosphere === Atmosphere.None) return `${size} Chthonian World`

  if (surface === Surface.Ice) {
    if (size === Size.Giant) return 'Ice Giant'
    return `${size} Ocean World`
  }

  if (surface === Surface.Rock) return `${size} Desert World`

  return `${size} ${surface} World`
}

function genAtmosphere (stellarEnergy: number): Atmosphere {
  if (stellarEnergy > 1500) return Atmosphere.None
  return randomWeightedItem([
    [1, Atmosphere.None],
    [5, Atmosphere.Thin],
    [7, Atmosphere.Standard],
    [5, Atmosphere.Thick]
  ])
}

function genSurface (
  mass: number,
  stellarEnergy: number,
  atmosphere: Atmosphere
): Surface {
  if (mass > 48e24) return Surface.Gas

  if (stellarEnergy > 1500) {
    return randomWeightedItem([
      [2, Surface.Lava],
      [5, Surface.Rock]
    ])
  }

  if (stellarEnergy < 300) return Surface.Ice

  let oceanChance = 0
  if (atmosphere === Atmosphere.Thin) oceanChance = 1
  else if (atmosphere === Atmosphere.Standard) oceanChance = 2
  else if (atmosphere === Atmosphere.Thick) oceanChance = 3

  return randomWeightedItem([
    [oceanChance, Surface.Ocean],
    [5, Surface.Rock],
    [10, Surface.Terrestrial]
  ])
}

interface GenerateProps {
  mass: number;
  orbit: number;
  starTemperature: number;
  systemName: string;
}

export function generateWorld ({
  mass,
  orbit,
  starTemperature,
  systemName
}: GenerateProps): World {
  const size = classifySize(mass)

  const core = randomWeightedItem([
    [2, Core.Carbon],
    [2, Core.Metallic],
    [2, Core.Silicate]
  ])

  const stellarEnergy = starTemperature / (orbit ** 2)
  const atmosphere = genAtmosphere(stellarEnergy)
  const surface = genSurface(mass, stellarEnergy, atmosphere)

  return {
    atmosphere,
    core,
    entities: [],
    kind: 'World',
    mass,
    name: `${systemName} ${letters[orbit]}`,
    size,
    surface,
    type: classifyType(size, core, surface, atmosphere)
  }
}
