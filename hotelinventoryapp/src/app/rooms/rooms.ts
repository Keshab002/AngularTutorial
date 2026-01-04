import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  SkipSelf,
  ViewChild,
} from '@angular/core';
import { RoomList, RoomProperties } from './roomProperties';
import { CommonModule } from '@angular/common';
import { RoomlistComponent } from './roomlist-component/roomlist-component';
import { Header } from '../header/header';
import { RoomService } from './roomService/room-service';

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

  // What is Dependency Injection?
  // Dependency Injection (DI) is a design pattern used in Angular to manage the dependencies of components and services.
  // It allows a class to receive its dependencies from an external source rather than creating them itself.
  // This promotes loose coupling, making the code more modular, testable, and maintainable.
  // Here dependency is RoomService which is being injected into Rooms component
  constructor(@SkipSelf() private roomService: RoomService, private cdr: ChangeDetectorRef) {
    console.log('Zone enabled:', typeof (window as any).Zone !== 'undefined');
  }
  // @SkipSelf() is used to tell Angular to look for the dependency in the parent injector
  // This is useful when we want to avoid circular dependencies or when we want to ensure that a service is shared across multiple components
  // In this case, it ensures that the RoomService instance is shared and not created anew for this component

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
    this.roomService.getRoomList().subscribe((rooms) => {
      console.log(rooms, 'rooms data from service');
      this.roomlist = rooms;
      this.cdr.markForCheck();
    });
  }

  OnSelectRoom(Room: RoomList) {
    console.log(Room);
    this.selectedRoom = Room;
  }

  onAddRoom() {
    const room: RoomList = {
      roomNumber: `${this.roomlist.length + 1}`,
      roomType: 'Presidential Suite',
      amenities: 'Air Conditioning, Free Wi-Fi, TV, Mini Bar, Kitchenette, Private Pool',
      price: 500,
      photos:
        'https://plus.unsplash.com/premium_photo-1661766077694-6e3750b0fb97?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('2023-10-01T14:00:00'),
      checkoutTime: new Date('2023-10-02T12:00:00'),
      rating: 5.0,
    };
    // this.roomlist = [...this.roomlist, room];
    this.roomService.addRoom(room).subscribe((rooms) => {
      this.roomlist = rooms;
      this.cdr.markForCheck();
    });
  }

  editRoom() {
    const roomToEdit: RoomList = {
      roomNumber: '1', // Assuming we are editing room number 1
      roomType: 'Deluxe Suite plus plus',
      amenities: 'Air Conditioning, Free Wi-Fi, TV, Mini Bar, Kitchenette, Ocean View',
      price: 400000,
      photos:
        'https://plus.unsplash.com/premium_photo-1661766077694-6e3750b0fb97?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('2023-10-01T15:00:00'),
      checkoutTime: new Date('2023-10-02T11:00:00'),
      rating: 4.5,
    };
    this.roomService.editRoom(roomToEdit).subscribe((rooms) => {
      this.roomlist = rooms;
      this.cdr.markForCheck();
    });
  }

  deleteRoom(roomNumber: string) {
    const roomNumberToDelete = roomNumber; // Assuming we are deleting room number passed as argument
    this.roomService.deleteRoom(roomNumberToDelete).subscribe((rooms) => {
      this.roomlist = [...rooms];
      this.cdr.markForCheck();
    });
  }
}
