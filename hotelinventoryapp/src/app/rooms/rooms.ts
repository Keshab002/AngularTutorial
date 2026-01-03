import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { RoomList, RoomProperties } from './roomProperties';
import { CommonModule } from '@angular/common';
import { RoomlistComponent } from './roomlist-component/roomlist-component';
import { Header } from '../header/header';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
  imports: [CommonModule, RoomlistComponent, Header],
})

export class Rooms implements OnInit, AfterViewInit, AfterViewChecked {
  hotelName: string = 'Angular Inn';
  numberOfRooms: number = 50;
  hideRooms: boolean = false;
  selectedRoom!: RoomList;
  title: string = 'Show Rooms';
  rooms: RoomProperties = {
    availableRooms: 10,
    bookedRooms: 40,
    totalRooms: 50,
  };

  roomlist: RoomList[] = [];

  @ViewChild(Header, { static: true }) headerComponent!: Header;
  // Lifecycle hook - runs after the component's view (and child views) have been initialized
  // Helps in accessing child components and their properties if they dont have any @Input or @Output decorators
  // What we achieve using static: true is that we can access the child component in ngOnInit itself

  ngAfterViewInit() {
    // Accessing Header component's title property after view initialization
    // this change can also be done in ngAfterViewInit lifecycle hook
    // Main difference between ngAfterViewInit and ngAfterViewChecked is that the latter runs after every change detection cycle and the former runs only once after the view is initialized
    // this.headerComponent.title = 'Hotel Inventory App';
    // Generally gives an error if we try to change data bound properties in ngAfterViewInit because it causes another change detection cycle but it will be only in development mode
  }

  ngAfterViewChecked(): void {
    // It is called after the view and child views have been checked
    // Useful for performing actions that depend on the view being fully rendered
    // Eg: this.headerComponent.title = 'Hotel Inventory App - Checked';

    // console.log(this.headerComponent, 'from ngAfterViewChecked');
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = this.hideRooms ? 'Show Rooms' : 'Hide Rooms';
  }

  ngOnInit() {
    // Lifecycle hook - runs when component is initialized
    console.log(this.headerComponent, 'from ngOnInit');
    this.roomlist = [
      {
        roomNumber: 101,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioning, Free Wi-Fi, TV, Mini Bar',
        price: 150,
        photos:
          'https://plus.unsplash.com/premium_photo-1661766077694-6e3750b0fb97?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        checkinTime: new Date('2023-10-01T14:00:00'),
        checkoutTime: new Date('2023-10-02T12:00:00'),
        rating: 4.5,
      },
      {
        roomNumber: 102,
        roomType: 'Standard Room',
        amenities: 'Free Wi-Fi, TV',
        price: 100,
        photos:
          'https://plus.unsplash.com/premium_photo-1661766077694-6e3750b0fb97?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        checkinTime: new Date('2023-10-01T14:00:00'),
        checkoutTime: new Date('2023-10-02T12:00:00'),
        rating: 3.8,
      },
      {
        roomNumber: 201,
        roomType: 'Suite',
        amenities: 'Air Conditioning, Free Wi-Fi, TV, Mini Bar, Kitchenette',
        price: 250,
        photos:
          'https://plus.unsplash.com/premium_photo-1661766077694-6e3750b0fb97?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        checkinTime: new Date('2023-10-01T14:00:00'),
        checkoutTime: new Date('2023-10-02T12:00:00'),
        rating: 4.980808,
      },
    ];
  }

  OnSelectRoom(Room: RoomList) {
    console.log(Room);
    this.selectedRoom = Room;
  }

  onAddRoom() {
    const room: RoomList = {
      roomNumber: this.roomlist.length + 1,
      roomType: 'Presidential Suite',
      amenities: 'Air Conditioning, Free Wi-Fi, TV, Mini Bar, Kitchenette, Private Pool',
      price: 500,
      photos:
        'https://plus.unsplash.com/premium_photo-1661766077694-6e3750b0fb97?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('2023-10-01T14:00:00'),
      checkoutTime: new Date('2023-10-02T12:00:00'),
      rating: 5.0,
    };
    this.roomlist = [...this.roomlist, room];
  }
}
