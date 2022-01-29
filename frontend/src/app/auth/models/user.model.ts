export class UserBase {
  first_name:string;
  last_name:string;
  email:string;
  phone:string;
}

export class UserRegister extends UserBase {
  password1:string;
  password2:string;
}

export class User extends UserBase {
  password:string;
}

