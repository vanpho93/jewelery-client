import {CategoryLevel1Buckets} from "./CategoryLevel1.buckets";

export class CategoryLevel1 {
  private _buckets: CategoryLevel1Buckets[];

  get buckets(): CategoryLevel1Buckets[] {
    return this._buckets;
  }

  set buckets(value: CategoryLevel1Buckets[]) {
    this._buckets = value;
  }
}
