import {Hits} from "./hits";
import {WatchlistModel} from "./watchlist.model";

export class WatchlistHitsDetails {
  private _watchlist: WatchlistModel;
  private _listing: Hits;

  get watchlist(): WatchlistModel {
    return this._watchlist;
  }

  set watchlist(value: WatchlistModel) {
    this._watchlist = value;
  }

  get listing(): Hits {
    return this._listing;
  }

  set listing(value: Hits) {
    this._listing = value;
  }
}
