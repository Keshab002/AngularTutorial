import { AfterContentInit, Component, ContentChild, contentChild, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class Container implements AfterContentInit {
  @ContentChild(Employee) employeeComponent!: Employee;
  // Using ContentChild to get a reference to the projected Employee component
  // Here static is by default false, meaning it will be resolved after change detection

  // ngOnInit() {
  //   console.log(this.employeeComponent, 'from container (undefined because static is false)');
  // }

  ngAfterContentInit(): void {
    this.employeeComponent.employeeName = 'Jane Smith';
    console.log(this.employeeComponent.employeeName, 'from ngAfterContentInit in container');
  }
}
