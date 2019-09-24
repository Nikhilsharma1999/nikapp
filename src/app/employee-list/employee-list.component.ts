import { Component, OnInit } from '@angular/core';
import { Employeeservice } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employee: Employeeservice) { }

  ngOnInit() {
    this.EmployeeDetails=this.employee.getemployee()
  }
  EmployeeDetails = []

  

  
}
