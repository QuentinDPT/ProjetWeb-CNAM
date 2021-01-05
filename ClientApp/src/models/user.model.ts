export class User{
  name: string;
  surname: string;
  address: string;
  postal_code: string;
  city: string;
  phone: string;
  email: string;
  civility: string;
  login: string;
  password: string;
  country: string;

  constructor(
    name:string="",surname:string="",
    address:string="",postal_code:string="",city:string="",country:string="",
    phone:string="",email:string="",civility:string="",
    login:string="",password:string="")
  {
    this.name = name;
    this.surname = surname;
    this.address = address;
    this.postal_code = postal_code;
    this.city = city;
    this.phone = phone;
    this.email = email;
    this.civility = civility
    this.login = login;
    this.password = password;
    this.country = country ;
  }
}
