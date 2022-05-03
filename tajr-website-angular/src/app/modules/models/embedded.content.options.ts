export class EmbeddedContentOptions {
  private _id: string;
  private _is_required_for_selling: string;
  private _supported_listing_types: string[];

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get is_required_for_selling(): string {
    return this._is_required_for_selling;
  }

  set is_required_for_selling(value: string) {
    this._is_required_for_selling = value;
  }

  get supported_listing_types(): string[] {
    return this._supported_listing_types;
  }

  set supported_listing_types(value: string[]) {
    this._supported_listing_types = value;
  }
}
