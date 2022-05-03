import {Bucket} from "./bucket";
import {CategoryLevel2} from "./CategoryLevel2";

export class CategoryLevel1Buckets extends Bucket {
  private _CategoryLevel2: CategoryLevel2;

  get CategoryLevel2(): CategoryLevel2 {
    return this._CategoryLevel2;
  }

  set CategoryLevel2(value: CategoryLevel2) {
    this._CategoryLevel2 = value;
  }
}
