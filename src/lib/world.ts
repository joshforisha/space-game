import { Ring, generateRing } from '~/lib/ring'
import { Size } from '~/lib/world/size'
import { letters } from '~/lib/string'
import { partition, randomInt } from '~/lib/number'
import { randomWeightedItem, shuffle } from '~/lib/array'

const maxSolidMass = 1e26

enum Atmosphere {
  No = 'No',
  Thin = 'Thin',
  Standard = 'Standard',
  Thick = 'Thick'
}

enum CoreMaterial {
  Carbon = 'Carbon',
  Iron = 'Iron',
  Silicate = 'Silicate'
}

interface Core {
  active: boolean;
  material: CoreMaterial;
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
  hydration: number;
  kind: 'World';
  mass: number;
  name: string;
  size: Size;
  subEntity?: boolean;
  surface: Surface;
  type: string;
}

export type Type = World

function classifySize (mass: number): Size {
  if (mass < 1e24) return Size.Tiny
  if (mass < 3e24) return Size.Small
  if (mass < 12e24) return Size.Medium
  if (mass < 48e24) return Size.Large
  return Size.Giant
}

interface ClassifyProps {
  atmosphere: Atmosphere;
  size: Size;
  surface: Surface;
}

function classifyType ({ atmosphere, size, surface }: ClassifyProps): string {
  if (surface === Surface.Gas) {
    if (size === Size.Giant) return 'Gas Giant'
    return `${size} Gas World`
  }

  if (atmosphere === Atmosphere.No) return `${size} Chthonian World`

  if (surface === Surface.Ice) {
    if (size === Size.Giant) return 'Ice Giant'
    return `${size} Ice World`
  }

  if (surface === Surface.Rock) return `${size} Desert World`

  return `${size} ${surface} World`
}

function genAtmosphere (stellarEnergy: number): Atmosphere {
  if (stellarEnergy > 1500) return Atmosphere.No
  return randomWeightedItem([
    [1, Atmosphere.No],
    [5, Atmosphere.Thin],
    [7, Atmosphere.Standard],
    [5, Atmosphere.Thick]
  ])
}

interface HydrationProps {
  atmosphere: Atmosphere;
}

function genHydration ({ atmosphere }: HydrationProps): number {
  switch (atmosphere) {
    case Atmosphere.No: return 0
    case Atmosphere.Thin: return randomInt(0, 20)
    case Atmosphere.Standard: return randomInt(5, 80)
    case Atmosphere.Thick: return randomInt(10, 100)
  }
}

interface SurfaceProps {
  atmosphere: Atmosphere;
  core: Core;
  hydration: number;
  mass: number;
  stellarEnergy: number;
}

function genSurface ({
  core,
  hydration,
  mass,
  stellarEnergy
}: SurfaceProps): Surface {
  if (mass > maxSolidMass) return Surface.Gas

  if (stellarEnergy > 1500) {
    return randomWeightedItem([
      [2, Surface.Lava],
      [5, Surface.Rock]
    ])
  }

  if (stellarEnergy < 300) {
    if (core.active && hydration > 50) return Surface.Ocean
    return randomWeightedItem([
      [1, Surface.Ice],
      [1, Surface.Rock]
    ])
  }

  return randomWeightedItem([
    [Math.floor(hydration / 10), Surface.Ocean],
    [5, Surface.Rock],
    [10, Surface.Terrestrial]
  ])
}

interface GenerateProps {
  mass: number;
  parentName?: string;
  parentOrbit?: number;
  starTemperature: number;
  systemName: string;
  systemOrbit: number;
}

export function generateWorld ({
  mass,
  parentName,
  parentOrbit,
  starTemperature,
  systemName,
  systemOrbit
}: GenerateProps): World {
  const size = classifySize(mass)

  const core = {
    active: Math.random() < 0.5,
    material: randomWeightedItem([
      [2, CoreMaterial.Carbon],
      [2, CoreMaterial.Silicate]
    ])
  }

  const stellarEnergy = starTemperature / (systemOrbit ** 2)
  const atmosphere = genAtmosphere(stellarEnergy)
  const hydration = genHydration({ atmosphere })

  const surface = genSurface({
    atmosphere,
    core,
    hydration,
    mass,
    stellarEnergy
  })

  let entities = []
  let name = ''
  if (typeof parentName === 'string' && typeof parentOrbit === 'number') {
    name = `${parentName}-${parentOrbit}`
  } else {
    name = `${systemName} ${letters[systemOrbit]}`

    const massLimit = 0.8 * Math.min(mass, maxSolidMass)
    let ringCount = 0
    if (randomInt(0, 5) < systemOrbit) {
      entities = shuffle(partition(randomInt(1, systemOrbit)))
        .map((pct, i) => {
          const subMass = pct * massLimit
          if (subMass < 0.5e21) {
            return generateRing({ mass: subMass, num: ringCount++ })
          }

          return generateWorld({
            mass: subMass,
            parentName: name,
            parentOrbit: i + 1,
            starTemperature,
            systemName,
            systemOrbit
          })
        })
    }
  }

  return {
    atmosphere,
    core,
    entities,
    hydration,
    subEntity: typeof parentName === 'string',
    kind: 'World',
    mass,
    name,
    size,
    surface,
    type: classifyType({ atmosphere, size, surface })
  }
}
