export class SearchModel {
  query: string;
  sort_by: string;
  from: string;
  size: string;
  category_id: string;
  locality_id: string;
  district_id: string;
  member_id: string;
  filter_by : string;
  constructor(
    query: string = '',
    sort_by: string = '',
    from: string = '',
    size: string = '',
    category_id: string = '',
    locality_id: string = '',
    district_id: string = '',
    member_id: string = '',
    filter_by: string = '',
  ) {
    this.query = query;
    this.sort_by = sort_by;
    this.from = from;
    this.size = size;
    this.category_id = category_id;
    this.locality_id = locality_id;
    this.district_id = district_id;
    this.member_id = member_id;
    this.filter_by = filter_by;
  }
}

