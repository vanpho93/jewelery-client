import {Language} from './language';

export class District {
  private _district_id: string;
  private _name: Language;

  get district_id(): string {
    return this._district_id;
  }

  set district_id(value: string) {
    this._district_id = value;
  }

  get name(): Language {
    return this._name;
  }

  set name(value: Language) {
    this._name = value;
  }
}

