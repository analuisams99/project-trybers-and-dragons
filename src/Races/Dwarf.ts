import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _createdInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Dwarf._createdInstance += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdInstance;
  }
}