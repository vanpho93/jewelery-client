import {Language} from './language';

export class Fees {
  private _id: string;
  private _child_fees: string;
  private _long_description: string;
  private _original_price: string;
  private _promotional_image: string;
  private _short_description: string;
  private _supported_listing_types: string;
  private _display_name: Language;
  private _is_required_for_selling: string;
  private _corresponding_attribute_id: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get child_fees(): string {
    return this._child_fees;
  }

  set child_fees(value: string) {
    this._child_fees = value;
  }

  get long_description(): string {
    return this._long_description;
  }

  set long_description(value: string) {
    this._long_description = value;
  }

  get original_price(): string {
    return this._original_price;
  }

  set original_price(value: string) {
    this._original_price = value;
  }

  get promotional_image(): string {
    return this._promotional_image;
  }

  set promotional_image(value: string) {
    this._promotional_image = value;
  }

  get short_description(): string {
    return this._short_description;
  }

  set short_description(value: string) {
    this._short_description = value;
  }

  get supported_listing_types(): string {
    return this._supported_listing_types;
  }

  set supported_listing_types(value: string) {
    this._supported_listing_types = value;
  }

  get display_name(): Language {
    return this._display_name;
  }

  set display_name(value: Language) {
    this._display_name = value;
  }

  get is_required_for_selling(): string {
    return this._is_required_for_selling;
  }

  set is_required_for_selling(value: string) {
    this._is_required_for_selling = value;
  }

  get corresponding_attribute_id(): string {
    return this._corresponding_attribute_id;
  }

  set corresponding_attribute_id(value: string) {
    this._corresponding_attribute_id = value;
  }
}
