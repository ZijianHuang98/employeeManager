import { HttpErrorResponse } from '@angular/common/http';
import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee'
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employeeManagerapp'
  employees: Employee[] = []
  // demos:Employee[] = [{id:123,
  //   name:"zijian",
  //   phone:'911',
  //   imageUrl:' www.gg.com',
  //   employeeCode:'code',
  //   jobTitle:'title',
  //   email:'jessehuang05@yahoo.com'}]
  constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.getEmployees()
    //console.log('ngOnInit called')
  }
  public getEmployees(): void {
    //console.log("getEmployees called")
    this.employeeService.getEmployees().subscribe({
      next: (res) => {
        this.employees = res
        //console.log('subscribe successfully!!')
      }
    }
      // (res:Employee[])=>{
      //   this.employees = res
      // },
      // (error:HttpErrorResponse)=>{
      //   alert(error.message)
      // }
    )
  }

}
