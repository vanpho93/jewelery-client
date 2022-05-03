import {Language} from './language';
import {District} from './district';

export class ClosestDistrict {
  private _localityId: string;
  private _name: Language;
  private _districts: District;
  private _value: string;
  private _localityMess: string;

  get localityId(): string {
    return this._localityId;
  }

  set localityId(value: string) {
    this._localityId = value;
  }

  get name(): Language {
    return this._name;
  }

  set name(value: Language) {
    this._name = value;
  }

  get districts(): District {
    return this._districts;
  }

  set districts(value: District) {
    this._districts = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get localityMess(): string {
    return this._localityMess;
  }

  set localityMess(value: string) {
    this._localityMess = value;
  }
}

