import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Employee} from './employee'
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'employeeManagerapp';
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService){}
  getEmployee():void{
    this.employeeService.getEmployees().subscribe(
      (res:Employee[])=>{
        this.employees = res
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }
  ngOnInit(): void {
    this.getEmployee
  }
}
