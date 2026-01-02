import { Component } from '@angular/core';
import { RoomList, RoomProperties } from './roomProperties';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
  imports: [CommonModule],
})
export class Rooms {
  hotelName: string = 'Angular Inn';
  numberOfRooms: number = 50;
  hideRooms: boolean = false;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  rooms: RoomProperties= {
    availableRooms: 10,
    bookedRooms: 40,
    totalRooms: 50,
  };

  roomlist: RoomList[] = [
    {
      roomNumber: 101,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioning, Free Wi-Fi, TV, Mini Bar',
      price: 150,
      photos: 'https://plus.unsplash.com/premium_photo-1661766077694-6e3750b0fb97?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('2023-10-01T14:00:00'),
      checkoutTime: new Date('2023-10-02T12:00:00'),
    },
    {
      roomNumber: 102,
      roomType: 'Standard Room',
      amenities: 'Free Wi-Fi, TV',
      price: 100,
      photos: 'https://plus.unsplash.com/premium_photo-1661766077694-6e3750b0fb97?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('2023-10-01T14:00:00'),
      checkoutTime: new Date('2023-10-02T12:00:00'),
    },
    {
      roomNumber: 201,
      roomType: 'Suite',
      amenities: 'Air Conditioning, Free Wi-Fi, TV, Mini Bar, Kitchenette',
      price: 250,
      photos: 'https://plus.unsplash.com/premium_photo-1661766077694-6e3750b0fb97?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('2023-10-01T14:00:00'),
      checkoutTime: new Date('2023-10-02T12:00:00'),
    },
  ];


}
