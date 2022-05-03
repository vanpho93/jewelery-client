import {LocalityBuckets} from "./locality.buckets";
import {CategoryLevel1} from "./CategoryLevel1";

export class Aggregations {
  private _locality: LocalityBuckets;
  private _CategoryLevel1: CategoryLevel1;

  get locality(): LocalityBuckets {
    return this._locality;
  }

  set locality(value: LocalityBuckets) {
    this._locality = value;
  }

  get CategoryLevel1(): CategoryLevel1 {
    return this._CategoryLevel1;
  }

  set CategoryLevel1(value: CategoryLevel1) {
    this._CategoryLevel1 = value;
  }
}
