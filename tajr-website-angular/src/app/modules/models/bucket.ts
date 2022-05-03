import {Language} from "./language";

export class Bucket {
  private _doc_count: string;
  private _id: string;
  private _name: Language;

  get doc_count(): string {
    return this._doc_count;
  }

  set doc_count(value: string) {
    this._doc_count = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): Language {
    return this._name;
  }

  set name(value: Language) {
    this._name = value;
  }
}
