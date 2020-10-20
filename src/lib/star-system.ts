import { Belt, generateBelt } from '~/lib/belt'
import { Star, generateStar } from '~/lib/star'
import { World, generateWorld } from '~/lib/world'
import { initialize, randomWeightedItem } from '~/lib/array'
import { letters } from '~/lib/string'
import { partition, randomInt } from '~/lib/number'
import { v4 as uuid } from 'uuid'

export interface StarSystem {
  entities: (Belt | Star | World)[];
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

  let systemName
  const stars = initialize(numStars, (i) => {
    const star = generateStar()
    if (i === 0) systemName = star.name
    star.name = `${systemName} ${letters[i]}`
    return star
  })

  const hottestStarTemperature = stars
    .reduce((t, s) => Math.max(s.temperature, t), 0)
  const entitiesMass = 0.01 * stars.reduce((m, s) => m + s.mass, 0)

  const numEntities = randomInt(6, 12)
  let numBelts = 0
  const entities = [
    ...stars,
    ...partition(numEntities)
      .map((massPercentage, i) => {
        const mass = entitiesMass * massPercentage
        if (mass < 0.5e21) return generateBelt({ mass, num: numBelts++ })

        return generateWorld({
          mass,
          starTemperature: hottestStarTemperature,
          systemName,
          systemOrbit: i + stars.length
        })
      })
  ]

  return { entities, id: uuid(), name: systemName, stars }
}
