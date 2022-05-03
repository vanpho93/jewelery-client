import {Tiers} from './tiers';

export class SuccessFeeTiers {
  private _id: string;
  private _supported_listing_types: string[];
  private _is_required_for_selling: string;
  private _tiers: Tiers [];

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get supported_listing_types(): string[] {
    return this._supported_listing_types;
  }

  set supported_listing_types(value: string[]) {
    this._supported_listing_types = value;
  }

  get is_required_for_selling(): string {
    return this._is_required_for_selling;
  }

  set is_required_for_selling(value: string) {
    this._is_required_for_selling = value;
  }

  get tiers(): Tiers[] {
    return this._tiers;
  }

  set tiers(value: Tiers[]) {
    this._tiers = value;
  }
}
