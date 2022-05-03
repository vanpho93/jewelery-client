import {DocCount} from './doc.count';

export class MemberListingSummary {
  private _withdrawn_listings: DocCount;
  private _selling_listings: DocCount;
  private _expired_listings: DocCount;
  private _watchlist: DocCount;

  get withdrawn_listings(): DocCount {
    return this._withdrawn_listings;
  }

  set withdrawn_listings(value: DocCount) {
    this._withdrawn_listings = value;
  }

  get selling_listings(): DocCount {
    return this._selling_listings;
  }

  set selling_listings(value: DocCount) {
    this._selling_listings = value;
  }

  get expired_listings(): DocCount {
    return this._expired_listings;
  }

  set expired_listings(value: DocCount) {
    this._expired_listings = value;
  }

  get watchlist(): DocCount {
    return this._watchlist;
  }

  set watchlist(value: DocCount) {
    this._watchlist = value;
  }
}
