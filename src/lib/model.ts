import { Action, ActionType } from '~/lib/actions'
import { StarSystem, generateStarSystem } from '~/lib/star-system'
import { initialize } from '~/lib/array'
import { randomInt } from '~/lib/number'

export interface Model {
  biomass: number;
  credits: number;
  currentSystem: StarSystem;
  energy: number;
  metal: number;
  starSystems: StarSystem[];
}

const starSystems = initialize(9, () => generateStarSystem())

export const initialModel: Model = {
  biomass: randomInt(0, 999999),
  credits: 0,
  currentSystem: starSystems[4],
  energy: randomInt(0, 999999),
  metal: randomInt(0, 999999),
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
