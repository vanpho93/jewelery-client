import {Language} from "./language";

export class ReportReasons {
  private _subject_id: string;
  private _description: Language;
  private _supported_listing_types: string[];

  get subject_id(): string {
    return this._subject_id;
  }

  set subject_id(value: string) {
    this._subject_id = value;
  }

  get description(): Language {
    return this._description;
  }

  set description(value: Language) {
    this._description = value;
  }

  get supported_listing_types(): string[] {
    return this._supported_listing_types;
  }

  set supported_listing_types(value: string[]) {
    this._supported_listing_types = value;
  }
}
