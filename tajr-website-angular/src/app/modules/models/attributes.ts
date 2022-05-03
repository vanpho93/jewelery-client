import {Language} from './language';
import {Options} from './options';

export class Attributes {
  private _id: string;
  private _type: string;
  private _default_value: string;
  private _display_max_count: string;
  private _display_name: Language;
  private _options: Options[];
  private _group_name: string;
  private _is_required_for_selling: string;
  private _max_length: string;
  private _supported_listing_types: string[];
  private _is_automatically_created: string;
  private _generate_date_option: string;
  private _lower: string;
  private _upper: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get default_value(): string {
    return this._default_value;
  }

  set default_value(value: string) {
    this._default_value = value;
  }

  get display_max_count(): string {
    return this._display_max_count;
  }

  set display_max_count(value: string) {
    this._display_max_count = value;
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

  get group_name(): string {
    return this._group_name;
  }

  set group_name(value: string) {
    this._group_name = value;
  }

  get is_required_for_selling(): string {
    return this._is_required_for_selling;
  }

  set is_required_for_selling(value: string) {
    this._is_required_for_selling = value;
  }

  get max_length(): string {
    return this._max_length;
  }

  set max_length(value: string) {
    this._max_length = value;
  }

  get supported_listing_types(): string[] {
    return this._supported_listing_types;
  }

  set supported_listing_types(value: string[]) {
    this._supported_listing_types = value;
  }

  get is_automatically_created(): string {
    return this._is_automatically_created;
  }

  set is_automatically_created(value: string) {
    this._is_automatically_created = value;
  }

  get generate_date_option(): string {
    return this._generate_date_option;
  }

  set generate_date_option(value: string) {
    this._generate_date_option = value;
  }

  get lower(): string {
    return this._lower;
  }

  set lower(value: string) {
    this._lower = value;
  }

  get upper(): string {
    return this._upper;
  }

  set upper(value: string) {
    this._upper = value;
  }
}
