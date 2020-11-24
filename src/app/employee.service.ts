import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return[
      {"id": 1, "name": "Owais", "age": 20},
      {"id": 2, "name": "Talha", "age": 32},
      {"id": 3, "name": "Saad", "age": 17},
      {"id": 4, "name": "Daniyal", "age": 27},
    ];
  }
}
