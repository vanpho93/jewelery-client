export class UserRegisterDetails {
  mobile_number: string;
  verification_code: string;
  password: string;
  username: string;
  first_name: string;
  last_name: string;
  locality_id: string;
  district_id: string;

  constructor(
    mobile_number: string,
    verification_code: string,
    password: string,
    username: string,
    first_name: string,
    last_name: string,
    locality_id: string,
    district_id: string
  ) {
    this.verification_code = verification_code;
    this.password = password;
    this.username = username;
    this.first_name = first_name;
    this.last_name = last_name;
    this.locality_id = locality_id;
    this.district_id = district_id;
    this.mobile_number = mobile_number;
  }
}

