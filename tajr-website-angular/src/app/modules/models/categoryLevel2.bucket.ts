import {Bucket} from "./bucket";
import {CategoryLevel3} from "./CategoryLevel3";

export class CategoryLevel2Bucket extends Bucket {
  private _CategoryLevel3: CategoryLevel3;

  get CategoryLevel3(): CategoryLevel3 {
    return this._CategoryLevel3;
  }

  set CategoryLevel3(value: CategoryLevel3) {
    this._CategoryLevel3 = value;
  }
}
