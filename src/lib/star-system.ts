import { World, generateWorld } from '~/lib/world'
import { initialize } from '~/lib/array'
import { letters } from '~/lib/string'
import { randomInt } from '~/lib/number'
import { v4 as uuid } from 'uuid'

export interface StarSystem {
  id: string;
  name: string;
  worlds: World[];
}

export function generateStarSystem (): StarSystem {
  const name = 'TEST' // FIXME
  const worlds = initialize(randomInt(5, 10), (i) =>
    generateWorld(`${name} ${letters[i]}`)
  )
  return { id: uuid(), name, worlds }
}
