import {Language} from './language';

export class Bool {
  private _display_name: Language;
  private _group_name: string;
  private _bool_attribute_id: string;
  private _value: string;


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

  get bool_attribute_id(): string {
    return this._bool_attribute_id;
  }

  set bool_attribute_id(value: string) {
    this._bool_attribute_id = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }
}
