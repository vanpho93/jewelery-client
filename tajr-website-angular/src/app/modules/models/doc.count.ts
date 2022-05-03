export class DocCount{
  private _doc_count: number;

  get doc_count(): number {
    return this._doc_count;
  }

  set doc_count(value: number) {
    this._doc_count = value;
  }
}
