import {CategoryLevel2Bucket} from "./categoryLevel2.bucket";

export class CategoryLevel2 {
  private _buckets: CategoryLevel2Bucket[];

  get buckets(): CategoryLevel2Bucket[] {
    return this._buckets;
  }

  set buckets(value: CategoryLevel2Bucket[]) {
    this._buckets = value;
  }
}
