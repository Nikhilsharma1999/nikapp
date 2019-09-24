import { Component, OnInit } from '@angular/core';
import { Employeeservice } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employee: Employeeservice)   {}
    
  

  ngOnInit() {
    this.EmployeeDetails=this.employee.getemployee()
  }
  EmployeeDetails=[]
}
