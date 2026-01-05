import { Routes } from '@angular/router';
import { Rooms } from './rooms/rooms';
import { Employee } from './employee/employee';
import { NotFound } from './not-found/not-found';
import { RoomBooking } from './rooms/room-booking/room-booking';
import { AddRooms } from './rooms/add-rooms/add-rooms';

export const routes: Routes = [
  {
    path: 'rooms',
    component: Rooms,
  },
  {
    path: 'rooms/:id',
    component: RoomBooking,
  },
  {
    path: 'add-rooms',
    component: AddRooms,
  },
  {
    path: 'employees',
    component: Employee,
  },
  {
    path: '',
    redirectTo: 'rooms',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFound,
  },
];
