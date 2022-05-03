import {Language} from './language';

export class Dates {
  private _display_name: Language;
  private _group_name: string;
  private _option_display: string;
  private _option_id: string;
  private _date_attribute_id: string;
  private _value: string[];


  get display_name(): Language {
    return this._display_name;
  }

  set display_name(value: Language) {
    this._display_name = value;
  }

  get group_name(): string {
    return this._group_name;
  }

  set group_name(value: string) {
    this._group_name = value;
  }

  get option_display(): string {
    return this._option_display;
  }

  set option_display(value: string) {
    this._option_display = value;
  }

  get option_id(): string {
    return this._option_id;
  }

  set option_id(value: string) {
    this._option_id = value;
  }

  get date_attribute_id(): string {
    return this._date_attribute_id;
  }

  set date_attribute_id(value: string) {
    this._date_attribute_id = value;
  }

  get value(): string[] {
    return this._value;
  }

  set value(value: string[]) {
    this._value = value;
  }
}
