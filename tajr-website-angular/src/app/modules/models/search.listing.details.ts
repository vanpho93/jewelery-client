import {Strings} from './strings';
import {Hits} from './hits';
import {Aggregations} from "./aggregations";

export class SearchListingDetails {
  private _total: string;
  private _from: string;
  private _size: string;
  private _listing_ids: Strings[];
  private _recently_viewed_listing_ids: Strings[];
  private _hits: Hits[];
  private _aggregations: Aggregations;
  private _page_state: string;
  private _full_category_id: string;

  get total(): string {
    return this._total;
  }

  set total(value: string) {
    this._total = value;
  }

  get listing_ids(): Strings[] {
    return this._listing_ids;
  }

  set listing_ids(value: Strings[]) {
    this._listing_ids = value;
  }

  get hits(): Hits[] {
    return this._hits;
  }

  set hits(value: Hits[]) {
    this._hits = value;
  }

  get page_state(): string {
    return this._page_state;
  }

  set page_state(value: string) {
    this._page_state = value;
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

  get full_category_id(): string {
    return this._full_category_id;
  }

  set full_category_id(value: string) {
    this._full_category_id = value;
  }

  get aggregations(): Aggregations {
    return this._aggregations;
  }

  set aggregations(value: Aggregations) {
    this._aggregations = value;
  }

  get recently_viewed_listing_ids(): Strings[] {
    return this._recently_viewed_listing_ids;
  }

  set recently_viewed_listing_ids(value: Strings[]) {
    this._recently_viewed_listing_ids = value;
  }
}

