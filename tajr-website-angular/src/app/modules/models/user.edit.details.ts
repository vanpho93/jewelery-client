export class UserEditDetails {
  first_name: string;
  last_name: string;
  locality_id: string;
  district_id: string;

  constructor(
    first_name: string,
    last_name: string,
    locality_id: string,
    district_id: string
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.locality_id = locality_id;
    this.district_id = district_id;
  }
}
