import { Belt } from '~/lib/belt'
import { GasGiant } from '~/lib/gas-giant'
import { Ring } from '~/lib/ring'
import { Star } from '~/lib/star'
import { World } from '~/lib/world'

export type Entity = Belt | GasGiant | Ring | Star | World

export function entityType (entity: Entity): string {
  switch (entity.kind) {
    case 'Belt': return 'Belt'
    case 'GasGiant': return 'Gas Giant'
    case 'Ring': return 'Ring'
    case 'Star': return `${(entity as Star).stellarClass} Star`
    case 'World': return `${(entity as World).size} World`
    default: return 'Unknown'
  }
}
