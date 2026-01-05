import { AfterContentInit, Component, ContentChild, contentChild, Host, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { RoomService } from '../rooms/roomService/room-service';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.scss',
  // providers: [RoomService],
  // We comment out the providers array to use the RoomService instance provided in the root injector
  // because we want to share the same instance across the entire application
  // and to check the shareReplay functionality in RoomService
})
export class Container implements AfterContentInit {
  @ContentChild(Employee) employeeComponent!: Employee;
  // Using ContentChild to get a reference to the projected Employee component
  // Here static is by default false, meaning it will be resolved after change detection

  // ngOnInit() {
  //   console.log(this.employeeComponent, 'from container (undefined because static is false)');
  // }

  constructor() {}
  // constructor(@Host() private roomService : RoomService) {}
  // @Host() is used to get the instance of RoomService from the host component's injector
  // This ensures that we are using the RoomService instance provided at the Container component level
  // This is useful when we want to ensure that the service instance is shared across the Container and its projected content
  // In this case, it ensures that the RoomService instance is the same for both Container and Employee components

  ngAfterContentInit(): void {
    this.employeeComponent.employeeName = 'Jane Smith';
    console.log(this.employeeComponent.employeeName, 'from ngAfterContentInit in container');
  }
}
