import {Language} from './language';
import {Options} from './options';

export class PickupOptions {
  private _id: string;
  private _group_name: string;
  private _display_name: Language;
  private _options: Options[];
  private _is_required_for_selling: string;
  private _supported_listing_types: string[];

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get group_name(): string {
    return this._group_name;
  }

  set group_name(value: string) {
    this._group_name = value;
  }

  get display_name(): Language {
    return this._display_name;
  }

  set display_name(value: Language) {
    this._display_name = value;
  }

  get options(): Options[] {
    return this._options;
  }

  set options(value: Options[]) {
    this._options = value;
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
