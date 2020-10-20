import { Belt, generateBelt } from '~/lib/belt'
import { Star, generateStar } from '~/lib/star'
import { World, generateWorld } from '~/lib/world'
import { initialize, randomWeightedItem } from '~/lib/array'
import { partition, randomInt } from '~/lib/number'
import { v4 as uuid } from 'uuid'

export interface StarSystem {
  entities: (Belt | World)[];
  id: string;
  name: string;
  stars: Star[];
}

export function generateStarSystem (): StarSystem {
  const numStars = randomWeightedItem([
    [100, 1],
    [10, 2],
    [1, 3]
  ])

  const stars = initialize(numStars, () => generateStar())
  const hottestStarTemperature = stars
    .reduce((t, s) => Math.max(s.temperature, t), 0)
  const entitiesMass = 0.01 * stars.reduce((m, s) => m + s.mass, 0)
  console.log(`Entities mass: ${entitiesMass}`)

  const systemName = 'TEST' // FIXME
  const numEntities = randomInt(6, 12)
  const entities = partition(numEntities)
    .map((massPercentage, i) => {
      const mass = entitiesMass * massPercentage
      if (mass < 0.5e21) return generateBelt({ mass })

      return generateWorld({
        mass,
        orbit: i + 1,
        starTemperature: hottestStarTemperature,
        systemName
      })
    })

  return { entities, id: uuid(), name: systemName, stars }
}
