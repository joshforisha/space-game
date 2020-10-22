import { Action, ActionType } from '~/lib/actions'
import { StarSystem, generateStarSystem } from '~/lib/star-system'
import { initialize } from '~/lib/array'
import { randomInt } from '~/lib/number'

export interface Model {
  credits: number;
  currentSystem: StarSystem;
  starSystems: StarSystem[];
}

const starSystems = initialize(9, () => generateStarSystem())

export const initialModel: Model = {
  credits: randomInt(0, 999999999),
  currentSystem: starSystems[4],
  starSystems
}

export function update (model: Model, action: Action): Model {
  switch (action.type) {
    case ActionType.SelectSystem:
      return {
        ...model,
        currentSystem: model.starSystems.find(s => s.id === action.id)
      }

    default:
      return model
  }
}
