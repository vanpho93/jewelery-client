export class Tiers {
  private _fixed_fee: string;
  private _id: string;
  private _minimum_tier_price: string;
  private _percentage_fee: string;
  private _maximum_success_fee: string;

  get fixed_fee(): string {
    return this._fixed_fee;
  }

  set fixed_fee(value: string) {
    this._fixed_fee = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get minimum_tier_price(): string {
    return this._minimum_tier_price;
  }

  set minimum_tier_price(value: string) {
    this._minimum_tier_price = value;
  }

  get percentage_fee(): string {
    return this._percentage_fee;
  }

  set percentage_fee(value: string) {
    this._percentage_fee = value;
  }

  get maximum_success_fee(): string {
    return this._maximum_success_fee;
  }

  set maximum_success_fee(value: string) {
    this._maximum_success_fee = value;
  }
}
