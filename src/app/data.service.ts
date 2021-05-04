import { Injectable } from '@angular/core';
import { Employee } from './model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  info: Employee[] = [
    new Employee('E354', 'John Mathew', 'jm@abc.net'),
    new Employee('E673', 'Rob Wilson', 'rw@abc.net'),
    new Employee('E865', 'Rose Adams', 'ra@abc.net')
  ];

  getInfo(): Employee[] {
    return this.info;
  }
  constructor() { }

  addLocation(info: string): Employee[] {
    this.info.forEach( (element) => {
      element.location = info;
    });
    return this.info;
  }
}
