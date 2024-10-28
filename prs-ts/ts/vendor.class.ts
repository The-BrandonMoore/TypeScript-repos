export class Vendor {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phoneNumber: string;
  email: string;

  constructor(
    id: number = 0,
    name: string = "",
    address: string = "",
    city: string = "",
    state: string = "",
    zip: string = "",
    phoneNumber: string = "",
    email: string = ""
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
