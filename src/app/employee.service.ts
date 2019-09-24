import { Injectable } from "@angular/core";

@Injectable()

export class Employeeservice
{
EmployeeDetails = 
[
    {id:1, name:'abc',dept:'CSE'},
    {id:2, name:'xyz',dept:'ECE'},
    {id:3, name:'mnq',dept:'EE'}
]
getemployee()
{
    return this.EmployeeDetails
}
setemployee(emp)
{
    this.EmployeeDetails.push(emp)
}
}