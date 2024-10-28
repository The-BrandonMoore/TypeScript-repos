export class Actor {
  firstName: string;
  lastName: string;
  gender: string;
  birthdate: Date;

  constructor(
    firstName: string,
    lastName: string,
    gender: string,
    birthdate: Date
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthdate = birthdate;
  }
}
