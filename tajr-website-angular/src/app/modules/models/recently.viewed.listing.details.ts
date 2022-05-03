import {Strings} from './strings';
import {RecentlyViewedHitsDetails} from "./recently.viewed.hits.details";

export class RecentlyViewedListingDetails {
  private _total: string;
  private _from: string;
  private _size: string;
  private _listing_ids: Strings[];
  private _recently_viewed_listing_ids: Strings[];
  private _hits: RecentlyViewedHitsDetails[];

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

  get recently_viewed_listing_ids(): Strings[] {
    return this._recently_viewed_listing_ids;
  }

  set recently_viewed_listing_ids(value: Strings[]) {
    this._recently_viewed_listing_ids = value;
  }

  get hits(): RecentlyViewedHitsDetails[] {
    return this._hits;
  }

  set hits(value: RecentlyViewedHitsDetails[]) {
    this._hits = value;
  }
}

