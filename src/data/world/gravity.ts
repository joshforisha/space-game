import { randomFloat } from "~/lib/number";

export enum Gravity {
  Micro = "Micro",
  Low = "Low",
  Standard = "Standard",
  High = "High",
  Crushing = "Crushing",
}

export function gravityAmount(level: Gravity): number {
  switch (level) {
    case Gravity.Micro:
      return randomFloat(0.0, 0.19);
    case Gravity.Low:
      return randomFloat(0.2, 0.39);
    case Gravity.Standard:
      return randomFloat(0.4, 1.0);
    case Gravity.High:
      return randomFloat(1.01, 1.19);
    case Gravity.Crushing:
      return randomFloat(1.2, 2.0);
  }
}
