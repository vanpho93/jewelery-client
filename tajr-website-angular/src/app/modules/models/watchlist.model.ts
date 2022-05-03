export class WatchlistModel {
  private _watchlist_id: string;
  private _listing_id: string;
  private _dc: string;
  private _member_id: string;
  private _dd: string;

  get watchlist_id(): string {
    return this._watchlist_id;
  }

  set watchlist_id(value: string) {
    this._watchlist_id = value;
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
