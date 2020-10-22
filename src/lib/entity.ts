import { Belt } from '~/lib/belt'
import { Jumpgate } from '~/lib/jumpgate'
import { Ring } from '~/lib/ring'
import { Star } from '~/lib/star'
import { World } from '~/lib/world'

export type Entity = Belt | Jumpgate | Ring | Star | World
export type Type = Entity
