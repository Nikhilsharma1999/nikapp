import { Component } from '@angular/core';
import { Employeeservice } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private emp: Employeeservice){}
  title = 'nikapp';
  emp_id
  emp_name
  emp_dept
  myemployee={
    id: 1,
    name:'',
    dept:''
  }
  AddEmployee()
  {
    this.myemployee.id=this.emp_id
    this.myemployee.name=this.emp_name
    this.myemployee.dept=this.emp_dept

    this.emp.setemployee(this.myemployee)
  }
}
