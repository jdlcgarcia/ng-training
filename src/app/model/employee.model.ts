export class Employee {
  private _id: string;
  private _name: string;
  private _email: string;
  private _location: string;


  constructor(id: string, name: string, email: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._location = '';
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }


}