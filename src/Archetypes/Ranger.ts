import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _createdInstance = 0;

  constructor(name:string) {
    super(name);

    Ranger._createdInstance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._createdInstance;
  }
}