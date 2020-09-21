import { Atmosphere } from "~/data/world/atmosphere";
import { Gravity } from "~/data/world/gravity";
import { clamp, randomInt } from "~/lib/number";
import { Size, randomSizeUnder } from "~/data/world/size";
import { Temperature } from "~/data/world/temperature";
import { v4 as uuid } from "uuid";
import { weightedItem } from "~/lib/array";

export interface World {
  atmosphere: Atmosphere;
  biomass: number;
  gravity: Gravity;
  hydration: number;
  id: string;
  name: string;
  size: Size;
  temperature: Temperature;
  vegetation: number;
}

function genAtmosphere(size: Size): Atmosphere {
  let items = [];
  switch (size) {
    case Size.Tiny:
      items = [
        [2, Atmosphere.Zero],
        [2, Atmosphere.Thin],
        [1, Atmosphere.Standard],
      ];
      break;
    case Size.Small:
      items = [
        [1, Atmosphere.Zero],
        [2, Atmosphere.Thin],
        [1, Atmosphere.Standard],
      ];
      break;
    case Size.Medium:
      items = [
        [1, Atmosphere.Zero],
        [1, Atmosphere.Thin],
        [2, Atmosphere.Standard],
        [1, Atmosphere.Thick],
      ];
      break;
    case Size.Large:
      items = [
        [1, Atmosphere.Thin],
        [2, Atmosphere.Standard],
        [1, Atmosphere.Thick],
        [1, Atmosphere.Impenetrable],
      ];
      break;
    case Size.Huge:
      items = [
        [1, Atmosphere.Standard],
        [2, Atmosphere.Thick],
        [2, Atmosphere.Impenetrable],
      ];
      break;
  }
  return weightedItem(items);
}

function genBiomass(size: Size, vegetation: number): number {
  switch (size) {
    case Size.Tiny:
      return randomInt(0, vegetation);
    case Size.Small:
      return randomInt(0, vegetation) * 2;
    case Size.Medium:
      return randomInt(0, vegetation) * 4;
    case Size.Large:
      return randomInt(0, vegetation) * 8;
    case Size.Huge:
      return randomInt(0, vegetation) * 16;
  }
}

export function generateWorld(name: string, maxSize?: Size): World {
  const size = randomSizeUnder(maxSize);
  const atmosphere = genAtmosphere(size);
  const gravity = genGravity(size);
  const hydration = genHydration(atmosphere);
  const temperature = genTemperature(atmosphere);
  const vegetation = genVegetation(temperature, hydration);
  const biomass = genBiomass(size, vegetation);

  return {
    atmosphere,
    biomass,
    gravity,
    hydration,
    id: uuid(),
    name,
    size,
    temperature,
    vegetation,
  };
}

function genGravity(size: Size): Gravity {
  let items = [];
  switch (size) {
    case Size.Tiny:
      items = [
        [3, Gravity.Micro],
        [1, Gravity.Low],
        [1, Gravity.Standard],
      ];
      break;
    case Size.Small:
      items = [
        [1, Gravity.Micro],
        [3, Gravity.Low],
        [1, Gravity.Standard],
      ];
      break;
    case Size.Medium:
      items = [
        [1, Gravity.Low],
        [3, Gravity.Standard],
        [1, Gravity.High],
      ];
      break;
    case Size.Large:
      items = [
        [1, Gravity.Standard],
        [3, Gravity.High],
        [1, Gravity.Crushing],
      ];
      break;
    case Size.Huge:
      items = [
        [1, Gravity.Standard],
        [2, Gravity.High],
        [2, Gravity.Crushing],
      ];
      break;
  }
  return weightedItem(items);
}

function genHydration(atmos: Atmosphere): number {
  switch (atmos) {
    case Atmosphere.Zero:
      return 0;
    case Atmosphere.Thin:
      return randomInt(5, 50);
    case Atmosphere.Standard:
      return randomInt(10, 100);
    case Atmosphere.Thick:
      return randomInt(20, 100);
    case Atmosphere.Impenetrable:
      return randomInt(50, 100);
  }
}

function genTemperature(atmosphere: Atmosphere): Temperature {
  switch (atmosphere) {
    case Atmosphere.Zero:
      return Temperature.Frozen;
    case Atmosphere.Thin:
      return weightedItem([
        [2, Temperature.Frozen],
        [3, Temperature.Cold],
      ]);
    case Atmosphere.Standard:
      return weightedItem([
        [2, Temperature.Cold],
        [3, Temperature.Temperate],
        [2, Temperature.Hot],
      ]);
    case Atmosphere.Thick:
      return weightedItem([
        [1, Temperature.Cold],
        [2, Temperature.Temperate],
        [2, Temperature.Hot],
      ]);
    case Atmosphere.Impenetrable:
      return weightedItem([
        [1, Temperature.Temperate],
        [2, Temperature.Hot],
        [2, Temperature.Molten],
      ]);
  }
}

function genVegetation(temp: Temperature, water: number): number {
  let val = 0;
  switch (temp) {
    case Temperature.Frozen:
      val = randomInt(water - 20, water);
      break;
    case Temperature.Cold:
      val = randomInt(water - 10, water + 10);
      break;
    case Temperature.Temperate:
      val = randomInt(water - 10, water + 15);
      break;
    case Temperature.Hot:
      val = randomInt(water - 15, water + 15);
      break;
    case Temperature.Molten:
      val = randomInt(water - 25, water);
      break;
  }
  return clamp(0, 100)(val);
}
