import {Language} from './language';

export class SubCategories {
  private _id: string;
  private _has_classifieds: string;
  private _is_leaf: string;
  private _name: Language;
  private _subcategories : SubCategories[];

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get has_classifieds(): string {
    return this._has_classifieds;
  }

  set has_classifieds(value: string) {
    this._has_classifieds = value;
  }

  get is_leaf(): string {
    return this._is_leaf;
  }

  set is_leaf(value: string) {
    this._is_leaf = value;
  }

  get name(): Language {
    return this._name;
  }

  set name(value: Language) {
    this._name = value;
  }

  get subcategories(): SubCategories[] {
    return this._subcategories;
  }

  set subcategories(value: SubCategories[]) {
    this._subcategories = value;
  }
}
