import {CategoryLevel3Buckets} from "./CategoryLevel3.buckets";

export class CategoryLevel3 {
  private _buckets: CategoryLevel3Buckets[];

  get buckets(): CategoryLevel3Buckets[] {
    return this._buckets;
  }

  set buckets(value: CategoryLevel3Buckets[]) {
    this._buckets = value;
  }
}
CategoryLevel3
