export class UserChangePassword {
  old_password: string;
  new_password: string;

  constructor(old_password: string, new_password: string) {
    this.old_password = old_password;
    this.new_password = new_password;
  }
}
