import { Action } from "~/lib/actions";
import { StarSystem } from "~/lib/star-system";
import { randomInt } from "~/lib/number";

export interface Model {
  biomass: number;
  credits: number;
  energy: number;
  metal: number;
  starSystems: StarSystem[];
}

export const initialModel: Model = {
  biomass: randomInt(0, 999999),
  credits: 0,
  energy: randomInt(0, 999999),
  metal: randomInt(0, 999999),
  starSystems: [],
};

export function update(model: Model, action: Action): Model {
  switch (action.type) {
    default:
      return model;
  }
}
