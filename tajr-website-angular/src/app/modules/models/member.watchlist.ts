import {Strings} from './strings';
import {MemberWatchlistHit} from './member.watchlist.hit';
import {ListingDetails} from './listingDetails';

export class MemberWatchlist {
  private _total: string;
  private _from: string;
  private _size: string;
  private _listing_ids: Strings[];
  private _watchlist_ids: Strings[];
  private _hits: MemberWatchlistHit[];

  get total(): string {
    return this._total;
  }

  set total(value: string) {
    this._total = value;
  }

  get from(): string {
    return this._from;
  }

  set from(value: string) {
    this._from = value;
  }

  get size(): string {
    return this._size;
  }

  set size(value: string) {
    this._size = value;
  }

  get listing_ids(): Strings[] {
    return this._listing_ids;
  }

  set listing_ids(value: Strings[]) {
    this._listing_ids = value;
  }

  get watchlist_ids(): Strings[] {
    return this._watchlist_ids;
  }

  set watchlist_ids(value: Strings[]) {
    this._watchlist_ids = value;
  }

  get hits(): MemberWatchlistHit[] {
    return this._hits;
  }

  set hits(value: MemberWatchlistHit[]) {
    this._hits = value;
  }
}

