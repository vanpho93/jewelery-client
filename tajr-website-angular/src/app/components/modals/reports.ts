export class Reports {
  private _listing_id: string;
  private _report_reason_id: string;

  constructor(listing_id: string, report_reason_id: string) {
    this._listing_id = listing_id;
    this._report_reason_id = report_reason_id;
  }

  get listing_id(): string {
    return this._listing_id;
  }

  set listing_id(value: string) {
    this._listing_id = value;
  }

  get report_reason_id(): string {
    return this._report_reason_id;
  }

  set report_reason_id(value: string) {
    this._report_reason_id = value;
  }
}
