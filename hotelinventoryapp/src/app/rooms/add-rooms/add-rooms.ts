import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomList } from '../roomProperties';
import { JsonPipe } from '@angular/common';
import { RoomService } from '../roomService/room-service';

@Component({
  selector: 'app-add-rooms',
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-rooms.html',
  styleUrl: './add-rooms.scss',
})
export class AddRooms {
  newRoom: RoomList = {
    roomNumber: '',
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
  };

  message: string = '';

  constructor(private roomService: RoomService, private cdr: ChangeDetectorRef) {}

  addRoom(event: any) {
    event.preventDefault();
    console.log('Add Room form submitted');
    this.roomService.addRoom(this.newRoom).subscribe((data) => {
      this.cdr.markForCheck();
      this.message = `Room successfully added with Room Number: ${this.newRoom.roomNumber}`;
    });
  }
}
