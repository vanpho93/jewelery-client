import {Language} from './language';

export class Options {
  private _value: string;
  private _display: Language;
  private _id: string;
  private _option: Language;

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get display(): Language {
    return this._display;
  }

  set display(value: Language) {
    this._display = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get option(): Language {
    return this._option;
  }

  set option(value: Language) {
    this._option = value;
  }
}
