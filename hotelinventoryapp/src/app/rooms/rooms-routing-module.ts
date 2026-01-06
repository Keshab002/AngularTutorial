import { Routes } from '@angular/router';
import { Rooms } from './rooms';
import { RoomBooking } from './room-booking/room-booking';
import { AddRooms } from './add-rooms/add-rooms';
import { roomGuard } from './guards/room-guard';

export const Roomroutes: Routes = [
  {
    path: 'add-rooms',
    component: AddRooms,
  },
  {
    path: '',
    component: Rooms,
    canActivateChild: [roomGuard],
    children: [
      {
        path: ':id',
        component: RoomBooking,
      },
    ],
  },
];
