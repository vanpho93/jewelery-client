import {DistrictBuckets} from "./district.buckets";
import {Bucket} from "./bucket";

export class AggregationBucket extends Bucket{
  private _district: DistrictBuckets[];

  get district(): DistrictBuckets[] {
    return this._district;
  }

  set district(value: DistrictBuckets[]) {
    this._district = value;
  }
}
