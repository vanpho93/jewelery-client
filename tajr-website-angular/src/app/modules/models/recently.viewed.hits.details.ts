import {Hits} from "./hits";
import {RecentlyViewedModel} from "./recently.viewed.model";

export class RecentlyViewedHitsDetails {
  private _listing: Hits;
  private _recently_viewed: RecentlyViewedModel;

  get listing(): Hits {
    return this._listing;
  }

  set listing(value: Hits) {
    this._listing = value;
  }

  get recently_viewed(): RecentlyViewedModel {
    return this._recently_viewed;
  }

  set recently_viewed(value: RecentlyViewedModel) {
    this._recently_viewed = value;
  }
}
