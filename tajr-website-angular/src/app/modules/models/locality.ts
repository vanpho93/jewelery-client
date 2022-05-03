import {Language} from './language';
import {District} from './district';

export class Locality {
  private _locality_id: string;
  private _name: Language;
  private _districts: District[];


  get locality_id(): string {
    return this._locality_id;
  }

  set locality_id(value: string) {
    this._locality_id = value;
  }

  get name(): Language {
    return this._name;
  }

  set name(value: Language) {
    this._name = value;
  }


  get districts(): District[] {
    return this._districts;
  }

  set districts(value: District[]) {
    this._districts = value;
  }
}

