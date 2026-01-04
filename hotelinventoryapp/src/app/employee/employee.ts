import { Component, Self } from '@angular/core';
import { RoomService } from '../rooms/roomService/room-service';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
  // Providers are used to register services at the component level
  // This means that this component and its child components will have their own instance of the service
  // If we want to share the same instance across the entire application, we can provide the service in the root injector using providedIn: 'root' in the service itself
  providers: [RoomService],
})
export class Employee {
  employeeName: string = 'John Doe';

  // Using @Self() to inject the RoomService provided at this component level
  // This ensures that we get the instance of RoomService defined in the providers array of this component
  constructor(@Self() private empRoomService: RoomService) {}
}
