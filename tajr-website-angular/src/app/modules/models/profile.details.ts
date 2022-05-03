import {District} from './district';
import {Locality} from './locality';

export class ProfileDetails {
  private _username: string;
  private _mobile_number: string;
  private _member_since: string;
  private _member_id: string;
  private _first_name: string;
  private _last_name: string;
  private _locality: Locality;
  private _district: District;

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get mobile_number(): string {
    return this._mobile_number;
  }

  set mobile_number(value: string) {
    this._mobile_number = value;
  }

  get member_since(): string {
    return this._member_since;
  }

  set member_since(value: string) {
    this._member_since = value;
  }

  get member_id(): string {
    return this._member_id;
  }

  set member_id(value: string) {
    this._member_id = value;
  }

  get first_name(): string {
    return this._first_name;
  }

  set first_name(value: string) {
    this._first_name = value;
  }

  get last_name(): string {
    return this._last_name;
  }

  set last_name(value: string) {
    this._last_name = value;
  }


  get locality(): Locality {
    return this._locality;
  }

  set locality(value: Locality) {
    this._locality = value;
  }

  get district(): District {
    return this._district;
  }

  set district(value: District) {
    this._district = value;
  }
}
