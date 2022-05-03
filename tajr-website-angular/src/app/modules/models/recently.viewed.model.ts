export class RecentlyViewedModel {
  private _recently_viewed_listing_id: string;
  private _listing_id: string;
  private _dc: string;
  private _member_id: string;
  private _dd: string;

  get recently_viewed_listing_id(): string {
    return this._recently_viewed_listing_id;
  }

  set recently_viewed_listing_id(value: string) {
    this._recently_viewed_listing_id = value;
  }

  get listing_id(): string {
    return this._listing_id;
  }

  set listing_id(value: string) {
    this._listing_id = value;
  }

  get dc(): string {
    return this._dc;
  }

  set dc(value: string) {
    this._dc = value;
  }

  get member_id(): string {
    return this._member_id;
  }

  set member_id(value: string) {
    this._member_id = value;
  }

  get dd(): string {
    return this._dd;
  }

  set dd(value: string) {
    this._dd = value;
  }
}
